import { useState } from "react";
import { Check } from "lucide-react";
import Card from "../common/Card";
import { tasks as initialTasks, type TaskPriority } from "../../data/tasks";

const priorityDot: Record<TaskPriority, string> = {
  high: "bg-red-500",
  medium: "bg-amber-500",
  low: "bg-slate-300",
};

function TaskList() {
  const [tasks, setTasks] = useState(initialTasks);

  function toggleTask(id: string) {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }

  return (
    <Card>
      <div className="mb-5">
        <h3 className="text-base font-semibold text-slate-900">My Tasks</h3>
        <p className="text-sm text-slate-500">
          {tasks.filter((task) => !task.done).length} open tasks
        </p>
      </div>

      <ul className="flex flex-col gap-1">
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              type="button"
              role="checkbox"
              aria-checked={task.done}
              onClick={() => toggleTask(task.id)}
              className="flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left hover:bg-slate-50"
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                  task.done
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-300 text-transparent"
                }`}
              >
                <Check size={13} strokeWidth={3} />
              </span>

              <span
                className={`flex-1 text-sm ${
                  task.done ? "text-slate-400 line-through" : "text-slate-700"
                }`}
              >
                {task.title}
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className={`h-1.5 w-1.5 rounded-full ${priorityDot[task.priority]}`} />
                {task.dueLabel}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default TaskList;
