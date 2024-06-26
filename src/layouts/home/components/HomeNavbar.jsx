import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import QuizIcon from '@mui/icons-material/Quiz';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

// Services
import { decodedToken } from 'services/authService';

import InfoIt_LOGO from 'assets/images/infoit_logo.svg';

export default function HomeNavbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { hash: pathname } = window.location;
  const { pathname: main } = window.location;

  const navigate = useNavigate();
  const path =
    decodedToken() && decodedToken().roles && decodedToken().roles.name.slice(5).toLowerCase();

  if (path === 'admin') {
    window.location.replace(`/${path}`);
  } else {
    return (
      <nav className='top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-4 py-3 navbar-expand-lg bg-white shadow'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link to='/' className='text-blueGray-700'>
              <img src={InfoIt_LOGO} alt='' style={{ width: '72px', height: '62px' }} />
              {/* <span className='text-lg text-blue-900'>
                infoit<span className='text-orange'>.uz</span>
              </span> */}
            </Link>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'>
                <MenuIcon />
              </i>
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none ${
              navbarOpen ? 'block' : 'hidden'
            }  `}
            id='example-navbar-warning'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='flex items-center'>
                <a
                  href='#main'
                  className='px-3 flex items-center text-xs uppercase font-bold'
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  <span
                    className={
                      pathname === '#main' && main === '/'
                        ? 'lg:hover:underline underline text-blueGray-700 text-blueGray-700'
                        : 'text-blueGray-400'
                    }
                  >
                    Asosiy
                  </span>
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  href='#about-us'
                  className='px-3 flex items-center text-xs uppercase font-bold'
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  <span
                    className={
                      pathname === '#about-us'
                        ? 'lg:hover:underline underline text-blueGray-700 text-blueGray-700'
                        : 'text-blueGray-400'
                    }
                  >
                    Biz haqimizda
                  </span>
                </a>
              </li>

              <li className='flex items-center'>
                <a
                  href='#tests'
                  className='px-3 flex items-center text-xs uppercase font-bold'
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  <span className='lg:hover:underline'>
                    <span
                      className={
                        pathname === '#tests'
                          ? 'lg:hover:underline underline text-blueGray-700 text-blueGray-700'
                          : 'text-blueGray-400'
                      }
                    >
                      Testlar
                    </span>
                  </span>
                </a>
              </li>

              <li className='flex items-center'>
                <a
                  href='#for-teachers'
                  className='px-3 flex items-center text-xs uppercase font-bold'
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  <span
                    className={
                      pathname === '#for-teachers'
                        ? 'lg:hover:underline underline text-blueGray-700 text-blueGray-700'
                        : 'text-blueGray-400'
                    }
                  >
                    O`qituvchilar uchun
                  </span>
                </a>
              </li>

              {path === 'user' ? (
                <li className='flex items-center'>
                  <p
                    className='px-3 flex items-center text-xs uppercase font-bold mr-4 cursor-pointer'
                    onClick={() => {
                      navigate('/myTests');
                    }}
                  >
                    <span
                      className={
                        main === '/myTests'
                          ? 'lg:hover:underline underline text-blueGray-700 text-blueGray-700'
                          : 'text-blueGray-400'
                      }
                    >
                      Mening Testlarim
                    </span>
                  </p>
                </li>
              ) : null}

              {path !== 'user' ? (
                <li className='flex items-center'>
                  <Link className='rounded border-figma border py-1 px-2 text-sm mr-4' to='/login'>
                    <button
                      className='bg-transparent font-semibold uppercase outline-none focus:outline-none ease-linear transition-all duration-150'
                      type='button'
                    >
                      <MeetingRoomIcon fontSize='small' /> Kirish
                    </button>
                  </Link>
                </li>
              ) : (
                <li
                  style={{ borderRadius: '40px' }}
                  className='text-sm flex items-center shadow-lg'
                >
                  <div className='dropdown'>
                    <button type='button' className='max-w-200-px rounded-2xl dropbtn'>
                      <AccountCircleIcon fontSize='medium' />
                    </button>
                    <div className='rounded-lg dropdown-content'>
                      <Link className='rounded-lg' to='/profile'>
                        <PersonIcon /> Profil
                      </Link>
                      {/* <hr />
                      <Link className='rounded-lg' to='/topup'>
                        <AccountBalanceWalletIcon /> Hisobni to`ldirish
                      </Link> */}
                      <hr />
                      <Link to='/myTests' className='rounded-lg'>
                        <QuizIcon /> Testlarim
                      </Link>
                      <hr />
                      <Link
                        to='/'
                        onClick={() => {
                          // toast.success('Profildan chiqdingiz');
                          localStorage.removeItem('token');
                        }}
                        className='rounded-lg'
                      >
                        <LogoutIcon /> Chiqish
                      </Link>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
