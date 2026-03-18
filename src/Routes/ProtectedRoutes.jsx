import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ children, allowedRoles }) {
  const isAuthenticated = sessionStorage.getItem("access_token"); 
  const userRole = sessionStorage.getItem("role");

  // Login pannala na login page-ku poga sollu
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Allowed roles-la user role illai na login-ke thiruppi anuppu
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoutes;