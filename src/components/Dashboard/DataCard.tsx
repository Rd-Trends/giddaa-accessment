import { InfoIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import { formatCurrency } from "../../utils/formatCurrency";

const DataCard = (
  props: PropsWithChildren<{
    type: "currency" | "percentage" | "number" | "custom";
    title: string;
    value: number | string;
  }>
) => {
  return (
    <div
      className={
        " w-full space-y-2 p-4 bg-white border-2 border-light-grey " +
        "shadow-[0px_3px_6px_#0000001A] flex flex-col items-center"
      }>
      <div className=" w-full flex items-center justify-end">
        <InfoIcon className=" size-3" />
      </div>

      <div className=" w-full text-center space-y-2 ">
        <p className=" text-xl font-bold">
          {props.type === "currency" && formatCurrency(Number(props.value))}
          {props.type === "percentage" && `${props.value}%`}
          {props.type === "number" && props.value}
          {props.type === "custom" && props.children}
        </p>
        <p className=" text-sm text-grey-700">{props.title}</p>
      </div>
    </div>
  );
};

export default DataCard;
