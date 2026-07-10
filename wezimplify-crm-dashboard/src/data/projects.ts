export type ProjectStatus = "on-track" | "at-risk" | "delayed" | "completed";

export interface Project {
  name: string;
  client: string;
  progress: number;
  status: ProjectStatus;
  dueDate: string;
}

export const projects: Project[] = [
  {
    name: "Website Relaunch",
    client: "Nordic Retail ApS",
    progress: 78,
    status: "on-track",
    dueDate: "Jul 24",
  },
  {
    name: "CRM Integration",
    client: "Bilka Wholesale",
    progress: 45,
    status: "at-risk",
    dueDate: "Aug 02",
  },
  {
    name: "Mobile App v2",
    client: "Finmatic",
    progress: 92,
    status: "on-track",
    dueDate: "Jul 15",
  },
  {
    name: "Support Portal",
    client: "GreenLine Logistics",
    progress: 20,
    status: "delayed",
    dueDate: "Jul 10",
  },
  {
    name: "Brand Guidelines",
    client: "Ørsted Studio",
    progress: 100,
    status: "completed",
    dueDate: "Jun 28",
  },
];
