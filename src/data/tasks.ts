export type TaskPriority = "high" | "medium" | "low";

export interface Task {
  id: string;
  title: string;
  dueLabel: string;
  priority: TaskPriority;
  done: boolean;
}

export const tasks: Task[] = [
  {
    id: "1",
    title: "Follow up with Nordic Retail ApS",
    dueLabel: "Today",
    priority: "high",
    done: false,
  },
  {
    id: "2",
    title: "Send proposal to Bilka Wholesale",
    dueLabel: "Today",
    priority: "high",
    done: false,
  },
  {
    id: "3",
    title: "Prepare meeting with Finmatic",
    dueLabel: "Tomorrow",
    priority: "medium",
    done: false,
  },
  {
    id: "4",
    title: "Review support case #1042",
    dueLabel: "Jul 11",
    priority: "low",
    done: true,
  },
  {
    id: "5",
    title: "Update onboarding docs",
    dueLabel: "Jul 12",
    priority: "low",
    done: false,
  },
];
