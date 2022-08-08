import React, { useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';

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
import MDInput from 'components/MDInput';

// Components
import UsersTableComponent from '../table/UsersTableComponent';

function Users() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant='gradient'
                bgColor='info'
                borderRadius='lg'
                coloredShadow='info'
              >
                <MDTypography variant='h6' color='white'>
                  Users Table
                </MDTypography>
                <MDButton variant='text' color='white' onClick={handleOpen}>
                  <Icon>add</Icon>&nbsp;add
                </MDButton>{' '}
              </MDBox>
              <MDBox pt={3}>
                <UsersTableComponent />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <div>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Grid container spacing={1} justifyContent='center' alignItems='center' height='100%'>
            <Grid item xs={10} sm={10} md={8} lg={6} xl={6}>
              <Card>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component='form' role='form'>
                    <MDBox mb={2} sx={{ display: 'flex' }}>
                      <MDInput
                        sx={{ marginRight: '5px' }}
                        type='text'
                        label='First Name'
                        fullWidth
                      />
                      <MDInput type='text' label='Last Name' fullWidth />
                    </MDBox>
                    <MDBox mb={2} sx={{ display: 'flex' }}>
                      <MDInput
                        sx={{ marginRight: '5px' }}
                        type='date'
                        InputLabelProps={{ shrink: true, required: true }}
                        label='Date of Birth'
                        fullWidth
                      />
                      <MDInput type='text' label='Address' fullWidth />
                    </MDBox>
                    <MDBox mb={2} sx={{ display: 'flex' }}>
                      <MDInput sx={{ marginRight: '5px' }} type='text' label='Region' fullWidth />
                      <MDInput type='text' label='Role' fullWidth />
                    </MDBox>
                    <MDBox
                      mt={4}
                      mb={1}
                      spacing={1}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <MDButton sx={{ paddingX: '35px' }} variant='gradient' color='info'>
                        Save
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </Modal>
      </div>
    </DashboardLayout>
  );
}

export default Users;
