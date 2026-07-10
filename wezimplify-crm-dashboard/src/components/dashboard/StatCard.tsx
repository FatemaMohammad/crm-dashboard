import { TrendingDown, TrendingUp } from "lucide-react";
import Card from "../common/Card";
import type { Stat } from "../../data/stats";

interface StatCardProps {
  stat: Stat;
}

function StatCard({ stat }: StatCardProps) {
  const Icon = stat.icon;
  const isUp = stat.trend === "up";
  const TrendIcon = isUp ? TrendingUp : TrendingDown;

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={20} />
        </div>

        <span
          className={`flex items-center gap-1 text-xs font-medium ${
            isUp ? "text-emerald-600" : "text-red-600"
          }`}
        >
          <TrendIcon size={14} />
          {stat.change}
        </span>
      </div>

      <div>
        <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
        <p className="text-sm text-slate-500">{stat.label}</p>
      </div>
    </Card>
  );
}

export default StatCard;
