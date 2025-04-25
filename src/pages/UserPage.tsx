import { useParams } from "react-router";

import { useClassmate } from "../hooks/useClassmate";
import { LoadingIcon } from "../shared/components/LoadingIcon";
import { StudentCard } from "../components/StudentCard";
import { UserDescription } from "../components/UserDescription";
import { GoBackBtn } from "../shared/components/GoBackBtn";
import { Badge } from "../shared/components/Badge";

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
          <div className="mx-auto w-md h-fit rounded-xl p-6">
            <h1 className="mb-6 text-2xl text-gray-200 font-semibold">
              Habilidades
            </h1>
            {classmateQuery.data?.habilities.map((h) => (
              <Badge text={h} key={self.crypto.randomUUID()} />
            ))}
          </div>
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
