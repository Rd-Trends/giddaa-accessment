import { useMemo } from "react";
import {
  useGetDefaultTransactions,
  useGetTransactionSummary,
} from "../../api/query";
import SkeletonLoader from "../SkeletonLoader";
import DataCard from "./DataCard";
import { format, formatDistance } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Table";
import TableSkeletonLoader from "../TableSkeletonLoader";

const DefaultTransactionsTab = () => {
  const { data, isLoading } = useGetDefaultTransactions();
  const { data: summaryData, isLoading: isSummaryDataLoading } =
    useGetTransactionSummary();

  const tableData = useMemo(() => {
    if (!data) return [];
    return data.value.data.map((item) => ({
      id: item.application.applicationId,
      customer: item.customer.name
        ? item.customer.name
        : `${item.customer.firstName} ${item.customer.lastName}`,
      Amount: item.amount,
      type: item.transactionType,
      property: item.house.name ?? item.house.address ?? "N/A",
      plan: item.mortgagePlan.name,
      "Due Date": format(new Date(item.dueDate), "do MMMM yyyy"),
      "Days Overdue": formatDistance(new Date(), new Date(item.dueDate), {
        addSuffix: true,
      }),
    }));
  }, [data]);
  console.log(data);

  return (
    <div className=" space-y-8">
      {isSummaryDataLoading ? (
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonLoader key={index} className=" h-32" />
          ))}
        </div>
      ) : (
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
          {summaryData && (
            <>
              <DataCard
                type="currency"
                title="Expected Earnings"
                value={summaryData?.value.expectedEarnings}
              />
              <DataCard
                type="currency"
                title="Total Default Earnings"
                value={summaryData?.value.totalEarned}
              />

              <DataCard
                type="number"
                title="Missed Payments"
                value={summaryData?.value.totalMissedTransactions}
              />

              <DataCard
                type="custom"
                title="Customer who have missed payments"
                value={summaryData?.value.averageMonthlyTransactions}>
                <span className=" text-xl font-bold">
                  <span className=" text-red-500">
                    {summaryData?.value.totalApplicationsWithMissedTransactions}
                  </span>{" "}
                  of {summaryData?.value.totalApplicationsInTransactions}
                </span>
              </DataCard>
            </>
          )}
        </div>
      )}

      {isLoading && <TableSkeletonLoader numColumns={4} numRows={20} />}

      {!!tableData.length && (
        <div className=" space-y-4">
          <p>
            Data on payments that should have beeen made but weren’t and the
            customers who should have paid
          </p>
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                {Object.keys(tableData[0]).map((key) => (
                  <TableHead
                    key={key}
                    className=" whitespace-nowrap font-bold uppercase text-sm ">
                    {key}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={row.id + index}>
                  {Object.keys(row).map((key) => (
                    <TableCell key={key} className=" whitespace-nowrap ">
                      {/* @ts-ignore */}
                      {row[key] as string}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default DefaultTransactionsTab;
