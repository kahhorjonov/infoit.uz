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

// Authentication layout components
import CoverLayout from 'layouts/authentication/components/CoverLayout';

function Cover() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    register({ firstName, lastName, phoneNumber, password });
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
                variant='standard'
                fullWidth
                onChange={e => setFirstName(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type='text'
                label='Familiya'
                variant='standard'
                fullWidth
                onChange={e => setLastName(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type='phone'
                label='Telefon'
                variant='standard'
                fullWidth
                onChange={e => setPhoneNumber(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type='password'
                label='Parol'
                variant='standard'
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
