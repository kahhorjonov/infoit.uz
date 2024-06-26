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
        <div className='lg:w-8/12 p-2 flex flex-col'>
          <h1 className='uppercase mb-4 font-bold'>Nega aynan biz?</h1>
          <span className='text-left text-sm'>
            Chunki bizni maqsadimiz kelayotgan yangi yilda 500+ ta sifatli test va 25000+ ta
            qiziqarli savol chiqarish va uni 10000+ ta bilim ixlosmandlariga yetkazib ularni
            bilimlariga o`z hissamizni qo`shish.
          </span>

          <Link
            className='max-content mt-8 text-left my-4 bg-blue-900 text-white rounded py-2 px-6 text-sm'
            to='/login'
          >
            <button
              className='bg-transparent uppercase outline-none focus:outline-none ease-linear transition-all duration-150'
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
              <span className='text-base'>TEST</span>
            </div>
          </div>

          <div className='flex flex-row bg-grey w-full lg:w-5/12 p-3 rounded-lg m-4'>
            <div className='px-2'>
              <img src={icon} alt='...' className='rounded-2xl shadow-lg' />
            </div>
            <div className='flex flex-col px-2'>
              <span className='text-base text-lightBlue-600'>10 000+</span>
              <span className='text-base'>SAVOLLAR</span>
            </div>
          </div>

          <div className='flex flex-row bg-grey w-full lg:w-5/12 p-3 rounded-lg m-4'>
            <div className='px-2'>
              <img src={icon} alt='...' className='rounded-2xl shadow-lg' />
            </div>
            <div className='flex flex-col px-2'>
              <span className='text-base text-lightBlue-600'>10 000+</span>
              <span className='text-base'>FOYDALANUVCHI</span>
            </div>
          </div>

          {/* <div className='flex flex-row bg-grey w-full lg:w-5/12 p-3 rounded-lg m-4'>
            <div className='px-2'>
              <img src={icon} alt='...' className='rounded-2xl shadow-lg' />
            </div>
            <div className='flex flex-col px-2'>
              <span className='text-base text-lightBlue-600'>500+</span>
              <span className='text-base'>ORTIQ TEST</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
