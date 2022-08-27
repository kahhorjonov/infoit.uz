/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import { decodedToken } from 'services/authService';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const tokenRole =
    decodedToken() && decodedToken().roles && decodedToken().roles.name.slice(5).toLowerCase();
  const childrenRole = window.location.pathname.split('/')[1];

  if (decodedToken() && tokenRole === childrenRole) {
    return children;
  }
  if (!decodedToken()) {
    return <Navigate to='/login' state={{ path: location.pathname }} replace />;
  }

  return null;
};

export default RequireAuth;
