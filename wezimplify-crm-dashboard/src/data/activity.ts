import {
  UserPlus,
  FolderKanban,
  CheckCircle2,
  FileText,
  type LucideIcon,
} from "lucide-react";

export type ActivityType = "customer" | "project" | "support" | "document";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  description: string;
  time: string;
}

export const activityIcons: Record<ActivityType, LucideIcon> = {
  customer: UserPlus,
  project: FolderKanban,
  support: CheckCircle2,
  document: FileText,
};

export const activity: ActivityItem[] = [
  {
    id: "1",
    type: "customer",
    description: "New customer created — Nordic Retail ApS",
    time: "2 hours ago",
  },
  {
    id: "2",
    type: "support",
    description: "Support case #1042 closed for Finmatic",
    time: "4 hours ago",
  },
  {
    id: "3",
    type: "project",
    description: "Mobile App v2 updated to 92% complete",
    time: "Yesterday",
  },
  {
    id: "4",
    type: "document",
    description: "Proposal sent to Bilka Wholesale",
    time: "Yesterday",
  },
  {
    id: "5",
    type: "customer",
    description: "Contact updated for GreenLine Logistics",
    time: "2 days ago",
  },
];
