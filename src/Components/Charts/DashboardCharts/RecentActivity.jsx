export default function RecentActivity() {
  const activity = [
    "Arjun Kumar completed REST API challenge",
    "Divya submitted GraphQL API task",
    "Zoho opened 5 internship roles",
    "Rahul passed Authentication challenge",
    "Freshworks updated hiring requirements",
  ];

  return (
    <div className="card-theme border border-gray-800 rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-6">Recent Activity</h2>

      <div className="space-y-4">
        {activity.map((a, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
            <p className="text-sm text-gray-300">{a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}