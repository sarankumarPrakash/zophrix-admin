import { Navigate } from "react-router-dom";

export default function ProtectedStaffRoute({ children }) {
  const role = sessionStorage.getItem("role");

  if (role !== "staff") return <Navigate to="/signup" />;
  return children;
}
