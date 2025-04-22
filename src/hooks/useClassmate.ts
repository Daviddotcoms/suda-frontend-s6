import { useQuery } from "@tanstack/react-query";
import { actions } from "../services/actions/actions";

interface UsaClassmateProps {
  id: number;
}

export const useClassmate = ({ id }: UsaClassmateProps) => {
  const classmateQuery = useQuery({
    queryKey: ["classmate", id],
    queryFn: () => actions.getClassmateById(id),
    staleTime: 1000 * 60,
    retry: 1,
  });

  return {
    classmateQuery,
  };
};
