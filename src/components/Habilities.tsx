import { Classmate } from "../interfaces/Classmate"
import { Badge } from "../shared/components/Badge"

interface HabilitiesProps {
    classmate: Classmate
}

export const Habilities = ({classmate}: HabilitiesProps) => {
    return (
      <div className="mx-auto w-md h-fit rounded-xl py-6">
        <h1 className="mb-6 text-2xl dark:text-gray-200 text-black font-semibold">
          Habilidades
        </h1>
        {classmate.habilities.map((h) => (
          <Badge text={h} key={self.crypto.randomUUID()} />
        ))}
      </div>
    );
} 
