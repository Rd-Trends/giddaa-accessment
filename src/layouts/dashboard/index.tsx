import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import MobileNav from "./MobileNav";
import { use100vh } from "react-div-100vh";
import { CircleHelpIcon } from "lucide-react";

const DashboardLayout = () => {
  const height = use100vh() || "100vh";
  return (
    <div style={{ height }} className=" relative flex flex-col lg:flex-row">
      <div className=" hidden lg:block w-1/5 ">
        <DashboardSidebar />
      </div>
      <MobileNav />
      <div className=" my-4 md:my-6 px-4 md:px-8 lg:px-10 w-full lg:w-4/5 lg:overflow-y-auto ">
        <Outlet />
      </div>

      <button
        className={
          " fixed bottom-4 right-4 bg-white p-2.5 px-4 text-xs border rounded-full shadow-md " +
          " hover:bg-primary hover:text-white flex items-center justify-center " +
          " space-x-4 uppercase transform transition-colors duration-200 "
        }
        onClick={() => window.scrollTo(0, 0)}>
        <CircleHelpIcon className=" size-4" />
        <span>Help & Support</span>
      </button>
    </div>
  );
};

export default DashboardLayout;
