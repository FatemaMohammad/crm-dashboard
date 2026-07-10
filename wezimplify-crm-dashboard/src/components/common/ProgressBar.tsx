interface ProgressBarProps {
  value: number;
  colorClassName?: string;
}

function ProgressBar({ value, colorClassName = "bg-blue-600" }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div
        className={`h-full rounded-full ${colorClassName}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

export default ProgressBar;
