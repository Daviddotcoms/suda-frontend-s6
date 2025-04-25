import { Classmate } from "../interfaces/Classmate";

interface UserDescriptionProps {
  classmate: Classmate;
}

export const UserDescription = ({ classmate }: UserDescriptionProps) => {
  return (
    <div className="w-md h-fit dark:bg-gray-800 rounded-xl p-6 border-2 dark:border-gray-700">
      <h1 className="mb-0 text-2xl text-gray-200 font-semibold">Descripción</h1>
      <p className="text-gray-300 text-[16px] mt-2">{classmate.description}</p>
    </div>
  );
};
