import { useQuery } from "@tanstack/react-query";
import { getByFilter } from "../services/actions/actions";
import { Filters } from "../enums/Filters";

interface UseClassmatesProps {
  filter: Filters;
}

export const useClassmates = ({ filter }: UseClassmatesProps) => {
  const classmatesQuery = useQuery({
    queryKey: [filter],
    queryFn: () => getByFilter(filter),
    staleTime: 1000 * 60,
    retry: 1,
  });

  return {
    classmatesQuery,
  };
};
