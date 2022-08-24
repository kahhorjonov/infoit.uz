import React, { useEffect } from 'react';

// image
import coverSm from 'assets/homePage/teacher.png';

export default function Profile() {
  return (
    <main className='container relative mx-auto p-3'>
      <h2 className='items-center py-0 mt-24 py-2 text-3xl'>Profil</h2>

      <div className='mt-4 relative bg-white flex min-w-0 break-words w-full mb-6 rounded-lg border-0'>
        <div className='container w-full relative flex mx-auto items-center p-3 px-6'>
          <div className='md:w-4/12'>
            <img src={coverSm} alt='2' />
          </div>
          <div className='md:w-8/12'>
            <div className='flex flex-col mx-4'>
              <label className='text-base mb-3'>Ism</label>
              <input type='text' className='text-sm text-blueGray-500' defaultValue='Akbarjon' />
            </div>

            <hr className='bg-lightBlue-400' />

            <div className='flex flex-col mt-12 mx-4'>
              <label className='text-base mb-3'>Familiya</label>
              <input type='text' className='text-sm text-blueGray-500' value='Qoxorjonov' />
            </div>

            <hr />

            <div className='flex flex-col mt-12 mx-4'>
              <label className='text-base mb-3'>Telefon raqam</label>
              <input type='text' className='text-sm text-blueGray-500' value='+998903093028' />
            </div>

            <hr />
          </div>
        </div>
      </div>
    </main>
  );
}
