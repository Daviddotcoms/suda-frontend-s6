import { FiRefreshCw } from "react-icons/fi";

export const LoadingIcon = () => {
  return (
    <div className="flex justify-center items-center relative">
      <FiRefreshCw
        size={40}
        className="animate-spin absolute top-50"
        color="white"
      />
    </div>
  );
};
