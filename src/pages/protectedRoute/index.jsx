import React from 'react';
import { Navigate } from 'react-router-dom';

export default ProtectedRoute = ({ isAuthorized, children }) => {
  return isAuthorized ? children : <Navigate to="/" />;
};

