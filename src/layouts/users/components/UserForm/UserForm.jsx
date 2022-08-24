import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon, MenuItem, Select } from '@mui/material';
import MDBox from 'components/MDBox';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
import { addUser } from 'store/thunk';

function UserForm() {
  const {
    users: { currentUser },
  } = useSelector(store => store);
  const [userData, setUserData] = useState({
    id: currentUser?.id,
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    roles: currentUser?.roles,
    balance: currentUser?.balance,
  });
  const [edit, setEdit] = useState(true);

  const handleChangeUserData = (name, value) => {
    setUserData({ ...userData, [name]: name === 'roles' ? [value] : value });
  };

  const handleSave = user => {
    console.log(user);
    addUser(user);
    setEdit(true);
  };

  return (
    <MDBox display='flex' flexDirection='column' gap={2}>
      <MDBox display='flex' alignItems='center' justifyContent='space-between'>
        <MDTypography>USER ID: {userData?.id}</MDTypography>
        {edit ? (
          <Icon fontSize='medium' onClick={() => setEdit(false)}>
            edit
          </Icon>
        ) : (
          <Icon fontSize='medium' onClick={() => handleSave(userData)}>
            check
          </Icon>
        )}
      </MDBox>
      <MDInput
        disabled
        value={`${userData?.firstName} ${userData?.lastName}`}
        label='F.I.O.'
        fullWidth
        placeholder='F.I.O.'
      />
      <Select
        disabled={edit}
        sx={{ height: '50px' }}
        value={userData?.roles[0] || ''}
        fullWidth
        onChange={e => handleChangeUserData('roles', e.target.value)}
      >
        <MenuItem value='ROLE_USER'>ROLE_USER</MenuItem>
        <MenuItem value='ROLE_ADMIN'>ROLE_ADMIN</MenuItem>
      </Select>

      <MDInput
        disabled={edit}
        type='number'
        value={userData?.balance || ''}
        label='Balance'
        fullWidth
        placeholder='Balance'
        onChange={e => handleChangeUserData('balance', e.target.value)}
      />
      <MDInput
        disabled={edit}
        value={userData?.password || ''}
        label='Password'
        fullWidth
        placeholder='Password'
        onChange={e => handleChangeUserData('password', e.target.value)}
      />
    </MDBox>
  );
}

export default UserForm;
