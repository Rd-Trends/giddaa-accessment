import { useGetTransactionSummary } from "../../api/query";
import SkeletonLoader from "../SkeletonLoader";
import DataCard from "./DataCard";

const TransactionSummaryTab = () => {
  const { data, isLoading } = useGetTransactionSummary();

  if (isLoading) {
    return (
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <SkeletonLoader key={index} className=" h-32" />
        ))}
      </div>
    );
  }

  const summary = data?.value;

  return (
    <div className=" space-y-4">
      <div className=" space-y-2">
        <p className=" text-lg font-semibold">Earnings Breakdown</p>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
          {summary && (
            <>
              <DataCard
                type="currency"
                title="Expected Earnings"
                value={summary.expectedEarnings}
              />
              <DataCard
                type="currency"
                title="Total Earnings"
                value={summary.totalEarned}
              />
              <DataCard
                type="currency"
                title="Left to Earn"
                value={summary.leftToEarn}
              />
              <DataCard
                type="currency"
                title="Average Amount Earned"
                value={summary.averageAmountEarned}
              />
            </>
          )}
        </div>
      </div>

      <div>
        <p className=" text-lg font-semibold">Frequency Breakdown</p>

        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
          {summary && (
            <>
              <DataCard
                type="number"
                title="Expected Number of Transactions"
                value={summary.expectedNumberOfTransactions}
              />
              <DataCard
                type="number"
                title="Total Transactions"
                value={summary.totalTransactions}
              />
              <DataCard
                type="number"
                title="Number of Transactions Left"
                value={summary.numberOfTransactionsLeft}
              />
              <DataCard
                type="currency"
                title="Average No of Transactions/Month"
                value={summary.averageMonthlyTransactions}
              />
            </>
          )}
        </div>
      </div>

      <div>
        <p className=" text-lg font-semibold">Default Breakdown</p>

        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
          {summary && (
            <>
              <DataCard
                type="number"
                title="Missed Payments"
                value={summary.totalMissedTransactions}
              />
              <DataCard
                type="percentage"
                title="Transaction Default Rate"
                value={Math.round(summary.transactionDefaultRate * 100)}
              />
              <DataCard
                type="custom"
                title="Customer who have missed payments"
                value={summary.averageMonthlyTransactions}>
                <span className=" text-xl font-bold">
                  <span className=" text-red-500">
                    {summary.totalApplicationsWithMissedTransactions}
                  </span>{" "}
                  of {summary.totalApplicationsInTransactions}
                </span>
              </DataCard>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionSummaryTab;
