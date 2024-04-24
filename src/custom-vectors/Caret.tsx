import { SVGProps } from "react";

const Caret = ({ fill = "#335f32", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={16.001}
    viewBox="0 0 10 16.001"
    {...props}>
    <path
      fill={fill}
      d="M9.674 7.301c-.012-.01-.028-.014-.04-.024L1.92.292a1.2 1.2 0 0 0-1.572 0A.042.042 0 0 0 .34.301a.936.936 0 0 0-.34.715v13.966a.948.948 0 0 0 .352.719 1.2 1.2 0 0 0 1.572 0l7.754-7a.928.928 0 0 0 0-1.412Z"
      data-name="Path 2913"
    />
  </svg>
);
export default Caret;
