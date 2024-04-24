import SecureLS from "secure-ls";

export const useLocalStorage = () => {
  const ls = new SecureLS({ isCompression: false });

  const get = <T>(key: string): T | null => {
    try {
      const value = ls.get(key) as T;
      return value ?? null;
    } catch (error) {
      return null;
    }
  };

  const set = <T>(key: string, value: T) => {
    ls.set(key, value);
  };

  const remove = (key: string) => {
    ls.remove(key);
  };

  return { get, set, remove };
};
