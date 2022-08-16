import React from 'react';

// components
import CardTest from '../Cards/CardTest';

export default function Tests() {
  return (
    <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0'>
      <div className='flex-auto px-10 lg:px-10 py-10 pt-0'>
        <div className='mt-24'>
          <h6 className='text-lg mt-3 mb-6 font-bold uppercase'>Testlar</h6>
        </div>

        <div className='w-full relative'>
          <ul className='w-full flex flex-wrap'>
            <li className='mx-2 underline cursor-pointer'>Barcha testlar</li>
            <li className='mx-2 text-blueGray-400 cursor-pointer'>Matematika</li>
            <li className='mx-2 text-blueGray-400 cursor-pointer'>Informatika</li>
            <li className='mx-2 text-blueGray-400 cursor-pointer'>Fizika</li>
            <li className='mx-2 text-blueGray-400 cursor-pointer'>Tibbiyot</li>
            <li className='mx-2 text-blueGray-400 cursor-pointer'>Geografiya</li>
          </ul>
        </div>

        <div className='flex flex-wrap mt-12'>
          <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-2'>
            <CardTest />
          </div>

          <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-2'>
            <CardTest />
          </div>

          <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-2'>
            <CardTest />
          </div>

          <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-2'>
            <CardTest />
          </div>

          <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-2'>
            <CardTest />
          </div>
        </div>
      </div>
    </div>
  );
}
