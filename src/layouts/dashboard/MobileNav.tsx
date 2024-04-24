import { BellIcon, MenuIcon, XIcon } from "lucide-react";
import React from "react";
import Logo from "../../components/Logo";
import { AnimatePresence, motion } from "framer-motion";
import DashboardSidebar from "./DashboardSidebar";

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className=" relative">
      <div className="flex items-center justify-between lg:hidden bg-light-grey mx-4 my-2 px-4 py-2 rounded-md shadow-md">
        <div className=" flex items-center space-x-2">
          <button
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className=" outline-none focus:outline-none p-2 rounded-sm hover:bg-light-grey"
            onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon className=" size-6 " />
          </button>

          <Logo size="sm" />
        </div>

        <div className=" relative flex items-center justify-center p-3 bg-primary text-white rounded-full">
          <BellIcon className=" size-6 " />
          <span
            className={
              "flex items-center justify-center absolute bg-white size-4 text-primary " +
              "text-xs font-bold rounded-full top-2 right-2"
            }>
            2
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <div className=" absolute top-0 bottom-0 z-50 left-0 right-0 w-full">
            {/* overlay */}
            <motion.div
              className=" fixed inset-0 bg-black bg-opacity-50 duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              id="mobile-nav"
              className=" fixed inset-y-0 left-0 bg-light-grey shadow-lg z-50 duration-300"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}>
              <DashboardSidebar />
            </motion.div>

            <motion.button
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={
                "z-50 absolute top-4 right-4 p-3 bg-white rounded-full " +
                " shadow-md hover:bg-light-grey-dark focus:outline-none duration-300"
              }
              onClick={() => setIsOpen(false)}>
              <XIcon className="size-6" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
