import { useClassmates } from "../hooks/useClassmates";
import { List } from "../components/List";
import { NoData } from "../shared/components/NoData";
import { NavBar } from "../components/NavBar";
import { LoadingIcon } from "../shared/components/LoadingIcon";
import { useState } from "react";
import { Filters } from "../enums/Filters";

export const HomePage = () => {
  const [filter, setFilter] = useState<Filters>(Filters.All);
  const { classmatesQuery } = useClassmates({ filter });

  if (classmatesQuery.isLoading) {
    return <LoadingIcon />;
  }

  if (!classmatesQuery.data) {
    return <NoData />;
  }
  return (
    <>
      <NavBar filter={filter} onFilterChange={setFilter} />
      <main className="flex flex-col justify-center items-center">
        <List classmates={classmatesQuery.data} />
      </main>
    </>
  );
};
