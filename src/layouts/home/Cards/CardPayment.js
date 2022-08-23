import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

import humo from 'assets/homePage/Humo-01 1.png';
import uzcard from 'assets/homePage/Uzcard-01 1.png';

export default function CardTest({ planningTests }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className='relative lg:w-12/12 flex flex-col px-4 min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg p-2'>
      <div className='flex-auto'>
        <div className='flex flex-col'>
          <div className='w-full relative flex max-w-full'>
            <div className='relative lg:w-8/12 sm:w-10/12 pr-2'>
              <label className='text-xs'>Karta raqami</label>
              <InputMask
                mask='9999 9999 9999 9999'
                type='text'
                className='w-full border'
                onChange={e => setCardNumber(e.target.value)}
              />
            </div>
            <div className='relative lg:w-4/12 sm:w-2/12'>
              <label className='text-xs'>Amal qilish muddati</label>
              <InputMask
                mask='99/99'
                alwaysShowMask='true'
                className='w-full border'
                onChange={e => setExpDate(e.target.value)}
              />
            </div>
          </div>
          <div className='relative max-w-full'>
            <div className='sm:w-12/12'>
              <label className='text-xs'>Kartaga ulangan telefon raqam</label>
              <InputMask
                mask='(99) 999 99 99'
                alwaysShowMask='true'
                className='w-full border'
                onChange={e => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className='flex relative w-full max-w-full py-4'>
            <div className='w-full'>
              <p className='text-sm font-bold'>Summa</p>
              <p className='text-xs'>{planningTests?.currentTestData?.price} so`m</p>
            </div>
            <div>
              <img src={humo} alt='1' />
            </div>
            <div>
              <img src={uzcard} alt='1' />
            </div>
          </div>
          <p className='w-full text-sm text-blueGray-400 mt-4 flex justify-center items-center'>
            <button
              type='button'
              className='px-2 py-4 bg-lightBlue-600 text-white focus:outline-none rounded'
            >
              To`lovni amalga oshirish
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

CardTest.propTypes = {
  planningTests: PropTypes.object,
};
