import { createContext, useState } from "react";
import { User } from "../types/User";
import { useLocalStorage } from "../hooks/useLocalStorage";

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  token: string | null;
  setToken: (token: string) => void;
  onLoginSuccess: ({ token, user }: { token: string; user: User }) => void;
  onLogout: () => void;
};

const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { get, set, remove } = useLocalStorage();
  const [user, setUser] = useState<User | null>(() => {
    return get<User>("user");
  });
  const [token, setToken] = useState<string | null>(() => {
    return get<string>("token");
  });

  const onLoginSuccess = ({ token, user }: { token: string; user: User }) => {
    setToken(token);
    setUser(user);
    set("token", token);
    set("user", user);
  };

  const onLogout = () => {
    setToken(null);
    setUser(null);
    remove("token");
    remove("user");
  };

  const value = { user, setUser, token, setToken, onLoginSuccess, onLogout };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
