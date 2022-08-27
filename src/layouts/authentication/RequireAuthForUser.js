/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import { decodedToken } from 'services/authService';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuthForUser = ({ children }) => {
  const location = useLocation();
  const tokenRole =
    decodedToken() && decodedToken().roles && decodedToken().roles.name.slice(5).toLowerCase();
  if (!decodedToken()) {
    return <Navigate to='/login' state={{ path: location.pathname }} replace />;
  }
  if (tokenRole === 'user') {
    return children;
  }

  return null;
};

export default RequireAuthForUser;
