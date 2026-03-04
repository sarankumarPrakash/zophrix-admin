import { Outlet } from "react-router-dom";

import PublicNavbar from "../pages/Navbar";
import StudentNavbar from "./StudentNavbar";

export default function PremiumLayout() {
  const role = sessionStorage.getItem("role");

  const isStudent = role === "student";

  console.log(isStudent,'-----------')
  
  return (
    <div className={`min-h-screen flex flex-col w-full ${
        !isStudent ? "bg-white text-gray-900" : "bg-theme text-theme"
      }`}>
      {isStudent ? <StudentNavbar /> : <PublicNavbar />}

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
