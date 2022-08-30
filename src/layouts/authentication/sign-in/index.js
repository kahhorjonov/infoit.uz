import { useState } from 'react';
import InputMask from 'react-input-mask';

// react-router-dom components
import { Link, useNavigate, useLocation } from 'react-router-dom';

// @mui material components
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';

// Authentication layout components
import BasicLayout from 'layouts/authentication/components/BasicLayout';

// Services
import { login, setToken, decodedToken } from 'services/authService';

function Basic() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/';

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleLogin = async () => {
    const result = await login(phone, password);
    setToken(result.data.objectKoinot.accessToken);

    navigate(redirectPath, { replace: true });
  };

  const path =
    decodedToken() && decodedToken().roles && decodedToken().roles.name.slice(5).toLowerCase();

  if (path === 'admin') {
    window.location.replace(`/${path}`);
  } else {
    return (
      <BasicLayout>
        <Card>
          <MDBox
            variant='gradient'
            bgColor='info'
            borderRadius='lg'
            coloredShadow='info'
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign='center'
          >
            <MDTypography variant='h4' fontWeight='medium' color='white' mt={1}>
              Kirish
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component='form' role='form'>
              <MDBox mb={2}>
                <InputMask
                  disabled={false}
                  mask='(99) 999 99 99'
                  maskChar=' '
                  onChange={e => setPhone(e.target.value)}
                >
                  {() => <MDInput label='Telefon' type='phone' fullWidth />}
                </InputMask>
                {/* <MDInput
                  type='phone'
                  label='Telefon'
                  fullWidth
                  onChange={e => setPhone(e.target.value)}
                ></MDInput> */}
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type='password'
                  label='Parol'
                  fullWidth
                  onChange={e => setPassword(e.target.value)}
                />
              </MDBox>
              {/* <MDBox display='flex' alignItems='center' ml={-1}>
                <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                <MDTypography
                  variant='button'
                  fontWeight='regular'
                  color='text'
                  onClick={handleSetRememberMe}
                  sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
                >
                  &nbsp;&nbsp;Remember me
                </MDTypography>
              </MDBox> */}
              <MDBox mt={4} mb={1}>
                <MDButton variant='gradient' color='info' fullWidth onClick={handleLogin}>
                  Kirish
                </MDButton>
              </MDBox>
              <MDBox mt={3} mb={1} textAlign='center'>
                <MDTypography variant='button' color='text'>
                  {/* Don&apos;t have an account?{' '} */}
                  <MDTypography
                    component={Link}
                    to='/register'
                    variant='button'
                    color='info'
                    fontWeight='medium'
                    textGradient
                  >
                    Ro`yxatdan o`tish
                  </MDTypography>
                </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </BasicLayout>
    );
  }
}

export default Basic;
