const baseURL = import.meta.env.VITE_BASE_API_URL as string;

export const LOGINURL = `${baseURL}/account/login`;
export const DEFAULT_TRANSACTIONS = `${baseURL}/developer/transaction/get-missed-payments`;
export const TRANSACTION_SUMMARY = `${baseURL}/developer/transaction/get-summary`;
export const EXPECTED_TRANSACTIONS = `${baseURL}/developer/transaction/get-expected-payments`;
export const SUCCESSFUL_TRANSACTIONS = `${baseURL}/developer/transaction/get-succesful-payments`;
