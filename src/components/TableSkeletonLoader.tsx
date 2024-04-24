import SkeletonLoader from "./SkeletonLoader";

const TableSkeletonLoader = ({
  numRows = 20,
  numColumns = 4,
}: {
  numRows?: number;
  numColumns?: number;
}) => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-8 rounded-t"></div>
      <div className="grid grid-cols-4 gap-4 py-4">
        {Array.from({ length: numRows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-4 gap-4 bg-gray-300 rounded p-4">
            {Array.from({ length: numColumns }).map((_, colIndex) => (
              <SkeletonLoader key={colIndex} className="h-4" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeletonLoader;
