import { BellIcon } from "lucide-react";

const DashobardHeader = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) => {
  return (
    <div className=" w-full flex items-center justify-between">
      <div className=" space-y-1">
        <h1 className=" text-3xl md:text-4xl font-millik">{heading}</h1>
        <p className=" text-lg font-medium text-gray-500">{description}</p>
      </div>

      <button className=" relative hidden lg:flex items-center justify-center p-3 bg-primary text-white rounded-full">
        <BellIcon className=" size-6 " />
        <span
          className={
            "flex items-center justify-center absolute bg-white size-4 text-primary " +
            "text-xs font-bold rounded-full top-2 right-2"
          }>
          2
        </span>
      </button>
    </div>
  );
};

export default DashobardHeader;
