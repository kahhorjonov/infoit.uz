import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

export default function HomeNavbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { pathname } = window.location;

  return (
    <nav className='top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-4 py-3 navbar-expand-lg bg-white shadow'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link
            to='/'
            className='text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
          >
            <span className='text-lg text-blue-900'>
              infoit<span className='text-orange'>.uz</span>
            </span>
          </Link>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className='fas fa-bars' />
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none ${navbarOpen} ? 'block' : 'hidden' `}
          id='example-navbar-warning'
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <li className='flex items-center'>
              <Link to='/' className='px-3 flex items-center text-xs uppercase font-bold'>
                <span
                  className={
                    pathname === '/'
                      ? 'lg:hover:underline underline text-blueGray-700text-blueGray-700'
                      : 'text-blueGray-200'
                  }
                >
                  Asosiy
                </span>
              </Link>
            </li>
            <li className='flex items-center'>
              <Link to='/about-us' className='px-3 flex items-center text-xs uppercase font-bold'>
                <span
                  className={
                    pathname === '/about-us'
                      ? 'lg:hover:underline underline text-blueGray-700text-blueGray-700'
                      : 'text-blueGray-200'
                  }
                >
                  Biz haqimizda
                </span>
              </Link>
            </li>

            <li className='flex items-center'>
              <Link to='/tests' className='px-3 flex items-center text-xs uppercase font-bold'>
                <span className='lg:hover:underline'>
                  <span
                    className={
                      pathname === '/tests'
                        ? 'lg:hover:underline underline text-blueGray-700text-blueGray-700'
                        : 'text-blueGray-200'
                    }
                  >
                    Testlar
                  </span>
                </span>
              </Link>
            </li>

            <li className='flex items-center'>
              <Link
                to='/for-teachers'
                className='px-3 flex items-center text-xs uppercase font-bold mr-4'
              >
                <span
                  className={
                    pathname === '/for-teachers'
                      ? 'lg:hover:underline underline text-blueGray-700text-blueGray-700'
                      : 'text-blueGray-200'
                  }
                >
                  O`qituvchilar uchun
                </span>
              </Link>
            </li>

            <li className='flex items-center'>
              <Link className='rounded border-figma border py-1 px-2 text-sm mr-4' to='/login'>
                <button
                  className='bg-transparent font-semibold uppercase outline-none focus:outline-none ease-linear transition-all duration-150'
                  type='button'
                >
                  <MeetingRoomIcon fontSize='small' /> Ro`yxatdan o`tish
                </button>
              </Link>
            </li>

            {/* <li className='flex items-center'>
              <Link to='/register'>
                <button
                  className='bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                  type='button'
                >
                  Register
                </button>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
