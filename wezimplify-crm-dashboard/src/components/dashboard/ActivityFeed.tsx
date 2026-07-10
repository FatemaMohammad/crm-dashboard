import Card from "../common/Card";
import { activity, activityIcons } from "../../data/activity";

function ActivityFeed() {
  return (
    <Card>
      <div className="mb-5">
        <h3 className="text-base font-semibold text-slate-900">Recent Activity</h3>
        <p className="text-sm text-slate-500">Latest updates across your team</p>
      </div>

      <ul className="flex flex-col gap-4">
        {activity.map((item) => {
          const Icon = activityIcons[item.type];

          return (
            <li key={item.id} className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <Icon size={16} />
              </div>

              <div>
                <p className="text-sm text-slate-700">{item.description}</p>
                <p className="text-xs text-slate-400">{item.time}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default ActivityFeed;
