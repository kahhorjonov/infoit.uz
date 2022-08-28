import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// image
import coverSm from 'assets/homePage/image 3081.png';

import { useDispatch, useSelector } from 'react-redux';
import { getPlanningTestById } from 'store/thunk';

// component
import CardPayment from '../Cards/CardPayment';

export default function Payment() {
  const dispatch = useDispatch();
  const {
    planningTests: { currentTestData },
  } = useSelector(store => store);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPlanningTestById(id));
  }, [dispatch, id]);

  return (
    <div className='relative flex flex-col min-w-0 break-words w-full min-h-screen mb-6 shadow-lg rounded-lg border-0'>
      <div className='items-center mt-20 shadow-lg py-2'>
        <div className='container relative mx-auto flex items-center p-3'>
          <img src={coverSm} alt='2' />
          <div className='flex flex-col mx-4'>
            <h2 className='text-2xl'>{currentTestData?.name}</h2>
            <h2 className='text-sm'>{currentTestData?.category?.nameUz}</h2>
            <p className='text-blueGray-400 text-sm'>
              {currentTestData?.category?.children?.nameUz}
            </p>
          </div>
        </div>
      </div>
      <div className='flex-auto px-10 lg:px-10 py-10'>
        <div className='flex items-center justify-center'>
          <h6 className='text-lg font-bold uppercase'>To`lovni amalga oshirish</h6>
        </div>

        <div className='flex flex-wrap justify-center mt-6'>
          <CardPayment />
        </div>
      </div>
    </div>
  );
}
