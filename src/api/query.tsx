import { useQuery } from "@tanstack/react-query";
import { useUser } from "../hooks/useUser";
import {
  DEFAULT_TRANSACTIONS,
  EXPECTED_TRANSACTIONS,
  SUCCESSFUL_TRANSACTIONS,
  TRANSACTION_SUMMARY,
} from "./keys";
import {
  getDefaultTransactions,
  getExpectedTransactions,
  getSuccessfulTransactions,
  getTransactionSummary,
} from "./services";

export const useGetDefaultTransactions = () => {
  const { token } = useUser();

  return useQuery({
    queryKey: [DEFAULT_TRANSACTIONS],
    queryFn: () => getDefaultTransactions(token!),
    enabled: !!token,
  });
};
export const useGetSuccessfulTransactions = () => {
  const { token } = useUser();

  return useQuery({
    queryKey: [SUCCESSFUL_TRANSACTIONS],
    queryFn: () => getSuccessfulTransactions(token!),
    enabled: !!token,
  });
};
export const useGetTransactionSummary = () => {
  const { token } = useUser();

  return useQuery({
    queryKey: [TRANSACTION_SUMMARY],
    queryFn: () => getTransactionSummary(token!),
    enabled: !!token,
  });
};
export const useGetExpectedTransactions = () => {
  const { token } = useUser();

  return useQuery({
    queryKey: [EXPECTED_TRANSACTIONS],
    queryFn: () => getExpectedTransactions(token!),
    enabled: !!token,
  });
};
