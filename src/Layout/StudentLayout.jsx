import StudentNavbar from "./StudentNavbar";
import StudentSidebar from "./StudentSidebar";
import { Outlet } from "react-router-dom";

export default function StudentLayout() {
  return (
    <div className="min-h-screen bg-theme  text-violet-100"> 

      <StudentNavbar />

      <div className="flex">

        <StudentSidebar />

        <main className="flex-1 p-6 ml-16 lg:ml-56 w-full min-h-screen overflow-auto">
          {/* ensure page content can expand to the full viewport width */}
          <div className="w-full max-w-full">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}