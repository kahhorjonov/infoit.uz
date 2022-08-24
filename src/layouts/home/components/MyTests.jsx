import React, { useEffect } from 'react';

// image
import coverSm from 'assets/homePage/image 3081.png';

export default function MyTests() {
  return (
    <main className='container relative mx-auto p-3'>
      <h2 className='items-center py-0 mt-24 py-2 text-3xl'>Mening testlarim</h2>

      <div className='mt-4 relative bg-white flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0'>
        <div className='items-center py-0 shadow-lg py-2'>
          <div className='container relative mx-auto flex flex-wrap justify-between items-center p-3'>
            <div className='flex'>
              <img src={coverSm} alt='2' />
              <div className='mx-4'>
                <h2 className='text-2xl mb-2'>Fizika fanidan test topshiriqlari</h2>
                <p className='text-blueGray-400 text-xs mb-2'>savollar soni 30 ta</p>
                <p className='text-blueGray-400 text-xs'>davomiyligi 180 minut</p>
              </div>
            </div>

            <div style={{ width: '70px' }} className='flex flex-col mx-4'>
              <h2 className='text-base mb-2'>Status</h2>
              <p className='text-emerald-500 text-sm mb-2'>Aktiv</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4 relative bg-white flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0'>
        <div className='items-center py-0 shadow-lg py-2'>
          <div className='container relative mx-auto flex flex-wrap justify-between items-center p-3'>
            <div className='flex'>
              <img src={coverSm} alt='2' />
              <div className='mx-4'>
                <h2 className='text-2xl mb-2'>Fizika fanidan test topshiriqlari</h2>
                <p className='text-blueGray-400 text-xs mb-2'>savollar soni 30 ta</p>
                <p className='text-blueGray-400 text-xs'>davomiyligi 180 minut</p>
              </div>
            </div>

            <div style={{ width: '70px' }} className='flex flex-col mx-4'>
              <h2 className='text-base mb-2'>Status</h2>
              <p className='text-lightBlue-600 text-sm mb-2'>Sotib olingan</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4 relative bg-white flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0'>
        <div className='items-center py-0 shadow-lg py-2'>
          <div className='container relative mx-auto flex flex-wrap justify-between items-center p-3'>
            <div className='flex'>
              <img src={coverSm} alt='2' />
              <div className='mx-4'>
                <h2 className='text-2xl mb-2'>Fizika fanidan test topshiriqlari</h2>
                <p className='text-blueGray-400 text-xs mb-2'>savollar soni 30 ta</p>
                <p className='text-blueGray-400 text-xs'>davomiyligi 180 minut</p>
              </div>
            </div>

            <div style={{ width: '70px' }} className='flex flex-col mx-4'>
              <h2 className='text-base mb-2'>Status</h2>
              <p className='text-blueGray-500 text-sm mb-2'>Yechib bo`lingan</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
