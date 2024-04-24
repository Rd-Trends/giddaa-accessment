export type TransactionSummary = {
  statusCode: number;
  message: string;
  value: {
    expectedEarnings: number;
    totalEarned: number;
    leftToEarn: number;
    averageAmountEarned: number;
    totalMissedTransactionsAmount: number;
    expectedNumberOfTransactions: number;
    numberOfTransactionsLeft: number;
    totalTransactions: number;
    totalPaidTransactions: number;
    totalUnpaidTransactions: number;
    averageMonthlyTransactions: number;
    totalMissedTransactions: number;
    transactionDefaultRate: number;
    totalApplicationsInTransactions: number;
    totalApplicationsWithMissedTransactions: number;
  };
};

export type Transactions = {
  statusCode: number;
  message: string;
  value: {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
    data: Array<{
      rrr: string;
      transactionType: string;
      amount: number;
      organizationAmount: number;
      giddaaAmount: number;
      defaultAmount: number;
      application: {
        applicationId: string;
        status: any;
      };
      customer: {
        customerId: string;
        name: any;
        firstName: string;
        lastName: string;
        email: any;
        age: number;
        income: number;
        phoneNumber: any;
        gender: any;
        profilePicture: any;
        dateOfBirth: string;
        withInNigeria: boolean;
        affordability: any;
      };
      mortgagePlan: {
        mortgagePlanId: string;
        name: string;
        type: any;
      };
      house: {
        houseId: string;
        name: any;
        stateName: string;
        cityName: string;
        completionStatus: any;
        address: any;
        type: string;
        organization: any;
        images: any;
      };
      dueDate: string;
      dateOfPayment: string;
      isPaid: boolean;
    }>;
  };
};
