import React, { useEffect } from 'react';

// image
import coverSm from 'assets/homePage/image 3081.png';

// import { useDispatch, useSelector } from 'react-redux';
// import { getCategories, getPlanningTest } from 'store/thunk';

// components
import CardPayment from '../Cards/CardPayment';

export default function Payment() {
  //   const dispatch = useDispatch();
  //   const { planningTests, category } = useSelector(store => store);

  //   useEffect(() => {
  //     dispatch(
  //       getPlanningTest({
  //         categoryId: category?.currentCategory?.id || '',
  //         pagination: { pageNumber: 1, pageSize: 6 },
  //       }),
  //     );
  //   }, [dispatch, category?.currentCategory]);

  //   useEffect(() => {
  //     dispatch(getCategories());
  //   }, []);

  return (
    <div className='relative flex flex-col min-w-0 break-words w-full min-h-screen mb-6 shadow-lg rounded-lg border-0'>
      <div className='items-center py-0 mt-16 shadow-lg py-2'>
        <div className='container relative mx-auto flex items-center p-3'>
          <img src={coverSm} alt='2' />
          <div className='flex flex-col mx-4'>
            <h2 className='text-2xl'>Fizika fanidan testlar to`plami</h2>
            <p className='text-blueGray-400 text-sm'>Fizika fani</p>
          </div>
        </div>
      </div>
      <div className='flex-auto px-10 lg:px-10 py-10 pt-0 mt-10'>
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
