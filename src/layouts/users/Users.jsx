// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// @mui material components
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDButton from 'components/MDButton';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

// Material Dashboard 2 React components
import UsersTable from './components/UsersTable/UsersTable';

function Users() {
  return (
    <DashboardLayout>
      {/* <ModalComp status={open} onClose={handleClose}>
        <CategoryForm formType='add' onClose={handleClose} />
      </ModalComp> */}
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
                  <MDButton>
                    <Icon>add</Icon>
                  </MDButton>
                </MDBox>
              </MDBox>
              <MDBox width='100%' p={3}>
                <UsersTable />
                {/* {category.isLoading ? <Spiner /> : <CategoriesTable />} */}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Users;
