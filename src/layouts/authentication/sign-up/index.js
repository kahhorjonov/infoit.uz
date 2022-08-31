import { useState } from 'react';

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
import { toast } from 'react-toastify';

function Cover() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const phone = phoneNumber.split(' ');
    let edited = phone[0].slice(1, 3);
    phone.forEach((phoneValue, index) => {
      index >= 1 ? (edited += phoneValue) : '';
    });

    register({ firstName, lastName, phoneNumber: `+998${edited}`, password });
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
          mt={-3}
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
                inputProps={{ maxLength: 25 }}
                variant='standard'
                fullWidth
                onChange={e => setFirstName(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type='text'
                label='Familiya'
                inputProps={{ maxLength: 25 }}
                variant='standard'
                fullWidth
                onChange={e => setLastName(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <InputMask
                disabled={false}
                mask='(99) 999 99 99'
                maskChar=' '
                onChange={e => setPhoneNumber(e.target.value)}
              >
                {() => <MDInput label='Telefon' variant='standard' type='phone' fullWidth />}
              </InputMask>
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type='password'
                label='Parol'
                variant='standard'
                maxLength={25}
                fullWidth
                onChange={e => setPassword(e.target.value)}
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
              <MDButton variant='gradient' color='info' fullWidth onClick={() => handleRegister()}>
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
