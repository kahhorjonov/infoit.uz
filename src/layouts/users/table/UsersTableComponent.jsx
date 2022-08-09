import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '@mui/material/Icon';
import MDButton from 'components/MDButton';
import MDBox from 'components/MDBox';
import MDBadge from 'components/MDBadge';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import MDInput from 'components/MDInput';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';

// Services
import { getUserById } from 'services/userService';
import { fetchAllUsers } from 'store/thunk';

export default function UsersTableComponent() {
  const dispatch = useDispatch();

  const { users } = useSelector(state => state);
  console.log(users);
  const [open, setOpen] = useState(false);
  // const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const fetchUsers = async () => {
  //   const result = await fetchAllUsers();
  //   setUsers(result.data.objectKoinot.content);
  // };

  const getUser = async id => {
    const result = await getUserById(id);
    setUserData(result.data.objectKoinot);
  };

  useEffect(() => {
    // fetchUsers();
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white'>
      <div className='block w-full overflow-x-auto'>
        <table className='items-center w-full bg-transparent border-collapse'>
          <thead>
            <tr>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'>
                Full Name
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'>
                Balance
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'>
                Status
              </th>
              <th className='px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'>
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.users?.map(user => (
              <tr key={user.id}>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  {`${user?.firstName} ${user?.lastName}`}
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  {user?.balance}
                </td>

                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <MDBox ml={-1}>
                      <MDBadge badgeContent='active' color='success' variant='gradient' size='sm' />
                    </MDBox>
                  </div>
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <MDButton
                    sx={{ paddingX: '0' }}
                    variant='text'
                    color='dark'
                    onClick={() => {
                      getUser(user.id);
                      handleOpen();
                    }}
                  >
                    <Icon>edit</Icon>&nbsp;edit
                  </MDButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
          <Grid container spacing={1} justifyContent='center' alignItems='center' height='100%'>
            <Card>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component='form' role='form'>
                  <MDBox mb={2} sx={{ display: 'flex' }}>
                    <MDInput
                      sx={{ marginRight: '5px' }}
                      InputLabelProps={{ shrink: true, required: true }}
                      type='text'
                      label='Balance'
                      fullWidth
                      value={userData && userData.balance}
                    />
                    <Select
                      InputLabelProps={{ shrink: true, required: true }}
                      sx={{ marginRight: '5px' }}
                      label='Role'
                      fullWidth
                      value={userData && userData.roles[0]}
                    >
                      <MenuItem value={10}>User</MenuItem>
                      <MenuItem value={20}>Admin</MenuItem>
                    </Select>
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
                    <MDButton sx={{ margin: '5px' }} variant='gradient' color='info'>
                      Save
                    </MDButton>

                    <MDButton sx={{ marginLeft: '5px' }} variant='gradient' color='secondary'>
                      Delete
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}

UsersTableComponent.defaultProps = {
  color: 'light',
};
