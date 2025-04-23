import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

export const GoBackBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      style={{ viewTransitionName: "go-back" }}
      onClick={() => navigate(-1)}
      className="hover:opacity-70 active:opacity-50 active:transform-[scale(0.96)] border-2 px-3 py-2 rounded-3xl text-blue-600 flex items-center absolute left-20 top-10 gap-1"
    >
      <IoArrowBackOutline size={24} />
      <p className="pb-0.5 text-lg">Regresar</p>
    </button>
  );
};
