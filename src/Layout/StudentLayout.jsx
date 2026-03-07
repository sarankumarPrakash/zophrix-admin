import StudentNavbar from "./StudentNavbar";
import StudentSidebar from "./StudentSidebar";
import { Outlet } from "react-router-dom";

export default function StudentLayout() {
  return (
    <div className="h-screen overflow-hidden bg-theme text-violet-100">
      <StudentNavbar />

      <div className="flex h-[calc(100vh-64px)]">
        <StudentSidebar />

<main className="ml-16 flex-1 min-w-0 overflow-y-auto overflow-x-hidden p-6">
          <div className="w-full max-w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}