import clsx from "clsx";
import logo from "../assets/logo/gidda-logo-x2.png";
import { NavLink } from "react-router-dom";

const Logo = ({ size = "sm" }: { size?: "sm" | "md" | "lg" }) => {
  return (
    <NavLink to="/" className={" block"}>
      <img
        src={logo}
        alt="Logo"
        className={clsx(" h-auto", {
          "w-16": size === "md",
          "w-10": size === "sm",
          "w-24": size === "lg",
        })}
        loading="eager"
      />
    </NavLink>
  );
};

export default Logo;
