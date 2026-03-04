import { useState, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
// tech badges are custom spans, not lucide icons
import { GitBranch, Clock, GripVertical } from "lucide-react";


const columns = [
  // dotColor is used for the small bullet; always use a neutral gray
  { id: "todo", title: "To Do", color: "border-muted-foreground/30", dotColor: "bg-gray-500" },
  { id: "in-progress", title: "In Progress", color: "border-info/30", dotColor: "bg-blue-500" },
  { id: "review", title: "Review", color: "border-warning/30", dotColor: "bg-yellow-500" },
  { id: "hold", title: "On Hold", color: "border-destructive/30", dotColor: "bg-red-500" },
  { id: "completed", title: "Completed", color: "border-primary/30", dotColor: "bg-green-500" },
];

const initialData = {
  todo: [
    { id: "ZPX-050", title: "CLI Task Manager", description: "Build a command-line task manager with file-based storage and search.", difficulty: "Easy", tech: ["Node.js", "Commander"], timeEstimate: "2h", priority: "Low" },
    { id: "ZPX-051", title: "GraphQL Blog API", description: "Create a GraphQL API for a blog with posts, comments, and auth.", difficulty: "Hard", tech: ["GraphQL", "Apollo", "Node.js"], timeEstimate: "6h", priority: "Medium" },
  ],
  "in-progress": [
    { id: "ZPX-042", title: "Build a REST Auth API", description: "Implement JWT-based authentication.", difficulty: "Medium", tech: ["Node.js", "Express", "JWT"], timeEstimate: "4h", branch: "challenge/auth-api", priority: "High" },
    { id: "ZPX-048", title: "Real-time Chat App", description: "Build a WebSocket chat with rooms.", difficulty: "Hard", tech: ["Socket.io", "React"], timeEstimate: "5h", branch: "challenge/chat", priority: "Critical" },
  ],
  review: [
    { id: "ZPX-045", title: "E-commerce Cart System", description: "Shopping cart with checkout flow.", difficulty: "Medium", tech: ["React", "Redux", "Stripe"], timeEstimate: "4h", branch: "challenge/ecommerce", priority: "Medium" },
  ],
  hold: [
    { id: "ZPX-047", title: "OAuth2 Integration", description: "Add Google & GitHub OAuth.", difficulty: "Medium", tech: ["Passport.js", "OAuth2"], timeEstimate: "3h", priority: "Low" },
  ],
  completed: [
    { id: "ZPX-041", title: "Build a Todo App", description: "Todo app with CRUD.", difficulty: "Easy", tech: ["React", "TypeScript"], timeEstimate: "2h", branch: "challenge/todo-app", priority: "Low" },
  ],
};

const difficultyColor = {
  Easy: "bg-text-theme font-semibold font-md",
  Medium: "text-yellow-600 font-semibold ",
  Hard: "text-red-600 font-semibold",
};

const priorityBadge = {
  Low: "bg-muted text-muted-foreground",
  Medium: "bg-info/15 text-info",
  High: "bg-warning/15 text-warning",
  Critical: "bg-destructive/15 text-destructive",
};

// colours used for tech/stack labels
const techColor = {
  "Node.js": "bg-green-600 text-white",
  React: "bg-blue-600 text-white",
  TypeScript: "bg-blue-400 text-white",
  JavaScript: "bg-yellow-500 text-black",
  GraphQL: "bg-pink-500 text-white",
  Apollo: "bg-purple-500 text-white",
  "Socket.io": "bg-indigo-600 text-white",
  Express: "bg-gray-800 text-white",
  JWT: "bg-yellow-300 text-black",
  MongoDB: "bg-green-400 text-black",
  Stripe: "bg-indigo-400 text-white",
  Redux: "bg-purple-700 text-white",
  "Passport.js": "bg-green-700 text-white",
  OAuth2: "bg-blue-300 text-black",
  // fallback
  _default: "bg-white/10 text-gray-300",
};


import { useNavigate } from "react-router-dom";

export default function Challenge() {
  const navigate = useNavigate();
  const [data, setData] = useState(initialData);

  const onDragEnd = useCallback((result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    const sourceItems = [...data[sourceCol]];
    const destItems = sourceCol === destCol ? sourceItems : [...data[destCol]];

    const [moved] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, moved);

    setData({
      ...data,
      [sourceCol]: sourceItems,
      ...(sourceCol !== destCol ? { [destCol]: destItems } : {}),
    });
  }, [data]);

  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground">Challenge Board</h2>
        <p className="mt-1 text-sm text-muted-foreground font-semibold text-gray-400">
          Drag cards between columns to update status
        </p>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-4  ">
          {columns.map((col) => (
            <div key={col.id} className="min-w-[260px] flex-1">

              {/* Header */}
             
              <div className={`mb-3 flex items-center gap-2 rounded-md border-b-2  border-[#393434]  pb-2 ${col.color}`}>
                
                <div className={`h-2.5 w-2.5 rounded-full  ${col.dotColor}`} />
                <h3 className="text-xs font-semibold uppercase  text-gray-400">{col.title}</h3>
             
                <span className={`ml-auto flex items-center justify-center w-5 h-5 text-[10px] font-semibold rounded-full border  border-[#393434] ${col.color}`}> {data[col.id].length} </span>
              </div>

              <Droppable droppableId={col.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`min-h-[200px] space-y-2 rounded-lg p-1  ${
                      snapshot.isDraggingOver ? "bg-primary/5" : ""
                    }`}
                  >
                    {data[col.id].map((challenge, index) => (
                      <Draggable key={challenge.id} draggableId={challenge.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            onClick={() => {
                              if (!snapshot.isDragging) {
                                navigate(`/challenges/${challenge.id}`);
                              }
                            }}
                            className={`rounded-lg border ${col.cardBg} p-3 cursor-pointer border-b-2 border-[#393434] hover:border-white/20 transition card-theme  ${col.cardBottom} ${
                              snapshot.isDragging ? "shadow-lg rotate-1" : ""
                            }`}
                          >
                           
                            <div className="flex items-center gap-2 mb-2 ">
                              <GripVertical className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-[10px] font-semibold text-gray-400">{challenge.id}</span>
                              <span className={`ml-auto text-[10px] font-semibold ${difficultyColor[challenge.difficulty]}`}>
                                {challenge.difficulty}
                              </span>
                            </div>

                            <h4 className="text-sm font-semibold mb-3">{challenge.title}</h4>
                            <p className="text-xs text-muted-foreground font-semibold text-gray-400   mb-3">
                              {challenge.description}
                            </p>

                        
                            <div className="flex flex-wrap gap-1 my-2">
                              {challenge.tech.map((t) => {
                                const color =  techColor._default;
                                return (
                                  <span
                                    key={t}
                                    className={`text-xs px-2 py-1.5 rounded-full font-semibold text-gray-400  ${color}`}
                                  >
                                    {t}
                                  </span>
                                );
                              })}
                            </div>

                            <div className="flex justify-between text-[10px] text-muted-foreground font-semibold text-gray-400">
                              <div className="flex items-center gap-1">
                                <Clock className="h-2.5 w-2.5" />
                                {challenge.timeEstimate}
                              </div>
                              {challenge.branch && (
                                <div className="flex items-center gap-1 font-mono">
                                  <GitBranch className="h-2.5 w-2.5" />
                                  {challenge.branch}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
  </> 
  );
}