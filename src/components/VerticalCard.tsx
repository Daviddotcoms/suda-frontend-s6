import { Classmate } from "../interfaces/Classmate"

interface VerticalCardProps {
    classmate: Classmate
}

export const VerticalCard = ({ classmate }: VerticalCardProps) => {
    const username =
        classmate.username.length > 15
            ? classmate.username.slice(0, 15).trim() + "..."
            : classmate.username.trim();
    return (
        <div className="w-[400px] bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img
                className={`aspect-square rounded-t-lg select-none w-full`}
                src={classmate.image}
                alt={`Imagen de ${classmate.firstName} ${classmate.lastName}`}
                style={{ viewTransitionName: `image-${classmate.id}` }}
            />
            <div className="p-5">
                <div className="flex gap-2 items-end mb-2">
                    <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white select-none">
                        {classmate.firstName} {classmate.lastName}
                    </h5>
                    <a className="cursor-pointer" id="username">
                        <h6 className="text-xl text-gray-500 mb-0 select-none">{`(${username})`}</h6>
                    </a>
                </div>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-500 select-none">
                    {classmate.email}
                </p>
            </div>
        </div>
    )
}
