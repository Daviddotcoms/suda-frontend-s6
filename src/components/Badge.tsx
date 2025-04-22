interface BadgeProps {
  text: string;
  color?: string;
}

export const Badge = ({ text, color = "#455975" }: BadgeProps) => {
  return (
    <a
      style={{ backgroundColor: color }}
      className={`inline-flex items-center mr-2 px-3 py-2 mb-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 select-none`}
    >
      {text}
    </a>
  );
};
