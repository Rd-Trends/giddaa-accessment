import { use100vh } from "react-div-100vh";
import Logo from "./Logo";

const PageLoadingIndicator = () => {
  const height = use100vh() || "100vh";
  return (
    <div
      style={{ height }}
      className="w-full flex flex-col items-center justify-center space-y-2">
      <Logo size="lg" />
      {/* spinner  */}

      <div
        role="presentation"
        className="size-8 border-4 border-primary border-solid rounded-full animate-spin border-r-transparent"
      />
    </div>
  );
};

export default PageLoadingIndicator;
