import clsx from "clsx";

const SkeletonLoader = ({ className = "" }: { className?: string }) => {
  return <div className={clsx("bg-gray-300 animate-pulse", className)} />;
};

export default SkeletonLoader;
