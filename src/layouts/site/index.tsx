import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const SiteLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen justify-between">
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SiteLayout;
