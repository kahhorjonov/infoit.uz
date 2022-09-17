import { useEffect } from 'react';
import { decodedToken } from 'services/authService';

// react-router components
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import RequireAuth from 'layouts/authentication/RequireAuth';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from 'assets/theme';

// Layouts
import Home from 'layouts/home/index';
import Admin from 'layouts/admin/Admin';
import SignIn from 'layouts/authentication/sign-in';
import SignUp from 'layouts/authentication/sign-up';
// import NotFound from 'layouts/home/components/NotFound';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const { pathname } = useLocation();
  // const { origin } = window.location;
  // console.log(origin);
  // const tokenRole =
  //   decodedToken() && decodedToken()?.roles && decodedToken()?.roles.name.slice(5)?.toLowerCase();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // const getRoutes = allRoutes =>
  //   allRoutes.map(route => {
  //     if (route.collapse) {
  //       return getRoutes(route.collapse);
  //     }

  //     if (route.route) {
  //       return (
  //         <Route
  //           exact
  //           path={route.route}
  //           element={
  //             <RequireAuth>
  //               <route.component />
  //             </RequireAuth>
  //           }
  //           key={route.key}
  //         />
  //       );
  //     }

  //     return null;
  //   });

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <CssBaseline />
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route
          path='/admin/*'
          exact
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        {/* <Route path='*' element={<NotFound />} /> */}
        {/* {tokenRole === 'admin' ? (
          <Route path='mytests/' element={<Navigate to={`${origin}/admin`} replace />} />
        ) : null} */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </ThemeProvider>
  );
}
