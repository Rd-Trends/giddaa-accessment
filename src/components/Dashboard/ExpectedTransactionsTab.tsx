import { useMemo } from "react";
import {
  useGetExpectedTransactions,
  useGetTransactionSummary,
} from "../../api/query";
import SkeletonLoader from "../SkeletonLoader";
import DataCard from "./DataCard";
import { formatDistance } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Table";
import TableSkeletonLoader from "../TableSkeletonLoader";
import { formatCurrency } from "../../utils/formatCurrency";

const ExpectedTransactionsTab = () => {
  const { data, isLoading } = useGetExpectedTransactions();
  const { data: summaryData, isLoading: isSummaryDataLoading } =
    useGetTransactionSummary();

  const tableData = useMemo(() => {
    if (!data) return [];
    return data.value.data.map((item) => ({
      id: item.application.applicationId,
      customer: item.customer.name
        ? item.customer.name
        : `${item.customer.firstName} ${item.customer.lastName}`,
      "Total Due": formatCurrency(item.amount),
      "Total Paid": formatCurrency(item.organizationAmount),
      Balance: formatCurrency(item.organizationAmount),
      property: item.house.name ?? item.house.address ?? "N/A",
      "Next Payment": item.dueDate,
      "Payment Tracker": formatDistance(new Date(), item.dueDate, {
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
        <div className=" grid grid-cols-1 md:grid-cols-4">
          {summaryData && (
            <DataCard
              type="number"
              value={summaryData?.value.expectedNumberOfTransactions}
              title="Expected Transactions"
            />
          )}
        </div>
      )}

      {isLoading && <TableSkeletonLoader numColumns={4} numRows={20} />}

      {!!tableData.length && (
        <div className=" space-y-4">
          <p className=" max-w-3xl">
            Expected transactions involves payments awaiting the payment due
            date, anticipated to be fulfilled by customers, and primarily
            representing future payments.
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

export default ExpectedTransactionsTab;
