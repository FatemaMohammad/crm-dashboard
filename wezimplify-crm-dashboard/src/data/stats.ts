import {
  Users,
  UserPlus,
  Handshake,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export interface Stat {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
}

export const stats: Stat[] = [
  {
    label: "Active Customers",
    value: "1,284",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    label: "New Leads",
    value: "312",
    change: "+12.4%",
    trend: "up",
    icon: UserPlus,
  },
  {
    label: "Open Deals",
    value: "47",
    change: "-3.1%",
    trend: "down",
    icon: Handshake,
  },
  {
    label: "Monthly Revenue",
    value: "$84,200",
    change: "+5.6%",
    trend: "up",
    icon: Wallet,
  },
];
