import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

import InfoIt_LOGO from 'assets/images/infoit_logo.svg';

export default function FooterHome() {
  return (
    <footer className='relative bg-white pt-8 pb-6'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap text-center lg:text-left'>
          <div className='w-full lg:w-6/12 px-4'>
            <img src={InfoIt_LOGO} alt='' style={{ width: '72px', height: '62px' }} />

            {/* <span className='uppercase text-2xl text-blue-900'>
              infoit<span className='text-orange'>.uz</span>
            </span> */}
            <h5 className='text-lg mt-4 mb-2 text-blueGray-600'>
              <PhoneIcon /> &nbsp; <a href='tel:+998974523190'>+998 97 452 31 90</a>
            </h5>
            <h5 className='text-lg mt-0 mb-2 text-blueGray-600'>
              <EmailIcon /> &nbsp; InfoIT@gmail.com
            </h5>
            <h5 className='text-lg mt-0 mb-2 text-blueGray-600'>
              <TelegramIcon /> &nbsp; <a href='https://t.me/test_infoituz'>test_infoituz</a>
            </h5>
          </div>
          <div className='w-full lg:w-6/12 mt-6'>
            <div className='flex flex-wrap items-top mb-6'>
              <div className='w-full lg:w-4/12 ml-auto'>
                <ul className='list-unstyled flex flex-col gap-2'>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
                      href='#about-us'
                    >
                      {/* About Us */}
                      Biz haqimizda
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block  text-sm'
                      href='#tests'
                    >
                      Testlar
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block  text-sm'
                      href='https://www.github.com/creativetimofficial?ref=nr-footer'
                    >
                      Abiturientlar uchun
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className='w-full lg:w-4/12'>
                <ul className='list-unstyled flex flex-col gap-2'>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
                      href='#for-teachers'
                    >
                      O`qituvchilar uchun
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
                      href='https://creative-tim.com/terms?ref=nr-footer'
                    >
                      Statistika
                    </a>
                  </li> */}
                  <li>
                    <Link
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
                      to='/profile'
                    >
                      Mening Profilim
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-6 border-blueGray-300' />
      </div>
    </footer>
  );
}
