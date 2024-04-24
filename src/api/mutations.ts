import { useMutation } from "@tanstack/react-query";
import { loginUser } from "./services";

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ["loginUser"],
    mutationFn: loginUser,
  });
};
