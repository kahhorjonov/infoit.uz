import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import RequireAuthForUser from 'layouts/authentication/RequireAuthForUser';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Material Dashboard 2 React themes
import theme from 'assets/theme';

// Material Dashboard 2 React Dark Mode themes
import themeDark from 'assets/theme-dark';

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from 'context';

// NavBar
import HomeNavbar from './components/HomeNavbar';

// Pages
import Main from './components/main';
import TestInfo from './components/TestInfo';
import Payment from './components/Payment';
import Quiz from './components/Quiz';
import MyTests from './components/MyTests';
import Profile from './components/Profile';
import OthersResult from './components/OthersResult';
import TopUp from './components/TopUp';

function Admin() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const { pathname } = useLocation();

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute('dir', direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <HomeNavbar />
      <CssBaseline />

      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route
          path='/profile'
          exact
          element={
            <RequireAuthForUser>
              <Profile />
            </RequireAuthForUser>
          }
        />
        <Route
          path='/topup'
          exact
          element={
            <RequireAuthForUser>
              <TopUp />
            </RequireAuthForUser>
          }
        />
        <Route
          path='/results/:id'
          exact
          element={
            <RequireAuthForUser>
              <OthersResult />
            </RequireAuthForUser>
          }
        />
        <Route
          path='/myTests'
          exact
          element={
            <RequireAuthForUser>
              <MyTests />
            </RequireAuthForUser>
          }
        />
        <Route
          path='/buyTest/:id'
          exact
          element={
            <RequireAuthForUser>
              <Payment />
            </RequireAuthForUser>
          }
        />
        <Route
          path='/quiz/:id'
          exact
          element={
            <RequireAuthForUser>
              <Quiz />
            </RequireAuthForUser>
          }
        />
        <Route
          path='/result/:id'
          exact
          element={
            <RequireAuthForUser>
              <Quiz />
            </RequireAuthForUser>
          }
        />
        {/* <Route path='/profile' exact element={<Profile />} /> */}
        {/* <Route path='/results/:id' exact element={<OthersResult />} /> */}
        {/* <Route path='/myTests' exact element={<MyTests />} /> */}
        <Route path='/test/:id' exact element={<TestInfo />} />
        {/* <Route path='/buyTest/:id' exact element={<Payment />} /> */}
        {/* <Route path='/quiz/:id' exact element={<Quiz />} /> */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default Admin;
