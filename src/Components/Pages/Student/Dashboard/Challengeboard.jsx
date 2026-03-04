import { Clock } from "lucide-react";

const challenges = [
  {
    id: "ZPX-041",
    level: "Easy",
    title: "Build a Todo App with React",
    desc: "Create a fully functional todo application with CRUD operations, local storage persistence, and responsive UI.",
    tags: ["React", "TypeScript", "Tailwind"],
    time: "2-3 hours",
    status: "Verified",
  },
  {
    id: "ZPX-043",
    level: "Hard",
    title: "Real-time Chat with WebSockets",
    desc: "Build a real-time chat application using WebSockets with rooms, typing indicators, and message history.",
    tags: ["Node.js", "Socket.io", "React"],
    time: "5-6 hours",
    status: "Not Started",
  },
  {
    id: "ZPX-044",
    level: "Medium",
    title: "E-commerce Cart System",
    desc: "Implement a shopping cart with product listing, quantity management, discount codes, and checkout flow.",
    tags: ["React", "Redux", "Stripe"],
    time: "4-5 hours",
    status: "Failed",
  },
  {
    id: "ZPX-045",
    level: "Easy",
    title: "CLI Task Manager",
    desc: "Build a command-line task manager with file-based storage, priorities, deadlines, and search functionality.",
    tags: ["Node.js", "Commander", "Chalk"],
    time: "2 hours",
    status: "Not Started",
  },
];

const levelColor = {
  Easy: "bg-text-theme font-semibold ml-2",
  Medium: "text-yellow-600 font-semibold ml-2",
  Hard: "text-red-600 font-semibold ml-2",
};

const statusStyle = {
  Verified: "bg-emerald-500/10 bg-text-theme font-semibold border bg-shadow-theme",
  Failed: "bg-red-500/10 text-red-600 border font-semibold border-red-500 bg-shadow-theme",
  "Not Started": "bg-white/5 text-gray-300 font-semibold border border-white/10 bg-shadow-theme",
};

export default function Challengeboard() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Challenge Board</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {challenges.map((c) => (
          <div
            key={c.id}
            className="card-theme border border-white/10 rounded-xl p-5 hover:border-white/20 transition"
          >
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">
                {c.id} <span className={levelColor[c.level]}>{c.level}</span>
              </span>
              {/* <span className={`text-xs px-3 py-1 rounded-full ${statusStyle[c.status]}`}>
                {c.status}
              </span> */}
            </div>

            <h3 className="text-lg font-semibold mt-3">{c.title}</h3>

            <p className="text-gray-400 text-sm mt-2 line-clamp-2">{c.desc}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Clock size={14} /> {c.time}
              </span>
              <span className="text-gray-500">challenge/{c.id.toLowerCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}