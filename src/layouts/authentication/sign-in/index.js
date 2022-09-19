import { useState } from 'react';
import InputMask from 'react-input-mask';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';

// react-router-dom components
import { Link, useLocation } from 'react-router-dom';

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
import { toast } from 'react-toastify';

function Basic() {
  const [phone, setPhone] = useState({ isOpened: false, phone: '' });
  const [password, setPassword] = useState({ isOpened: false, password: '' });
  // const [rememberMe, setRememberMe] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const location = useLocation();
  const redirectPath = location.state?.path || '/';

  // const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleLogin = async () => {
    if (password.password && phone.phone) {
      const phoneNumber = phone.phone.split(' ');

      let edited = phoneNumber[0].slice(1, 3);
      phoneNumber.forEach((phoneValue, index) => {
        index >= 1 ? (edited += phoneValue) : '';
      });

      try {
        const result = await login(edited, password.password);
        setToken(result.data.objectKoinot.accessToken);
        // toast.success(result.data.message);
        // navigate(redirectPath, { replace: true });

        result.data.objectKoinot.roles[0].slice(5).toLowerCase() === 'user'
          ? localStorage.getItem('buy')
            ? window.location.replace(`/test/${localStorage.getItem('buy')}`) ||
              localStorage.removeItem('buy')
            : window.location.replace('/')
          : window.location.replace(`/${redirectPath}`);
      } catch (error) {
        toast.error("Login yoki parol noto'g'ri");
      }
    } else {
      setPhone({ ...phone, isOpened: true });
      setPassword({ ...password, isOpened: true });
    }
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
                  onChange={e => setPhone({ ...phone, phone: e.target.value })}
                >
                  {() => (
                    <MDInput
                      onClick={() => setPhone({ ...phone, isOpened: true })}
                      InputProps={{
                        error: !phone.phone && phone.isOpened,
                        startAdornment: (
                          <InputAdornment position='start'>
                            <span style={{ fontSize: '0.91rem' }}>+998</span>
                          </InputAdornment>
                        ),
                      }}
                      label='Telefon'
                      type='phone'
                      fullWidth
                    />
                  )}
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
                  type={showPassword ? 'text' : 'password'}
                  label='Parol'
                  fullWidth
                  onClick={() => setPassword({ ...password, isOpened: true })}
                  // inputProps={{ maxLength: 25 }}
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
