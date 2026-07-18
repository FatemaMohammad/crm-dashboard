import StatCard from "../components/dashboard/StatCard";
import ProjectProgress from "../components/dashboard/ProjectProgress";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import TaskList from "../components/dashboard/TaskList";
import CustomerOverview from "../components/dashboard/CustomerOverview";
import { stats } from "../data/stats";

function Dashboard() {
  return (
    <main className="flex-1 space-y-6 overflow-y-auto p-8">
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProjectProgress />
        </div>
        <TaskList />
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CustomerOverview />
        <ActivityFeed />
      </section>
    </main>
  );
}

export default Dashboard;