import { Link } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

import { Classmate } from "../interfaces/Classmate";
import { Badge } from "./Badge";

interface StudentCardProps {
  classmate: Classmate;
  hovered?: boolean;
  vertical?: boolean;
}

export const StudentCard = ({
  classmate,
  hovered = true,
  vertical = false,
}: StudentCardProps) => {
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

  const canHover = hovered ? "hover:bg-gray-100 dark:hover:bg-gray-700" : "";
  const imgUrl =
    "https://static.vecteezy.com/system/resources/previews/023/465/688/non_2x/contact-dark-mode-glyph-ui-icon-address-book-profile-page-user-interface-design-white-silhouette-symbol-on-black-space-solid-pictogram-for-web-mobile-isolated-illustration-vector.jpg";

  return (
    <div
      onMouseEnter={presetData}
      className="animate-fadeIn active:transform-[scale(0.98)] duration-200"
    >
      {vertical ? (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className={`aspect-[450/450] duration-1000  rounded-t-lg select-none w-full`}
            src={classmate.image.includes("github") ? classmate.image : imgUrl}
            alt={`Imagen de ${classmate.firstName} ${classmate.lastName}`}
            style={{ viewTransitionName: `image-${classmate.id}` }}
          />
          <div className="p-5">
            <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white select-none">
              {classmate.firstName} {classmate.lastName}
            </h5>
            <p className="mb-4 font-normal text-gray-700 dark:text-gray-500">
              {classmate.email}
            </p>
            <p className="mb-3 font-semibold text-md text-white dark:text-gray-300 select-none">
              Características
            </p>
            <Badge text={classmate.username} />
            <Badge text={`${classmate.age.toString()} años`} />
            <Badge text={"React Developer"} />
            <Badge text={"Nestjs Developer"} color="#e0234e" />
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
            src={classmate.image.includes("github") ? classmate.image : imgUrl}
            alt={`Imagen de ${classmate.firstName} ${classmate.lastName}`}
            style={{ viewTransitionName: `image-${classmate.id}` }}
          />
          <div className="flex flex-col justify-between p-4 leading-normal ml-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {classmate.firstName} {classmate.lastName}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {classmate.email}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};
