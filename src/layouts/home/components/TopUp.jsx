import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { sendCardDetails, confirmationPayment } from 'store/thunk';

import humo from 'assets/homePage/Humo-01 1.png';
import uzcard from 'assets/homePage/Uzcard-01 1.png';

export default function TopUp() {
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [summa, setSumma] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const handleSendCardDetails = async () => {
    const data = {
      amount: summa,
      card: cardNumber.trim(),
      expireDate: `${expDate.slice(3, 5)}${expDate.slice(0, 2)}`,
    };

    try {
      const result = await sendCardDetails(data);
      toast.info(result.data.message);
      setConfirmation(true);
    } catch (ex) {
      toast.error(ex.response.data.message);
    }
  };

  const handleConfirmation = () => {
    confirmationPayment(confirmationCode);
  };

  return (
    <div className='relative flex flex-col min-w-0 break-words w-full min-h-screen mt-24 shadow-lg rounded-lg border-0'>
      <div className='flex-auto px-10 lg:px-10 py-10'>
        <div className='flex items-center justify-center'>
          <h6 className='text-lg font-bold uppercase'>Hisobni to`ldirish</h6>
        </div>

        <div className='flex flex-wrap justify-center mt-6'>
          <div className='relative flex flex-col py-6 px-10 min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg p-2'>
            <div className='flex flex-col'>
              <div className='relative px-2'>
                <label className='block text-xs'>Karta raqami</label>
                <InputMask
                  mask='9999 9999 9999 9999'
                  type='text'
                  disabled={confirmation}
                  className='border px-3'
                  onChange={e => setCardNumber(e.target.value.replace(/\s/g, ''))}
                />
              </div>
              <div className='relative px-2 mt-4'>
                <label className='block text-xs'>Amal qilish muddati</label>
                <InputMask
                  mask='99/99'
                  disabled={confirmation}
                  alwaysShowMask='true'
                  className='border px-3'
                  onChange={e => setExpDate(e.target.value)}
                />
              </div>
              <div className='relative px-2 mt-4'>
                <label className='block text-xs'>Summa</label>
                <InputMask
                  mask='999999'
                  maskChar=''
                  disabled={confirmation}
                  className='border px-3'
                  onChange={e => setSumma(e.target.value)}
                />
              </div>
              <div className='flex items-center relative w-full max-w-full py-4 px-2'>
                <div className='w-full md:w-6/12 '>
                  <p className='text-sm font-bold'>Summa</p>
                  <p className='text-xs'>{summa} so`m</p>
                </div>
                <div className='flex items-center md:w-6/12 relative mt-4'>
                  <img style={{ height: '40px' }} className='md:w-6/12' src={humo} alt='1' />
                  <img style={{ height: '40px' }} className='md:w-6/12' src={uzcard} alt='1' />
                </div>
              </div>

              {confirmation ? (
                <div className='relative px-2'>
                  <label className='block text-xs'>Tasdiqlash kodi</label>
                  <input
                    className='border px-2'
                    onChange={e => setConfirmationCode(e.target.value)}
                  />
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
        </div>
      </div>
    </div>
  );
}
