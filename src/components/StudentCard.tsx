import { Link } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

import { Classmate } from "../interfaces/Classmate";

interface UserCardProps {
  classmate: Classmate;
  hovered?: boolean;
  vertical?: boolean;
}

export const UserCard = ({
  classmate,
  hovered = true,
  vertical = false,
}: UserCardProps) => {
  const queryClient = useQueryClient();

  // * This just was a test
  // const prefetch = () => {
  //   queryClient.prefetchQuery({
  //     queryKey: ["classmate", classmate.id],
  //     queryFn: () => actions.getClassmateById(+classmate.id),
  //     staleTime: 1000 * 60,
  //   });
  // };

  const presetData = () => {
    queryClient.setQueryData(["classmate", +classmate.id], classmate, {});
  };

  const username =
    classmate.username.length > 15
      ? classmate.username.slice(0, 15).trim() + "..."
      : classmate.username.trim();

  const canHover = hovered ? "hover:bg-gray-100 dark:hover:bg-gray-700" : "";
  return (
    <div
      onMouseEnter={presetData}
      className="animate-fadeIn active:transform-[scale(0.98)]"
    >
      {vertical ? (
        <div className="w-[400px] bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className={`aspect-square rounded-t-lg select-none w-full`}
            src={classmate.image}
            alt={`Imagen de ${classmate.firstName} ${classmate.lastName}`}
            style={{ viewTransitionName: `image-${classmate.id}` }}
          />
          <div className="p-5">
            <div className="flex gap-2 items-end mb-2">
              <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white select-none">
                {classmate.firstName} {classmate.lastName}
              </h5>
              <a className="cursor-pointer" id="username">
                <h6 className="text-xl text-gray-500 mb-0 select-none">{`(${username})`}</h6>
              </a>
            </div>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-500 select-none">
              {classmate.email}
            </p>
          </div>
        </div>
      ) : (
        <Link
          viewTransition
          key={classmate.id}
          to={`/classmates/${classmate.id}`}
          className={`flex flex-col items-center bg-white border dark:border-gray-700 dark:bg-gray-800 border-gray-200 rounded-xl shadow-sm md:flex-row md:max-w-xl h-50 w-2xl ${canHover}`}
        >
          <img
            className={`aspect-[450/450] duration-1000 object-cover rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-s-lg`}
              src={classmate.image}
            alt={`Imagen de ${classmate.firstName} ${classmate.lastName}`}
            style={{ viewTransitionName: `image-${classmate.id}` }}
          />
            <div className="flex flex-col justify-between p-4 leading-normal ml-2 h-full py-16">
              <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {classmate.firstName} {classmate.lastName}
            </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              {classmate.email}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};
