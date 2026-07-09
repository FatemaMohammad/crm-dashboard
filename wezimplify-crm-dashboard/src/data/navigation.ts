import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Headset,
  ContactRound,
  FileText,
  CreditCard,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  label: string;
  icon: LucideIcon;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export const navigation: NavigationSection[] = [
  {
    title: "MAIN",
    items: [
      {
        label: "Dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "Customers",
        icon: Users,
      },
      {
        label: "Projects",
        icon: FolderKanban,
      },
      {
        label: "Support",
        icon: Headset,
      },
    ],
  },
  {
    title: "CRM",
    items: [
      {
        label: "Contacts",
        icon: ContactRound,
      },
      {
        label: "Documents",
        icon: FileText,
      },
      {
        label: "Subscriptions",
        icon: CreditCard,
      },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      {
        label: "Settings",
        icon: Settings,
      },
    ],
  },
];
