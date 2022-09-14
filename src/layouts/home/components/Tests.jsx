import React, { useEffect, useState } from 'react';
import DropDown from 'components/DropDown/DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getPlanningTestForUser } from 'store/thunk';

// components
import MDButton from 'components/MDButton';
import Spiner from 'components/Loader/Spiner';
import CardTest from '../Cards/CardTest';

export default function Tests() {
  const dispatch = useDispatch();
  const {
    planningTests: { forUser, isLoading, elementsCount },
    category: { currentCategory },
  } = useSelector(store => store);

  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 6,
  });

  useEffect(() => {
    dispatch(
      getPlanningTestForUser({
        pagination,
        categoryId: currentCategory?.id || '',
      }),
    );
  }, [currentCategory, pagination]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className='relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0'>
      <div className='flex-auto py-10 pt-0'>
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
          <div className='flex flex-wrap my-6'>
            {forUser?.map(test => (
              <CardTest key={test.id} {...test} />
            ))}
          </div>
        )}
        <MDButton
          disabled={pagination?.pageSize <= elementsCount ? false : true}
          type='button'
          variant='outlined'
          color='info'
          fullWidth
          onClick={() =>
            pagination?.pageSize <= elementsCount &&
            setPagination({ ...pagination, pageSize: pagination.pageSize + 3 })
          }
        >
          Yana yuklash...
        </MDButton>
      </div>
    </div>
  );
}
