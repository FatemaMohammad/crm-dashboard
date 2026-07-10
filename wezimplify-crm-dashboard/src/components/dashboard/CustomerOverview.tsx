import Card from "../common/Card";
import Badge from "../common/Badge";
import Avatar from "../common/Avatar";
import type { BadgeVariant } from "../common/Badge";
import { customers, type CustomerStatus } from "../../data/customers";

const statusConfig: Record<CustomerStatus, { label: string; badge: BadgeVariant }> = {
  active: { label: "Active", badge: "success" },
  lead: { label: "Lead", badge: "info" },
  inactive: { label: "Inactive", badge: "neutral" },
};

function CustomerOverview() {
  return (
    <Card>
      <div className="mb-5">
        <h3 className="text-base font-semibold text-slate-900">Top Customers</h3>
        <p className="text-sm text-slate-500">Highest revenue accounts this month</p>
      </div>

      <ul className="flex flex-col gap-1">
        {customers.map((customer) => {
          const config = statusConfig[customer.status];

          return (
            <li
              key={customer.company}
              className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-slate-50"
            >
              <Avatar name={customer.name} size="sm" />

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-900">{customer.name}</p>
                <p className="truncate text-xs text-slate-500">{customer.company}</p>
              </div>

              <span className="text-sm font-medium text-slate-700">{customer.revenue}</span>

              <Badge variant={config.badge}>{config.label}</Badge>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default CustomerOverview;
