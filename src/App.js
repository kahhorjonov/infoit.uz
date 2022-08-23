import { useEffect } from 'react';

// react-router components
import { Routes, Route, useLocation } from 'react-router-dom';
import RequireAuth from 'layouts/authentication/RequireAuth';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from 'assets/theme';

// Layouts
import Home from 'layouts/home/index';
import Admin from 'layouts/admin/Admin';
import User from 'layouts/user/User';
import SignIn from 'layouts/authentication/sign-in';
import SignUp from 'layouts/authentication/sign-up';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
      <CssBaseline />
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route
          path='/admin/*'
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />
        <Route path='/user/*' element={<User />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </ThemeProvider>
  );
}
