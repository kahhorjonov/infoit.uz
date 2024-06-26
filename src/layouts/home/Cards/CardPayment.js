import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { sendCardDetails, confirmationPayment, buyTest } from 'store/thunk';

import humo from 'assets/homePage/Humo-01 1.png';
import uzcard from 'assets/homePage/Uzcard-01 1.png';

export default function CardTest() {
  const {
    planningTests: { currentTestData },
  } = useSelector(store => store);
  const params = useParams();

  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const handleSendCardDetails = async () => {
    const data = {
      amount: currentTestData?.price,
      card: cardNumber.trim(),
      expireDate: `${expDate.slice(3, 5)}${expDate.slice(0, 2)}`,
    };

    try {
      await sendCardDetails(data);
      toast.info('Telefon raqamga borgan sms kodni kiriting');
      setConfirmation(true);
    } catch (ex) {
      toast.error(ex.response.data.message);
      setConfirmation(true);
    }
  };

  const handleConfirmation = async () => {
    try {
      confirmationPayment(confirmationCode);
      buyTest(params?.id);
    } catch (error) {
      toast.error("Tasdiqlash kodi noto'g'ri kiritilgan");
    }
  };

  return (
    <div className='relative flex flex-col py-6 px-10 min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg p-2'>
      <div className='flex flex-col'>
        <div className='relative px-2'>
          <label className='block text-xs'>Karta raqami</label>
          <InputMask
            mask='9999 9999 9999 9999'
            type='text'
            className='border px-2'
            disabled={confirmation}
            onChange={e => setCardNumber(e.target.value).replace(/\s/g, '')}
          />
        </div>
        <div className='relative px-2 mt-4'>
          <label className='block text-xs'>Amal qilish muddati</label>
          <InputMask
            mask='99/99'
            alwaysShowMask='true'
            className='border px-2'
            disabled={confirmation}
            onChange={e => setExpDate(e.target.value)}
          />
        </div>
        <div className='flex items-center relative w-full max-w-full py-4 px-2'>
          <div className='w-full md:w-6/12 '>
            <p className='text-sm font-bold'>Summa</p>
            <p className='text-xs'>{currentTestData?.price} so`m</p>
          </div>
          <div className='flex items-center md:w-6/12 relative mt-4'>
            <img style={{ height: '40px' }} className='md:w-6/12' src={humo} alt='1' />
            <img style={{ height: '40px' }} className='md:w-6/12' src={uzcard} alt='1' />
          </div>
        </div>

        {confirmation ? (
          <div className='relative px-2'>
            <label className='block text-xs'>Tasdiqlash kodi</label>
            <input className='border px-2' onChange={e => setConfirmationCode(e.target.value)} />
          </div>
        ) : null}

        {confirmation ? (
          <p className='w-full text-sm text-blueGray-400 mt-4 flex justify-center items-center'>
            <button
              type='button'
              onClick={handleConfirmation}
              className='p-3 bg-blue-900 text-white focus:outline-none rounded'
            >
              To`lovni amalga oshirish
            </button>
          </p>
        ) : (
          <p className='w-full text-sm text-blueGray-400 mt-4 flex justify-center items-center'>
            <button
              type='button'
              onClick={handleSendCardDetails}
              className='p-3 bg-blue-900 text-white focus:outline-none rounded'
            >
              Sms kodni olish
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
