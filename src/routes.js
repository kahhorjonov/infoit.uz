// Material Dashboard 2 React layouts
import Dashboard from 'layouts/dashboard';
// import Tables from 'layouts/tables';
// import Notifications from 'layouts/notifications';
// import Profile from 'layouts/profile';
import Categories from 'layouts/categories/Categories';
import CreateTest from 'layouts/tests/CreateTest';
import CreateQuestion from 'layouts/createQuestion/CreateQuestion';
import Users from 'layouts/users/Users';
import Logout from 'layouts/admin/Logout';

// @mui icons
import Icon from '@mui/material/Icon';

const routes = [
  {
    type: 'collapse',
    name: 'Statistika',
    key: 'dashboard',
    icon: <Icon fontSize='small'>dashboard</Icon>,
    route: '/admin/dashboard',
    user: 'admin',
    component: <Dashboard />,
  },
  {
    type: 'collapse',
    name: 'Savollar',
    key: 'createQuestion',
    icon: <Icon fontSize='small'>add</Icon>,
    route: '/admin/createQuestion',
    user: 'admin',
    component: <CreateQuestion />,
  },
  {
    type: 'collapse',
    name: 'Testlar',
    key: 'createTest',
    icon: <Icon fontSize='small'>quiz</Icon>,
    route: '/admin/createTest',
    user: 'admin',
    component: <CreateTest />,
  },
  {
    type: 'collapse',
    name: 'Kategoriyalar',
    key: 'categories',
    icon: <Icon fontSize='small'>category</Icon>,
    route: '/admin/categories',
    user: 'admin',
    component: <Categories />,
  },
  {
    type: 'collapse',
    name: 'Foydalanuvchilar',
    key: 'users',
    icon: <Icon fontSize='small'>group</Icon>,
    route: '/admin/users',
    user: 'admin',
    component: <Users />,
  },
  // {
  //   type: 'collapse',
  //   name: 'Tables',
  //   key: 'tables',
  //   icon: <Icon fontSize='small'>table_view</Icon>,
  //   route: '/admin/tables',
  //   user: 'admin',
  //   component: <Tables />,
  // },
  // {
  //   type: 'collapse',
  //   name: 'Billing',
  //   key: 'billing',
  //   icon: <Icon fontSize='small'>receipt_long</Icon>,
  //   route: '/admin/billing',
  //   user: 'admin',
  //   component: <Billing />,
  // },
  // {
  //   type: 'collapse',
  //   name: 'Notifications',
  //   key: 'notifications',
  //   icon: <Icon fontSize='small'>notifications</Icon>,
  //   route: '/admin/notifications',
  //   user: 'admin',
  //   component: <Notifications />,
  // },
  // {
  //   type: 'collapse',
  //   name: 'Profile',
  //   key: 'profile',
  //   icon: <Icon fontSize='small'>person</Icon>,
  //   route: '/admin/profile',
  //   user: 'admin',
  //   component: <Profile />,
  // },
  // {
  //   type: 'collapse',
  //   name: 'Sign In',
  //   key: 'sign-in',
  //   icon: <Icon fontSize='small'>login</Icon>,
  //   route: '/admin/login',
  //   user: 'admin',
  //   component: <SignIn />,
  // },
  // {
  //   type: 'collapse',
  //   name: 'Sign Up',
  //   key: 'sign-up',
  //   icon: <Icon fontSize='small'>assignment</Icon>,
  //   route: '/admin/register',
  //   user: 'admin',
  //   component: <SignUp />,
  // },
  {
    type: 'collapse',
    name: 'Chiqish',
    key: 'logout',
    icon: <Icon fontSize='small'>logout</Icon>,
    route: '/admin/logout',
    user: 'admin',
    component: <Logout />,
  },
];

export default routes;
