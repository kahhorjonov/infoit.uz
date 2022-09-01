import { useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';

import { register } from 'services/authService';

// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import Card from '@mui/material/Card';
// import Checkbox from '@mui/material/Checkbox';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';
import InputMask from 'react-input-mask';

// Authentication layout components
import CoverLayout from 'layouts/authentication/components/CoverLayout';
// import { toast } from 'react-toastify';

function Cover() {
  const [firstName, setFirstName] = useState({ firstName: '', isOpened: false });
  const [lastName, setLastName] = useState({ lastName: '', isOpened: false });
  const [phoneNumber, setPhoneNumber] = useState({ phoneNumber: '', isOpened: false });
  const [password, setPassword] = useState({ password: '', isOpened: false });
  const [passwordConf, setPasswordConf] = useState({ passwordConf: '', isOpened: false });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleRegister = () => {
    if (
      firstName.firstName &&
      lastName.lastName &&
      phoneNumber.phoneNumber &&
      password.password &&
      passwordConf.passwordConf
    ) {
      const phone = phoneNumber.phoneNumber.split(' ');
      let edited = phone[0].slice(1, 3);
      phone.forEach((phoneValue, index) => {
        index >= 1 ? (edited += phoneValue) : '';
      });

      const payload = {
        firstName: firstName.firstName,
        lastName: lastName.lastName,
        phoneNumber: `+998${edited}`,
        password: password.password,
      };

      register(payload);
    }
  };

  return (
    <CoverLayout>
      <Card>
        <MDBox
          variant='gradient'
          bgColor='info'
          borderRadius='lg'
          coloredShadow='success'
          mx={2}
          mt={-5}
          p={3}
          mb={1}
          textAlign='center'
        >
          <MDTypography variant='h4' fontWeight='medium' color='white' mt={1}>
            Ro`yxatdan o`tish
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component='form' role='form'>
            <MDBox mb={2}>
              <MDInput
                type='text'
                label='Ism'
                InputProps={{ maxLength: 25, error: !firstName.firstName && firstName.isOpened }}
                variant='standard'
                fullWidth
                onChange={e => setFirstName({ ...firstName, firstName: e.target.value })}
                onClick={() => setFirstName({ ...firstName, isOpened: true })}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type='text'
                label='Familiya'
                InputProps={{ maxLength: 25, error: !lastName.lastName && lastName.isOpened }}
                variant='standard'
                fullWidth
                onChange={e => setLastName({ ...lastName, lastName: e.target.value })}
                onClick={() => setLastName({ ...lastName, isOpened: true })}
              />
            </MDBox>
            <MDBox mb={2}>
              <InputMask
                disabled={false}
                mask='(99) 999 99 99'
                maskChar=' '
                onChange={e => setPhoneNumber({ ...phoneNumber, phoneNumber: e.target.value })}
              >
                {() => (
                  <MDInput
                    onClick={() => setPhoneNumber({ ...phoneNumber, isOpened: true })}
                    label='Telefon'
                    variant='standard'
                    type='phone'
                    fullWidth
                    InputProps={{
                      error: !phoneNumber.phoneNumber && phoneNumber.isOpened,
                    }}
                  />
                )}
              </InputMask>
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type={showPassword ? 'text' : 'password'}
                label='Parol'
                variant='standard'
                fullWidth
                onClick={() => setPassword({ ...password, isOpened: true })}
                onChange={e => setPassword({ ...password, password: e.target.value })}
                InputProps={{
                  error: !password.password && password.isOpened,
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        size='small'
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type={showPassword ? 'text' : 'password'}
                label='Parol (qaytadan)'
                variant='standard'
                maxLength={25}
                fullWidth
                onClick={() => setPasswordConf({ ...passwordConf, isOpened: true })}
                onChange={e => setPasswordConf({ ...passwordConf, passwordConf: e.target.value })}
                InputProps={{
                  error: !passwordConf.passwordConf && passwordConf.isOpened,
                }}
              />
            </MDBox>
            {/* <MDBox display='flex' alignItems='center' ml={-1}>
              <Checkbox />
              <MDTypography
                variant='button'
                fontWeight='regular'
                color='text'
                sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component='a'
                href='#'
                variant='button'
                fontWeight='bold'
                color='info'
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox> */}
            <MDBox mt={4} mb={1}>
              <MDButton variant='gradient' color='info' fullWidth onClick={handleRegister}>
                Kirish
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign='center'>
              <MDTypography variant='button' color='text'>
                Akkauntingiz bormi?{' '}
                <MDTypography
                  component={Link}
                  to='/login'
                  variant='button'
                  color='info'
                  fontWeight='medium'
                  textGradient
                >
                  Kirish
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
