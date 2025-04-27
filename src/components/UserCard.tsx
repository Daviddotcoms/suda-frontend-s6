import { useQueryClient } from "@tanstack/react-query";

import { Classmate } from "../interfaces/Classmate";
import { VerticalCard } from "./VerticalCard";
import { HorizontalCard } from "./HorizontalCard";

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

  return (
    <div
      onMouseEnter={presetData}
      className="animate-fadeIn active:transform-[scale(0.98)]"
    >
      {vertical ? (
        <VerticalCard classmate={classmate} />
      ) : (
          <HorizontalCard classmate={classmate} hovered={hovered} />
      )}
    </div>
  );
};
