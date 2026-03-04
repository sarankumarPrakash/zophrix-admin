import { Navigate } from "react-router-dom";

export default function ProtectedStudentRoute({ children }) {
  const role = sessionStorage.getItem("role");

  if (role !== "student") return <Navigate to="/signup" />;
  return children;
}
