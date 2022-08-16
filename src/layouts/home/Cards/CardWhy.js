import React from 'react';
import { Link } from 'react-router-dom';

// images
import icon from 'assets/homePage/rounded.png';

// Icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// components

export default function CardWhy() {
  return (
    <div className='relative flex flex-row min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'>
      <div className='w-full rounded-y-l lg:w-6/12 bg-white mb-0 px-4 py-6'>
        <div className='lg:w-8/12 p-2'>
          <h1 className='uppercase mb-4 font-bold'>Nega aynan biz?</h1>
          <span className='text-left text-sm'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit temporibus labore
            perferendis ea laudantium, nisi, sed exercitationem magni facere reprehenderit illum! Et
            excepturi doloremque maxime placeat. Exercitationem, corporis non. Voluptatum.
          </span>

          <Link
            className='text-left my-4 bg-blue-900 text-white rounded py-2 px-2 text-sm'
            to='/login'
          >
            <button
              className='mt-8 bg-transparent uppercase outline-none focus:outline-none ease-linear transition-all duration-150'
              type='button'
            >
              <span>
                Test yechishni boshlash &nbsp;
                <ArrowRightAltIcon fontSize='small' />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className='w-full rounded-y-r lg:w-6/12 bg-white mb-0 px-4 py-6'>
        <div className='flex flex-wrap ml-auto mr-auto'>
          <div className='flex flex-row bg-grey w-full lg:w-5/12 p-3 rounded-lg m-4'>
            <div className='px-2'>
              <img src={icon} alt='...' className='rounded-2xl shadow-lg' />
            </div>
            <div className='flex flex-col px-2'>
              <span className='text-base text-lightBlue-600'>500+</span>
              <span className='text-base'>ORTIQ TEST</span>
            </div>
          </div>

          <div className='flex flex-row bg-grey w-full lg:w-5/12 p-3 rounded-lg m-4'>
            <div className='px-2'>
              <img src={icon} alt='...' className='rounded-2xl shadow-lg' />
            </div>
            <div className='flex flex-col px-2'>
              <span className='text-base text-lightBlue-600'>500+</span>
              <span className='text-base'>ORTIQ TEST</span>
            </div>
          </div>

          <div className='flex flex-row bg-grey w-full lg:w-5/12 p-3 rounded-lg m-4'>
            <div className='px-2'>
              <img src={icon} alt='...' className='rounded-2xl shadow-lg' />
            </div>
            <div className='flex flex-col px-2'>
              <span className='text-base text-lightBlue-600'>500+</span>
              <span className='text-base'>ORTIQ TEST</span>
            </div>
          </div>

          <div className='flex flex-row bg-grey w-full lg:w-5/12 p-3 rounded-lg m-4'>
            <div className='px-2'>
              <img src={icon} alt='...' className='rounded-2xl shadow-lg' />
            </div>
            <div className='flex flex-col px-2'>
              <span className='text-base text-lightBlue-600'>500+</span>
              <span className='text-base'>ORTIQ TEST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
