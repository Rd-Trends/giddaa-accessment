import clsx from "clsx";
import { ReactNode } from "react";
import { use100vh } from "react-div-100vh";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../components/Logo";
import { dashboardNavItems } from "../../constants/dashboard-nav-items";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/Accordion";
import { ChevronDownIcon, LogOutIcon } from "lucide-react";
import { useUser } from "../../hooks/useUser";

const DashboardSidebar = () => {
  const height = use100vh() || "100vh";
  const { onLogout } = useUser();

  return (
    <div
      style={{ height }}
      className=" pl-4 pt-4 overflow-y-auto flex flex-col space-y-6 justify-between bg-light-grey">
      <div className=" space-y-6">
        <Logo />

        <ul className=" flex flex-col space-y-4">
          {dashboardNavItems.map((item) => {
            if (item.children) {
              return (
                <Accordion key={item.title} type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger
                      className={
                        " hover:no-underline py-0 flex items-center justify-start space-x-4 pr-4 [&>svg:first-child]:!rotate-0 "
                      }>
                      {item.icon}
                      <span className=" text-base text-black font-semibold whitespace-nowrap">
                        {item.title}
                      </span>
                      <ChevronDownIcon className="size-4 rounded-full" />
                    </AccordionTrigger>
                    <AccordionContent className=" top-full mt-4 p-4 bg-white rounded-lg mr-4">
                      <ul className=" flex flex-col items-start space-y-2  ">
                        {item.children.map((child) => (
                          <li key={child.title}>
                            <SidebarItem
                              title={child.title}
                              url={child.url}
                              icon={child.icon}
                            />
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }
            return (
              <li key={item.title}>
                <SidebarItem
                  title={item.title}
                  url={item.url}
                  icon={item.icon}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <button
        onClick={() => onLogout?.()}
        className={
          " text-red-500 text-sm py-4 px-4 border-t border-gray-300 font-semibold" +
          " flex items-center space-x-4"
        }>
        <span>LOG OUT </span>
        <LogOutIcon className=" size-4" />
      </button>
    </div>
  );
};

export default DashboardSidebar;

const SidebarItem = ({
  title,
  url,
  icon,
}: {
  title: string;
  url: string;
  icon: ReactNode;
}) => {
  const location = useLocation();
  const isActive = location.pathname === url;

  return (
    <NavLink
      to={url}
      className={clsx(
        "flex items-center space-x-2 text-black pr-4 border-r-4 font-semibold",
        {
          "text-primary border-primary ": isActive,
          "border-transparent": !isActive,
        }
      )}>
      {icon}
      <span className=" whitespace-nowrap">{title}</span>
    </NavLink>
  );
};
