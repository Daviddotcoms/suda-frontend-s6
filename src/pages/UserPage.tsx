import { useParams } from "react-router";

import { useClassmate } from "../hooks/useClassmate";
import { LoadingIcon } from "../shared/components/LoadingIcon";
import { UserCard } from "../components/StudentCard";
import { UserDescription } from "../components/UserDescription";
import { GoBackBtn } from "../shared/components/GoBackBtn";
import { Habilities } from "../components/Habilities";

export const UserPage = () => {
  const { id } = useParams();

  const { classmateQuery } = useClassmate({ id: +id! });
  return (
    <main className={`pt-40`}>
      <GoBackBtn />
      {classmateQuery.isLoading ? (
        <LoadingIcon />
      ) : (
        <section className="grid grid-cols-3 gap-48 px-24">
          <Habilities classmate={classmateQuery.data!} />
          <UserCard
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
