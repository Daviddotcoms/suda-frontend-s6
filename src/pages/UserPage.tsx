import { useParams, useNavigate } from "react-router";
import { IoArrowBackOutline } from "react-icons/io5";

import { useClassmate } from "../hooks/useClassmate";
import { LoadingIcon } from "../components/LoadingIcon";
import { StudentCard } from "../components/StudentCard";

export const UserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { classmateQuery } = useClassmate({ id: +id! });

  return (
    <div className={`pt-40 [view-transition-name:"image-${id}"]`}>
      <button
        style={{ viewTransitionName: "go-back" }}
        onClick={() => navigate(-1)}
        className="hover:opacity-70 active:opacity-50 active:transform-[scale(0.96)] border-2 px-3 py-2 rounded-3xl text-blue-600 flex items-center absolute left-20 top-10 gap-1"
      >
        <IoArrowBackOutline size={24} />
        <p className="pb-0.5 text-lg">Regresar</p>
      </button>
      <div className="flex flex-col">
        {classmateQuery.isLoading ? (
          <LoadingIcon />
        ) : (
          <StudentCard
            classmate={classmateQuery.data!}
            hovered={false}
            vertical
          />
        )}
      </div>
    </div>
  );
};
