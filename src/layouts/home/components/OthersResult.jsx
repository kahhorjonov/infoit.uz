import React, { useEffect } from 'react';

// icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function OthersResult() {
  return (
    <div className='min-h-screen mt-24'>
      <div className='items-center text-2xl'>
        <h2 className='container mx-auto p-3 items-center py-4 text-xl'>
          <KeyboardBackspaceIcon fontSize='large' />
          <span className=''> Ortga qaytish</span>
        </h2>
      </div>

      <div className='bg-white'>
        <h2 className='container mx-auto p-3 items-center py-4 text-xl'>
          <span className='text-lightBlue-600 text-2xl'>50 </span> ta foydalanuvchi shu testni
          yechgan
        </h2>
      </div>

      <main className='container relative mx-auto p-3'>
        <div className='mt-4 relative bg-white flex flex-col min-w-0 break-words w-full rounded-lg border-0'>
          <div className='items-center py-0 shadow-lg py-2 rounded-lg'>
            <div className='container relative mx-auto flex flex-wrap justify-between items-center p-3'>
              <div className='flex'>
                <div className='mx-4'>
                  <h2 className='text-xl mb-2'>Baxtiyorov Dilshod Farxod o`g`li</h2>
                  <p className='text-blueGray-400 text-xs mb-2'>Davomiyligi: 1 soat 45 minut</p>
                </div>
              </div>

              <div style={{ width: '70px' }} className='flex flex-col mx-4'>
                <h2 className='text-base mb-2 text-lightBlue-600'>38/50</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-4 relative bg-white flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0'>
          <div className='items-center py-0 shadow-lg py-2 rounded-lg'>
            <div className='container relative mx-auto flex flex-wrap justify-between items-center p-3'>
              <div className='flex'>
                <div className='mx-4'>
                  <h2 className='text-xl mb-2'>Baxtiyorov Dilshod Farxod o`g`li</h2>
                  <p className='text-blueGray-400 text-xs mb-2'>Davomiyligi: 1 soat 45 minut</p>
                </div>
              </div>

              <div style={{ width: '70px' }} className='flex flex-col mx-4'>
                <h2 className='text-base mb-2 text-lightBlue-600'>38/50</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
