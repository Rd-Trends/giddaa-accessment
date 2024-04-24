import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center text-center">
      <h1 className=" font-millik text-7xl md:text-9xl ">404</h1>
      <p className=" text-2xl md:text-3xl">Page Not Found</p>
      <NavLink
        to="/"
        className=" bg-primary hover:bg-primary/80 text-white px-6 py-2.5 rounded-full mt-4">
        Go back to Home
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
