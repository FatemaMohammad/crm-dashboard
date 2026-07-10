import Card from "../common/Card";
import Badge from "../common/Badge";
import type { BadgeVariant } from "../common/Badge";
import ProgressBar from "../common/ProgressBar";
import { projects, type ProjectStatus } from "../../data/projects";

const statusConfig: Record<ProjectStatus, { label: string; badge: BadgeVariant; bar: string }> = {
  "on-track": { label: "On Track", badge: "success", bar: "bg-emerald-500" },
  "at-risk": { label: "At Risk", badge: "warning", bar: "bg-amber-500" },
  delayed: { label: "Delayed", badge: "danger", bar: "bg-red-500" },
  completed: { label: "Completed", badge: "info", bar: "bg-blue-600" },
};

function ProjectProgress() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-900">Project Progress</h3>
          <p className="text-sm text-slate-500">Active projects and delivery status</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {projects.map((project) => {
          const config = statusConfig[project.status];

          return (
            <div key={project.name}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-900">{project.name}</p>
                  <p className="text-xs text-slate-500">{project.client}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant={config.badge}>{config.label}</Badge>
                  <span className="w-10 text-right text-sm font-medium text-slate-700">
                    {project.progress}%
                  </span>
                </div>
              </div>

              <ProgressBar value={project.progress} colorClassName={config.bar} />
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default ProjectProgress;
