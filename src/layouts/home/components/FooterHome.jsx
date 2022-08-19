import React from 'react';

// Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function FooterHome() {
  return (
    <footer className='relative bg-white pt-8 pb-6'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap text-center lg:text-left'>
          <div className='w-full lg:w-6/12 px-4'>
            <span className='uppercase text-2xl text-blue-900'>
              infoit<span className='text-orange'>.uz</span>
            </span>
            <h5 className='text-lg mt-4 mb-2 text-blueGray-600'>
              <PhoneIcon /> &nbsp; +998 88 887-00-00
            </h5>
            <h5 className='text-lg mt-0 mb-2 text-blueGray-600'>
              <EmailIcon /> &nbsp; InfoIT@gmail.com
            </h5>
          </div>
          <div className='w-full lg:w-6/12 '>
            <div className='flex flex-wrap items-top mb-6'>
              <div className='w-full lg:w-4/12 ml-auto'>
                <ul className='list-unstyled flex flex-col gap-2'>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
                      href='https://www.creative-tim.com/presentation?ref=nr-footer'
                    >
                      {/* About Us */}
                      Biz haqimizda
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block  text-sm'
                      href='https://blog.creative-tim.com?ref=nr-footer'
                    >
                      Testlar
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block  text-sm'
                      href='https://www.github.com/creativetimofficial?ref=nr-footer'
                    >
                      Abiturientlar uchun
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full lg:w-4/12'>
                <ul className='list-unstyled flex flex-col gap-2'>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
                      href='https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer'
                    >
                      O`qituvchilar uchun
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
                      href='https://creative-tim.com/terms?ref=nr-footer'
                    >
                      Statistika
                    </a>
                  </li>
                  <li>
                    <a
                      className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
                      href='https://creative-tim.com/privacy?ref=nr-footer'
                    >
                      Mening Profilim
                    </a>
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
