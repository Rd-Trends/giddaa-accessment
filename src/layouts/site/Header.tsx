import { NavLink } from "react-router-dom";
import { siteNavItems } from "../../constants/site-nav-items";
import { BellIcon, LogInIcon, MenuIcon, SearchIcon, XIcon } from "lucide-react";
import clsx from "clsx";
import Logo from "../../components/Logo";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useUser } from "../../hooks/useUser";

const Header = () => {
  const { user } = useUser();

  return (
    <div
      className={
        "container bg-grey-f2 py-3 flex items-center relative " +
        "justify-between w-full shadow-[0px_3px_6px_#00000005]"
      }>
      <div className=" w-full flex items-center lg:space-x-6 xl:space-x-12">
        <Logo />
        <div className="relative hidden lg:flex items-center w-full max-w-xs xl:max-w-md">
          <input
            type="search"
            placeholder="Search for Properties, Developers, Banks..."
            className=" bg-white w-full rounded-full py-3 px-4 pr-8 placeholder:text-dark-grey"
          />
          <SearchIcon className=" absolute right-4 size-4" />
        </div>
        <nav className="hidden lg:block">
          <ul className=" flex items-center space-x-6 xl:space-x-12">
            {siteNavItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    clsx(" font-medium relative ", {
                      "text-primary font-bold after:size-3 after:left-[calc(50%-6px)] after:rounded-full after:block after:bg-primary after:absolute after:-bottom-4":
                        isActive,
                      "text-dark-grey": !isActive,
                    })
                  }>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {user ? (
        <>
          <NavLink
            to="/dashboard"
            className=" relative hidden lg:flex items-center justify-center p-3 bg-primary text-white rounded-full">
            <BellIcon className=" size-6 " />
            <span
              className={
                "flex items-center justify-center absolute bg-white size-4 text-primary " +
                "text-xs font-bold rounded-full top-2 right-2"
              }>
              2
            </span>
          </NavLink>
        </>
      ) : (
        <NavLink
          to="/login"
          className={
            " py-2.5 px-6 rounded-full bg-primary hover:bg-primary/90 text-white " +
            "hidden lg:flex items-center space-x-2 font-medium"
          }>
          <span>Login</span> <LogInIcon className=" size-4" />
        </NavLink>
      )}

      <MobileMenu />
    </div>
  );
};

const navMenuVariants = {
  open: { opacity: 1, top: "100%" },
  closed: { opacity: 0, top: "90%" },
};

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenuRef = useRef<HTMLDivElement>(null);

  const toggleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeNavMenu = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeNavMenu();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target as Node)
      ) {
        closeNavMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" lg:hidden">
      <button
        onClick={toggleNavMenu}
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav"
        className=" outline-none focus:outline-none p-2 rounded-sm hover:bg-light-grey">
        {isMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav"
            className="container bg-grey-f2 py-6 text-white absolute left-0 w-full z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={navMenuVariants}
            transition={{ duration: 0.3 }}
            ref={navMenuRef}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true">
            <ul className="py-4 space-y-3">
              {siteNavItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      clsx(" font-medium relative ", {
                        "text-primary pl-4 border-primary border-l-4 ":
                          isActive,
                        "text-dark-grey": !isActive,
                      })
                    }>
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            <NavLink
              to="/login"
              className={
                " py-2 px-6 rounded-full bg-primary hover:bg-primary/90 text-white " +
                "flex items-center justify-center space-x-2 font-medium"
              }>
              <span>Login</span> <LogInIcon className=" size-4" />
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
