import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

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
        <Route path='/profile' exact element={<Profile />} />
        <Route path='/myTests' exact element={<MyTests />} />
        <Route path='/test/:id' exact element={<TestInfo />} />
        <Route path='/buyTest/:id' exact element={<Payment />} />
        <Route path='/quiz/:id' exact element={<Quiz />} />
      </Routes>
    </ThemeProvider>
  );
}

export default Admin;
