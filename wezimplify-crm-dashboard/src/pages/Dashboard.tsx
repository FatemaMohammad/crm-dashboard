import StatCard from "../components/dashboard/StatCard";
import { stats } from "../data/stats";

function Dashboard() {
  return (
    <main className="flex-1 space-y-6 overflow-y-auto p-8">
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </section>
    </main>
  );
}

export default Dashboard;