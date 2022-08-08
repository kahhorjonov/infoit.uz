import { useState, useEffect } from 'react';

// react-router components
import { Routes, Route, useLocation } from 'react-router-dom';
import RequireAuth from 'layouts/authentication/RequireAuth';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from 'assets/theme';

// Layouts
import AdminLayout from 'layouts/admin/AdminLayout';
import UserLayout from 'layouts/user/UserLayout';
import SignIn from 'layouts/authentication/sign-in';

export default function App() {
  const { pathname } = useLocation();

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
      <CssBaseline />
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route
          path='/admin/*'
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        />
        <Route path='/admin/*' element={<UserLayout />} />
      </Routes>
    </ThemeProvider>
  );
}
