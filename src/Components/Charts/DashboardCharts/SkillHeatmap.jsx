export default function SkillHeatmap() {
  const skills = [
    { name: "React", value: 42 },
    { name: "Node", value: 37 },
    { name: "Python", value: 28 },
    { name: "SQL", value: 24 },
    { name: "DevOps", value: 14 },
    { name: "System Design", value: 11 },
  ];

  return (
    <div className="card-theme border border-gray-800 rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-6">College Skill Heatmap</h2>

      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span>{skill.name}</span>
              <span>{skill.value}</span>
            </div>

            <div className="w-full h-2 bg-gray-700 rounded">
              <div
                className="h-2 bg-green-400 rounded"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}