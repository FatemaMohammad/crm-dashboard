interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
};

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  const initials = parts.length > 1 ? parts[0][0] + parts[1][0] : parts[0].slice(0, 2);
  return initials.toUpperCase();
}

function Avatar({ name, size = "md" }: AvatarProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 font-semibold text-white ${sizeClasses[size]}`}
    >
      {getInitials(name)}
    </div>
  );
}

export default Avatar;
