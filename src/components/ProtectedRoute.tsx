import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
          

interface ProtectedRouteProps {

    children: ReactNode;
  
  }
  
function ProtectedRoute({children}:ProtectedRouteProps ) {
    
  const isAuthenticated = localStorage.getItem("auth") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;