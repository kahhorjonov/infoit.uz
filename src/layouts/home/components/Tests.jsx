import React, { useEffect } from 'react';
import DropDown from 'components/DropDown/DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getPlanningTestForUser } from 'store/thunk';

// components
import Spiner from 'components/Loader/Spiner';
import CardTest from '../Cards/CardTest';

export default function Tests() {
  const dispatch = useDispatch();
  const {
    planningTests: { forUser, isLoading },
    category: { currentCategory },
  } = useSelector(store => store);

  useEffect(() => {
    dispatch(
      getPlanningTestForUser({
        categoryId: currentCategory?.id || '',
        pagination: { pageNumber: 1, pageSize: 6 },
      }),
    );
  }, [currentCategory]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0'>
      <div className='flex-auto px-10 lg:px-10 py-10 pt-0'>
        <div className='flex items-center justify-between mt-24'>
          <h6 className='text-lg font-bold uppercase'>Testlar</h6>
          <DropDown color='dark' />
        </div>

        {/* <div className='w-full relative'>
          <ul className='w-full flex flex-wrap'>
            <li className='mx-2 underline cursor-pointer'>Barcha testlar</li>
            <li className='mx-2 text-blueGray-400 cursor-pointer'>Matematika</li>
            <li className='mx-2 text-blueGray-400 cursor-pointer'>Informatika</li>
            <li className='mx-2 text-blueGray-400 cursor-pointer'>Fizika</li>
            <li className='mx-2 text-blueGray-400 cursor-pointer'>Tibbiyot</li>
            <li className='mx-2 text-blueGray-400 cursor-pointer'>Geografiya</li>
          </ul>
        </div> */}

        {isLoading ? (
          <Spiner />
        ) : (
          <div className='flex flex-wrap mt-6'>
            {forUser?.map(test => (
              <CardTest key={test.id} {...test} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
