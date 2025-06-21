import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requirePayment?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requirePayment = false }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requirePayment && !user.hasPaid) {
    return <Navigate to="/payment" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;