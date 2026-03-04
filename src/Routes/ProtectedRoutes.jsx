import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {

  const isAuthenticated = sessionStorage.getItem("token"); 

  console.log( sessionStorage.getItem("token"));
  
  // or use any global auth state

  console.log(isAuthenticated,'-------------------')

  if (!isAuthenticated) {
    return <Navigate to="/signup" replace />;
  }

  return children;
}

export default ProtectedRoutes;
