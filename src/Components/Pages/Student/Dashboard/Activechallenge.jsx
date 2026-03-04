import { ArrowUpRight, Download, Upload } from "lucide-react";

export default function Activechallenge() {
  return (
    <div
      className="
      rounded-2xl
      border bg-shadow-theme
      bg-theme
      p-6
      shadow-[0_0_0_1px_rgba(16,185,129,0.08)]
    "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2  text-sm font-medium">
          <span className="text-sm leading-none bg-text-theme">&gt;_</span>
          Active Challenge
        </div>

        <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300">
          ZPX-042
        </span>
      </div>

      <h2 className="text-sm font-semibold mt-2 text-white">
        Build a REST Auth API
      </h2>

      <p className="text-gray-400 mt-1 max-w-5xl">
        Implement JWT-based authentication with register, login, and protected
        route endpoints using Node.js and Express.
      </p>

      <div className="mt-3 ">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400 font-semibold">Validation Status</span>
          <span className="text-emerald-400 font-medium">14/18 passed</span>
        </div>

        <div className="w-full h-2 bg-teal-500/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-card-bg-theme rounded-full"
            style={{ width: "78%" }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {["Node.js", "Express", "JWT",].map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-4">
        <button className="flex items-center gap-2 px-5 py-1.5 rounded-lg  border bg-card-bg-theme text-black  font-semibold   transition text-sm">
          <Upload size={16} />
          View Pull Request
        </button>

        <button className="flex items-center gap-2 px-5 py-1.5 rounded-lg border border-white/10 text-gray-200 hover:bg-white/5 transition text-sm">
          <Download size={16} />
          Open Workspace
        </button>

        <button className="flex items-center gap-2 text-gray-300 hover:text-white transition text-sm">
          <ArrowUpRight size={16} />
          View Brief
        </button>
      </div>
    </div>
  );
}