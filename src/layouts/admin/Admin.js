import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import Sidenav from 'examples/Sidenav';
import Configurator from 'examples/Configurator';

// Material Dashboard 2 React themes
import theme from 'assets/theme';

// Material Dashboard 2 React Dark Mode themes
import themeDark from 'assets/theme-dark';

// Material Dashboard 2 React routes
import routes from 'routes';

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from 'context';

// Images
import brandWhite from 'assets/images/logo-ct.png';
import brandDark from 'assets/images/logo-ct-dark.png';

import InfoIt_LOGO from 'assets/images/infoit_logo.svg';

// Pages
import Dashboard from 'layouts/dashboard';
import CreateQuestion from 'layouts/createQuestion/CreateQuestion';
import CreateTest from 'layouts/tests/CreateTest';
import Categories from 'layouts/categories/Categories';
import Users from 'layouts/users/Users';
// import Tables from 'layouts/tables';
// import Notifications from 'layouts/notifications';
// import Profile from 'layouts/profile';
import Login from 'layouts/authentication/sign-in';
import Register from 'layouts/authentication/sign-up';
import Logout from 'layouts/admin/Logout';

// import Logo from '../../assets/images/small-logos/'

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
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute('dir', direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const configsButton = (
    <MDBox
      display='flex'
      justifyContent='center'
      alignItems='center'
      width='3.25rem'
      height='3.25rem'
      bgColor='white'
      shadow='sm'
      borderRadius='50%'
      position='fixed'
      right='2rem'
      bottom='2rem'
      zIndex={99}
      color='dark'
      sx={{ cursor: 'pointer' }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize='small' color='inherit'>
        settings
      </Icon>
    </MDBox>
  );

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      <Sidenav
        color={sidenavColor}
        brand={InfoIt_LOGO}
        brandName='Info IT'
        routes={routes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
      <Configurator />
      {configsButton}

      <Routes>
        <Route path='/' exact element={<Dashboard />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/createQuestion' exact element={<CreateQuestion />} />
        <Route path='/createTest' exact element={<CreateTest />} />
        <Route path='/categories' exact element={<Categories />} />
        <Route path='/users' exact element={<Users />} />
        {/* <Route path='/tables' exact element={<Tables />} /> */}
        {/* <Route path='/notifications' exact element={<Notifications />} /> */}
        {/* <Route path='/profile' exact element={<Profile />} /> */}
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/logout' exact element={<Logout />} />
        <Route path='*' element={<Navigate to='/admin/dashboard' replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default Admin;
