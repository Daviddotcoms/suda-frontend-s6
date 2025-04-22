import { Outlet } from "react-router";

export const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Outlet />
    </div>
  );
};
