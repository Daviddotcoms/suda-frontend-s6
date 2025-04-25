import { useEffect, useState } from "react";
import { randomColor } from "../../helpers/randomColor";

interface BadgeProps {
  text: string;
  color?: string;
}

export const Badge = ({ text }: BadgeProps) => {
  const [color, setColor] = useState("#545454");
  useEffect(() => {
    setColor(randomColor());
  }, [text]);

  return (
    <a
      style={{
        backgroundColor: "transparent",
        color,
        borderColor: color,
      }}
      className={`inline-flex items-center mr-2 px-3 py-2 mb-2 text-sm font-medium text-center rounded-lg focus:ring-4 select-none w-fit h-fit border-2`}
    >
      {text}
    </a>
  );
};
