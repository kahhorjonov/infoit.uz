import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getStatisticsTestId } from 'store/thunk';

import PaginationTable from 'components/Pagination/Pagination';
import Spiner from 'components/Loader/Spiner';

// icons
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function OthersResult() {
  const dispatch = useDispatch();
  const params = useParams();

  const {
    statisticsData: { isLoading, pagination, count, usersSolved, testStatisticsTestIdData },
  } = useSelector(store => store);

  const handleChangePage = pageNumber => {
    dispatch(getStatisticsTestId({ pagination: { ...pagination, pageNumber }, id: params?.id }));
  };

  const handleChangePageSize = pageSize => {
    dispatch(
      getStatisticsTestId({
        pagination: { ...pagination, pageSize },
        id: params?.id,
      }),
    );
  };

  useEffect(() => {
    dispatch(getStatisticsTestId({ pagination, id: params?.id }));
  }, []);

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
          <span className='text-lightBlue-600 text-2xl'>{usersSolved}</span> ta foydalanuvchi shu
          testni yechgan
        </h2>
      </div>

      <main className='container relative mx-auto p-3'>
        {isLoading ? (
          <Spiner />
        ) : (
          testStatisticsTestIdData?.map(user => (
            <div
              key={user.id}
              className='mt-4 relative bg-white flex flex-col min-w-0 break-words w-full rounded-lg border-0'
            >
              <div className='items-center py-0 shadow-lg py-2 rounded-lg'>
                <div className='container relative mx-auto flex flex-wrap justify-between items-center p-3'>
                  <div className='flex'>
                    <div className='mx-4'>
                      <h2 className='text-xl mb-2'>{`${user?.firstname} ${user?.lastname}`}</h2>
                      <p className='text-blueGray-400 text-xs mb-2'>Davomiyligi: 1 soat 45 minut</p>
                    </div>
                  </div>

                  <div style={{ width: '70px' }} className='flex flex-col mx-4'>
                    <h2 className='text-base mb-2 text-lightBlue-600'>{`${user?.correctAnswers}/${user?.questions}`}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        <PaginationTable
          dataCount={count}
          pageNumber={pagination.pageNumber}
          pageSize={pagination.pageSize}
          onChangeCurrPage={page => handleChangePage(page)}
          onChangePageSize={pageSize => handleChangePageSize(pageSize)}
        />
      </main>
    </div>
  );
}
