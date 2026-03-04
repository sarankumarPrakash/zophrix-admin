import StatsCards from "../../../Charts/DashboardCharts/StatsCards";
import SkillDistribution from "../../../Charts/DashboardCharts/SkillDistribution";
import PlacementFunnel from "../../../Charts/DashboardCharts/PlacementFunnel";
import RecentActivity from "../../../Charts/DashboardCharts/RecentActivity";
import SkillHeatmap from "../../../Charts/DashboardCharts/SkillHeatmap";

export default function Dashboard() {
  return (
    <div className="bg-theme min-h-screen p-6 text-white">

      {/* STATS */}
      <StatsCards />

      {/* CHART SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <SkillDistribution />
        <PlacementFunnel />
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <RecentActivity />
        <SkillHeatmap />
      </div>

    </div>
  );
}