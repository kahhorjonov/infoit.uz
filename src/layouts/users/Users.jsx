import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'store/thunk';
// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { MenuItem, Select } from '@mui/material';

// @mui material components
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
// import MDButton from 'components/MDButton';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

// Material Dashboard 2 React components
import UsersTable from './components/UsersTable/UsersTable';

function Users() {
  const dispatch = useDispatch();
  const {
    users: { pagination },
  } = useSelector(store => store);

  const [role, setRole] = useState('ROLE_USER');

  useEffect(() => {
    dispatch(getUsers({ role, pagination }));
  }, [dispatch, role]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                p={2}
                variant='gradient'
                bgColor='info'
                borderRadius='lg'
                coloredShadow='info'
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <MDTypography variant='h6' color='white'>
                  Users
                </MDTypography>
                <MDBox display='flex' alignItems='center' gap={3}>
                  <Select
                    variant='standard'
                    value={role}
                    sx={{ width: '100px', height: '30px', color: 'white !important' }}
                    onChange={e => setRole(e.target.value)}
                  >
                    <MenuItem value='ROLE_USER'>USER</MenuItem>
                    <MenuItem value='ROLE_ADMIN'>ADMIN</MenuItem>
                  </Select>
                  {/* <MDButton>
                    <Icon>add</Icon>
                  </MDButton> */}
                </MDBox>
              </MDBox>
              <MDBox width='100%' p={3}>
                <UsersTable role={role} />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Users;
