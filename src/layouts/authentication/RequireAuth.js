/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// import React from 'react';
import { decodedToken } from 'services/authService';
import { Navigate, useLocation } from 'react-router-dom';

// const Navigate = useNavigate();

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const tokenRole =
    decodedToken() && decodedToken().roles && decodedToken().roles.name.slice(5).toLowerCase();
  const childrenRole = children.type && children.type.name.toLowerCase();

  if (!decodedToken()) {
    <Navigate to='/login' state={{ path: location.pathname }} replace />;
  } else if (tokenRole === childrenRole) {
    return children;
  }

  return null;
};

export default RequireAuth;
