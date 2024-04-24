import { useMemo } from "react";
import {
  useGetSuccessfulTransactions,
  useGetTransactionSummary,
} from "../../api/query";
import SkeletonLoader from "../SkeletonLoader";
import DataCard from "./DataCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Table";
import { formatCurrency } from "../../utils/formatCurrency";
import { format } from "date-fns";
import TableSkeletonLoader from "../TableSkeletonLoader";

const SuccessfulTransactionsTab = () => {
  const { data, isLoading } = useGetSuccessfulTransactions();
  const { data: summaryData, isLoading: isSummaryDataLoading } =
    useGetTransactionSummary();

  const tableData = useMemo(() => {
    if (!data) return [];
    return data.value.data.map((item) => ({
      id: item.application.applicationId,
      customer: item.customer.name
        ? item.customer.name
        : `${item.customer.firstName} ${item.customer.lastName}`,
      "Total Paid": item.amount,
      "Your Earnings": item.organizationAmount,
      "Giddaa Earnings": item.giddaaAmount,
      type: item.transactionType,
      property: item.house.name ?? item.house.address ?? "N/A",
      plan: item.mortgagePlan.name,
      "Payment Date": item.dateOfPayment,
    }));
  }, [data]);

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
              value={summaryData?.value.totalPaidTransactions}
              title="Total Successful Transactions"
            />
          )}
        </div>
      )}

      {isLoading && <TableSkeletonLoader numColumns={4} numRows={20} />}

      {!!tableData.length && (
        <div className=" space-y-4">
          <p>Successfull transactions made by customer in your organization</p>
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
                  <TableCell className=" w-[150px]  ">{row.id}</TableCell>
                  <TableCell>{row.customer}</TableCell>
                  <TableCell>
                    <div className=" flex flex-col text-center space-y-1">
                      <span className=" ">
                        {formatCurrency(row["Total Paid"])}
                      </span>
                      <span className=" text-primary">
                        {`(${
                          Math.round(row["Total Paid"] / row["Total Paid"]) *
                          100
                        }%)`}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className=" flex flex-col text-center space-y-1">
                      <span className=" ">
                        {formatCurrency(row["Your Earnings"])}
                      </span>
                      <span className=" text-primary">
                        {`(${Math.round(
                          (row["Your Earnings"] / row["Total Paid"]) * 100
                        )}%)`}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className=" flex flex-col text-center space-y-1">
                      <span className=" ">
                        {formatCurrency(row["Giddaa Earnings"])}
                      </span>
                      <span className=" text-primary">
                        {`(${Math.round(
                          (row["Giddaa Earnings"] / row["Total Paid"]) * 100
                        )}%)`}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.property}</TableCell>
                  <TableCell>{row.plan}</TableCell>
                  <TableCell>
                    {/* format 4th may 2029 */}
                    {format(new Date(row["Payment Date"]), "do MMMM yyyy")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default SuccessfulTransactionsTab;
