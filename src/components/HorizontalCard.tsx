import { Link } from 'react-router'
import { Classmate } from '../interfaces/Classmate'

interface HorizontalCardProps {
    classmate: Classmate
    hovered: boolean,
}

export const HorizontalCard = ({ classmate, hovered }: HorizontalCardProps) => {
    const canHover = hovered ? "hover:bg-gray-100 dark:hover:bg-gray-700" : "";

    return (
        <Link
            viewTransition
            key={classmate.id}
            to={`/classmates/${classmate.id}`}
            className={`flex flex-col items-center bg-white border dark:border-gray-700 dark:bg-gray-800 border-gray-200 rounded-xl shadow-sm md:flex-row md:max-w-xl h-50 w-2xl ${canHover}`}
        >
            <img
                className={`aspect-[450/450] duration-1000 object-cover rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-s-lg`}
                src={classmate.image}
                alt={`Imagen de ${classmate.firstName} ${classmate.lastName}`}
                style={{ viewTransitionName: `image-${classmate.id}` }}
            />
            <div className="flex flex-col justify-between p-4 leading-normal ml-2 h-full py-16">
                <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {classmate.firstName} {classmate.lastName}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {classmate.email}
                </p>
            </div>
        </Link>
    )
}
