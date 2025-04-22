import { Classmate } from "../interfaces/Classmate";
import { StudentCard } from "./StudentCard";

interface ListProps {
  classmates: Classmate[];
}

export const List = ({ classmates }: ListProps) => {
  return (
    <div className="flex flex-wrap pb-14 gap-4 justify-center items-center">
      {classmates.map((classmate) => (
        <StudentCard key={classmate.id} classmate={classmate} />
      ))}
    </div>
  );
};
