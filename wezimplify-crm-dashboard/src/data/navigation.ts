import {
  LayoutDashboard,
  Users,
  FolderKanban,
  MessageCircle,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Main",
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
        icon: MessageCircle,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        label: "Settings",
        icon: Settings,
      },
    ],
  },
];