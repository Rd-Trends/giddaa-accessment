import { LoginResponse, LoginUserParams } from "../types/auth";
import { TransactionSummary, Transactions } from "../types/transactions";
import {
  DEFAULT_TRANSACTIONS,
  EXPECTED_TRANSACTIONS,
  LOGINURL,
  SUCCESSFUL_TRANSACTIONS,
  TRANSACTION_SUMMARY,
} from "./endpoints";

export const loginUser = async ({ email, password }: LoginUserParams) => {
  const response = await fetch(LOGINURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    return response.json() as Promise<LoginResponse>;
  } else {
    const res = await response.json();
    throw new Error(res.value.message);
  }
};

export const getDefaultTransactions = async (token: string) => {
  const response = await fetch(DEFAULT_TRANSACTIONS, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  if (response.ok) {
    return (await response.json()) as Promise<Transactions>;
  } else {
    const res = await response.json();
    throw new Error(res.message);
  }
};
export const getTransactionSummary = async (token: string) => {
  const response = await fetch(TRANSACTION_SUMMARY, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  if (response.ok) {
    return (await response.json()) as Promise<TransactionSummary>;
  } else {
    const res = await response.json();
    throw new Error(res.message);
  }
};
export const getSuccessfulTransactions = async (token: string) => {
  const response = await fetch(SUCCESSFUL_TRANSACTIONS, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  if (response.ok) {
    return (await response.json()) as Promise<Transactions>;
  } else {
    const res = await response.json();
    throw new Error(res.message);
  }
};
export const getExpectedTransactions = async (token: string) => {
  const response = await fetch(EXPECTED_TRANSACTIONS, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  if (response.ok) {
    return (await response.json()) as Promise<Transactions>;
  } else {
    const res = await response.json();
    throw new Error(res.message);
  }
};
