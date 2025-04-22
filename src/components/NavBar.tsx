import { Filters } from "../enums/Filters";

interface NavBarProps {
  filter: Filters;
  onFilterChange: (filter: Filters) => void;
}

export const NavBar = ({
  filter = Filters.All,
  onFilterChange,
}: NavBarProps) => {
  return (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      <button
        style={{ viewTransitionName: "all" }}
        onClick={() => onFilterChange(Filters.All)}
        type="button"
        className={filter === Filters.All ? "active-btn" : "inactive-btn"}
      >
        All
      </button>
      <button
        style={{ viewTransitionName: "students" }}
        onClick={() => onFilterChange(Filters.Students)}
        type="button"
        className={filter === Filters.Students ? "active-btn" : "inactive-btn"}
      >
        Students
      </button>
      <button
        style={{ viewTransitionName: "teachers" }}
        onClick={() => onFilterChange(Filters.Teachers)}
        type="button"
        className={filter === Filters.Teachers ? "active-btn" : "inactive-btn"}
      >
        Teachers
      </button>
    </div>
  );
};
