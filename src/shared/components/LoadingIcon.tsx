import { FiRefreshCw } from "react-icons/fi";

import { preference } from "../../helpers/colorSchemePreference";

export const LoadingIcon = () => {
  return (
    <div className="flex justify-center items-center relative">
      <FiRefreshCw
        size={40}
        className="animate-spin absolute top-50"
        color={preference ? "white" : "black"}
      />
    </div>
  );
};
