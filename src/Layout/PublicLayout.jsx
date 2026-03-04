import Navbar from "../pages/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function PublicLayout() {
  const location = useLocation();

  // const hideNavbar = location.pathname.includes("signin") || location.pathname.includes("new_user") ;

  return (
    <>
      {/* {!hideNavbar && <Navbar />} */}
      {/* wrap public page content to ensure it takes entire width */}
      <div className="w-full min-h-screen">
        <Outlet />
      </div>
    </>
  );
}
