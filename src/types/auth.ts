import { User } from "./User";

export type LoginResponse = {
  value: {
    message: string;
    statusCode: number;
    value: {
      token: string;
      user: User;
    };
  };
};

export type LoginUserParams = {
  email: string;
  password: string;
};
