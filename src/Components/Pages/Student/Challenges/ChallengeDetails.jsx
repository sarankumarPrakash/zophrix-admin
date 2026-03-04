import { useState } from "react";
import {
  Copy,
  Check,
  AlarmClockCheck,
  GitBranch,
  Play,
  X
} from "lucide-react";

export default function ChallengeBoard() {
  const [started, setStarted] = useState(false);
  const [showPRModal, setShowPRModal] = useState(false);
  const [status, setStatus] = useState("TO DO");
  const [description, setDescription] = useState("");

  const startChallenge = () => {
    setStarted(true);
    setStatus("IN PROGRESS");
  };

  const submitPR = () => {
    setStatus("IN REVIEW");
    setShowPRModal(false);
  };

  const difficultyColor = {
  Easy: "text-green-500 font-semibold border border-green-500 rounded-full px-3 py-1 ml-3",
  Medium: "text-yellow-500 font-semibold border border-yellow-500 rounded-full px-3 py-1 ml-3",
  Hard: "text-red-500 font-semibold border border-red-500 rounded-full px-3 py-1 ml-3",
};


const columns = [
  // dotColor is used for the small bullet; always use a neutral gray
  { id: "todo", title: "To Do", color: "border-muted-foreground/30", dotColor: "bg-gray-500" },
  { id: "in-progress", title: "In Progress", color: "border-info/30", dotColor: "bg-blue-500" },
  { id: "review", title: "Review", color: "border-warning/30", dotColor: "bg-yellow-500" },
  { id: "hold", title: "On Hold", color: "border-destructive/30", dotColor: "bg-red-500" },
  { id: "completed", title: "Completed", color: "border-primary/30", dotColor: "bg-green-500" },
];

  return (
    <div className="flex-1 p-8 text-gray-200 bg-theme min-h-screen">
      
      {/* Header */}
      <div className="mb-6">
        <p className="text-sm  text-gray-400 flex items-center">
          ZPX-050  <span className={difficultyColor.Easy}>Easy</span>  <span className="flex items-center gap-2 text-blue-400 ml-3"><span className="h-2 w-2 bg-blue-500 rounded-full"></span>{status}</span>
        </p>

        <h1 className="text-3xl font-semibold mt-2">CLI Task Manager</h1>

        <div className="flex gap-4 text-sm text-gray-400 mt-2">
          <span className="flex items-center gap-1 text-green-500">
            <AlarmClockCheck className="h-4 w-4" /> 2h estimated
          </span>
          <span>Track: Node.js</span>
        </div>

        <div className="flex gap-2 mt-3">
          <span className="px-3 py-1 text-xs bg-gray-700 rounded-full">Node.js</span>
          <span className="px-3 py-1 text-xs bg-gray-700 rounded-full">Commander</span>
        </div>
      </div>

      {/* STATUS CARD */}
      {!started ? (
        <div className="flex items-center justify-between card-theme border border-[#393434] hover:border-white/20 transition rounded-xl p-5 mb-8">
          <div>
            <p className="text-sm text-gray-400">Status: TO DO</p>
            <p className="text-xs text-gray-500 mt-1">
              Start this task to unlock the repository and generate your branch.
            </p>
          </div>

          <button
            onClick={startChallenge}
            className="bg-green-500 hover:bg-green-600 text-black font-medium px-5 py-2 rounded-lg flex items-center gap-1"
          >
            <Play className="h-4 w-4" /> Start Challenge
          </button>
        </div>
      ) : (
        <div className="card-theme border border-[#393434] hover:border-white/20 transition rounded-xl p-6 mb-8">
          <p className="text-sm text-blue-400 font-medium">
            Status: {status}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Task is active. Clone the repo and start coding.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-4 text-sm">
            <div>
              <p className="text-gray-500">Linked Branch</p>
              <p className="font-mono text-gray-300">
                feature/cli-task-manager
              </p>
            </div>

            <div className="text-right">
              <p className="text-yellow-400">No commits yet</p>
              <p className="text-gray-500">1 / 1 allowed</p>
            </div>
          </div>
        </div>
      )}

      
      <Section title="⚠ Problem Context">
        The operations team needs a lightweight CLI tool for managing internal
        tasks without relying on a web UI. The current workflow uses spreadsheets
        which are error-prone and hard to search.
      </Section>

      
      <Section title="✔ Acceptance Criteria">
        <ul className="space-y-3 list-decimal ml-6">
          <li>Users can add a task with title and description</li>
          <li>Users can list tasks with status filtering</li>
          <li>Users can search tasks by keyword</li>
          <li>Users can mark tasks complete</li>
          <li>Data persists in local JSON</li>
          <li>Commands include proper help text</li>
        </ul>
      </Section>

      
      <Section title="⛔ Constraints">
        <ul className="space-y-2 list-disc ml-6 text-red-400">
          <li>Must use Commander.js</li>
          <li>File-based JSON storage</li>
          <li>Handle concurrent file access</li>
          <li>Tests must pass &gt; 80%</li>
        </ul>
      </Section>

    
      {started && (
        <Section title="Getting Started">
          <ol className="space-y-4 text-sm">
            <CopyItem label="1. Clone the repository" text="git clone https://repo.zophrix.dev/cli-task-manager.git" />
            <CopyItem label="2. Create your branch" text="git checkout -b feature/cli-task-manager" />
            <CopyItem label="3. Commit your changes" text='git add . && git commit -m "feat: cli task manager"' />
            <CopyItem label="4. Push to GitHub" text="git push origin feature/cli-task-manager" />
            <CopyItem label="5. Open a Pull Request inside Zophrix" text="Click the Create Pull Request button below" />
          </ol>

          <button
            onClick={() => setShowPRModal(true)}
            className="mt-6 bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-2 rounded-lg flex items-center gap-1"
          >
            <GitBranch className="h-4 w-4" />
            Create Pull Request
          </button>
        </Section>
      )}

      
      {showPRModal && (
        <PRModal
          description={description}
          setDescription={setDescription}
          onClose={() => setShowPRModal(false)}
          onSubmit={submitPR}
        />
      )}
    </div>
  );
}


function Section({ title, children }) {
  return (
    <div className="card-theme border border-[#393434] hover:border-white/20 transition rounded-xl p-6 mb-6">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="text-gray-400 text-sm leading-relaxed">{children}</div>
    </div>
  );
}


function CopyItem({ label, text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <li>
      {label && <p className="text-gray-400 text-xs mb-2 font-semibold">{label}</p>}
      <div className="bg-theme p-3 rounded border border-[#393434] hover:border-white/20 transition font-mono flex items-center justify-between">
        <span className="truncate">{text}</span>
        <button
          onClick={handleCopy}
          className="ml-4 text-gray-400 hover:text-white transition"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
    </li>
  );
}

//  -------------------------- Model Popup --------------------------
function PRModal({ onClose, onSubmit, description, setDescription }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="card-theme w-full max-w-xl rounded-xl border border-[#393434] p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={18} />
        </button>

        <h2 className="text-lg font-semibold mb-1">Create Pull Request</h2>
        <p className="text-xs text-gray-400 mb-6">
          Submit your changes for review on <b>ZPX-050</b>
        </p>

        <Field label="Source Branch" value="feature/cli-task-manager" />
        <Field label="PR Title" value="feat cli task manager" />

        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2">Description</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What did you change and why?"
            className="w-full bg-theme border border-green-500 rounded-lg p-3 text-sm min-h-[120px] focus:outline-none"
          />
        </div>

        <Field
          label="Files Changed"
          value={`src/auth/jwt.ts
src/routes/protected.ts
tests/auth.test.ts`}
        />

        <Field label="Linked Issue" value="ZPX-050 — CLI Task Manager" />

        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded-lg font-medium"
          >
            Submit Pull Request
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-400 mb-2">{label}</p>
      <div className="bg-theme border border-[#393434] rounded-lg p-3 text-sm text-gray-300 whitespace-pre-line">
        {value}
      </div>
    </div>
  );
}