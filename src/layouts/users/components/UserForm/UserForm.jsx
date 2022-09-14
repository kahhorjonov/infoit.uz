import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, MenuItem, Select } from '@mui/material';
import MDBox from 'components/MDBox';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
import { addUser } from 'store/thunk';

function UserForm() {
  const dispatch = useDispatch();
  const {
    users: { currentUser, pagination, search },
  } = useSelector(store => store);
  const [userData, setUserData] = useState({
    id: currentUser?.id,
    balance: currentUser?.balance,
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    roles: currentUser?.roles,
  });
  const [edit, setEdit] = useState(true);

  const handleChangeUserData = (name, value) => {
    setUserData({ ...userData, [name]: name === 'roles' ? [value] : value });
  };

  const handleSave = user => {
    dispatch(addUser({ search, user, pagination, role: currentUser.roles[0] }));
    setEdit(true);
  };

  return (
    <MDBox display='flex' flexDirection='column' gap={2}>
      <MDBox display='flex' alignItems='center' justifyContent='space-between'>
        <MDTypography>Foydalanuvchi: {userData?.id}</MDTypography>
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
        <MenuItem value='ROLE_USER'>Foydalanuvchi</MenuItem>
        <MenuItem value='ROLE_ADMIN'>Admin</MenuItem>
      </Select>

      <MDInput
        disabled={edit}
        type='number'
        value={userData?.balance || ''}
        label='Balans'
        fullWidth
        placeholder='Balans'
        onChange={e => handleChangeUserData('balance', parseInt(e.target.value, 10))}
      />
      <MDInput
        disabled={edit}
        value={userData?.password || ''}
        label='Parol'
        fullWidth
        placeholder='Parol'
        onChange={e => handleChangeUserData('password', e.target.value)}
      />
    </MDBox>
  );
}

export default UserForm;
