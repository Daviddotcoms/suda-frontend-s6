import { useParams } from "react-router";

import { useClassmate } from "../hooks/useClassmate";
import { LoadingIcon } from "../shared/components/LoadingIcon";
import { StudentCard } from "../components/StudentCard";
import { UserDescription } from "../components/UserDescription";
import { GoBackBtn } from "../shared/components/GoBackBtn";

export const UserPage = () => {
  const { id } = useParams();

  const { classmateQuery } = useClassmate({ id: +id! });

  return (
    <main className={`pt-40`}>
      <GoBackBtn />
      {classmateQuery.isLoading ? (
        <LoadingIcon />
      ) : (
        <section className="grid grid-cols-3 gap-48">
          <span></span>
          <StudentCard
            classmate={classmateQuery.data!}
            hovered={false}
            vertical
          />
          <UserDescription classmate={classmateQuery.data!} />
        </section>
      )}
    </main>
  );
};
