import DefaultTransactionsTab from "../../components/Dashboard/DefaultTransactionsTab";
import ExpectedTransactionsTab from "../../components/Dashboard/ExpectedTransactionsTab";
import DashobardHeader from "../../components/Dashboard/Header";
import SuccessfulTransactionsTab from "../../components/Dashboard/SuccessfulTransactionsTab";
import TransactionSummaryTab from "../../components/Dashboard/TransactionSummaryTab";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/Tabs";

const TransactionsPage = () => {
  const tabs = [
    { tab: "Summary", component: <TransactionSummaryTab /> },
    {
      tab: "Successful Transactions",
      component: <SuccessfulTransactionsTab />,
    },
    {
      tab: "Expected Transactions",
      component: <ExpectedTransactionsTab />,
    },
    {
      tab: "Defaults",
      component: <DefaultTransactionsTab />,
    },
    {
      tab: "Analytics",
      component: <p>Analytics</p>,
    },
    {
      tab: "Forecast",
      component: <p>Forecast</p>,
    },
  ];

  return (
    <div className=" space-y-4">
      <DashobardHeader
        heading="Transactions"
        description="View all your transactions and how much you have earned from customers"
      />

      <Tabs defaultValue={tabs[3].tab} className="w-full space-y-4">
        <TabsList
          className={
            " py-0 justify-start relative border-r-gray-400 w-full overflow-x-auto h-full" +
            " space-x-4 after:absolute after:left-0 after:right-0 after:w-full after:h-[2px] after:bottom-0 " +
            " after:bg-grey-f2 after:-z-10"
          }>
          {tabs.map((item) => (
            <TabsTrigger
              key={item.tab + "tab-trigger"}
              className={
                " px-0 text-sm uppercase text-[#707070] outline-none" +
                " border-b-2 data-[state=active]:border-primary "
              }
              value={item.tab}>
              {item.tab}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((item) => {
          return (
            <TabsContent key={item.tab + "tabcontent"} value={item.tab}>
              {item.component}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default TransactionsPage;
