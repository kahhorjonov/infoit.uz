import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTests } from 'store/thunk';

import cover from 'assets/homePage/Testcover.png';

import { MenuItem, Select } from '@mui/material';
import Spiner from 'components/Loader/Spiner';

const seconToMinut = second => second / 1000 / 60;

export default function MyTests() {
  const dispatch = useDispatch();
  const { userTests } = useSelector(store => store);

  const [solve, setSolve] = useState('false');

  const navigate = useNavigate();

  const startTest = id => {
    navigate(`/quiz/${id}`);
  };

  useEffect(() => {
    dispatch(getUserTests(solve));
  }, [dispatch, solve]);

  return (
    <main className='container relative mx-auto p-3'>
      <div className='flex items-center justify-between mt-24'>
        <h2 className='items-center py-0 py-2 text-3xl'>Mening testlarim</h2>
        <Select
          value={solve}
          variant='standard'
          sx={{ width: '200px', height: '40px', fontSize: '1.2rem' }}
          onChange={e => setSolve(e.target.value)}
        >
          <MenuItem value='false'>Sotib olingan</MenuItem>
          <MenuItem value='true'>Yechib bo`lingan</MenuItem>
        </Select>
      </div>

      {userTests?.isLoading ? (
        <Spiner />
      ) : (
        userTests?.tests?.map(test => (
          <div
            key={test.id}
            className='mt-4 relative bg-white flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0'
          >
            <div className='items-center py-0 shadow-lg py-2'>
              <div className='container relative mx-auto flex flex-wrap justify-between items-center p-3'>
                <div className='flex'>
                  <img
                    style={{ maxHeight: '110px' }}
                    src={test?.photo?.link || cover}
                    alt={test?.photo?.id || '...'}
                  />
                  <div className='mx-4'>
                    <h2
                      onClick={() => startTest(test?.id)}
                      className='text-2xl mb-4 cursor-pointer hover:underline'
                    >
                      {test?.name}
                    </h2>
                    <p className='text-blueGray-400 text-xs mb-2'>
                      Savollar soni {test?.questionsCount} ta
                    </p>
                    <p className='text-blueGray-400 text-xs'>
                      Davomiyligi {seconToMinut(test?.durationTimeInMinutes)} minut
                    </p>
                  </div>
                </div>

                <div style={{ width: '180px' }} className='flex flex-col mx-4 text-right'>
                  <h2 className='text-base mb-2'>Status</h2>
                  <p
                    className={`${
                      solve === 'false' ? 'text-emerald-500' : 'text-blueGray-500'
                    } text-sm mb-2`}
                  >
                    {solve === 'false' ? 'Sotib olingan' : 'Yechib bo`lingan'}
                  </p>
                  <p
                    onClick={() => navigate(`/results/${test?.id}`)}
                    className='cursor-pointer hover:underline text-blueGray-500 text-xs mb-2'
                  >
                    Boshqalarni natijasini ko`rish
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </main>
  );
}