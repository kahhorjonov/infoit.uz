import React, { useEffect, useState } from 'react';

import { Icon } from '@mui/material';
import Spiner from 'components/Loader/Spiner';
// image
import coverSm from 'assets/images/user.png';
import { useDispatch, useSelector } from 'react-redux';
import { getMe, updateMe } from 'store/thunk';

export default function Profile() {
  const {
    profileData: { isLoading, profileData },
  } = useSelector(store => store);

  const dispatch = useDispatch();

  const [profile, setProfile] = useState({ ...profileData });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeInputs = (name, value) => {
    setProfile({ ...profile, [name]: value });
  };

  const handleUpdateProfile = () => {
    updateMe(profile);
  };

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    setProfile({ ...profileData });
  }, [profileData]);

  return (
    <main className='container relative mx-auto p-3'>
      <div className='mt-24 flex justify-between items-center'>
        <h2 className='items-center py-2 text-3xl'>Profil</h2>
        <div className='flex'>
          <span className='text-base px-3'>{profile?.balance} so`m</span>
          <Icon
            fontSize='medium'
            className='cursor-pointer'
            onClick={() => {
              setIsDisabled(!isDisabled);
              isDisabled ? null : handleUpdateProfile();
            }}
          >
            {isDisabled ? 'edit' : 'check'}
          </Icon>
        </div>
      </div>

      {isLoading ? (
        <Spiner />
      ) : (
        <div className='mt-4 relative bg-white flex min-w-0 break-words w-full mb-6 rounded-lg border-0'>
          <div className='container w-full relative flex mx-auto items-center p-3 px-6'>
            <div className='md:w-4/12'>
              <img style={{ width: '80%', height: '80%' }} src={coverSm} alt='2' />
            </div>
            <div className='md:w-8/12'>
              <div className='flex flex-col mx-4'>
                <label className='text-base mb-3'>Ism</label>
                <input
                  disabled={isDisabled}
                  type='text'
                  className='text-sm text-blueGray-500'
                  value={profile?.firstName || ''}
                  // onChange={e => setProfile({ ...profile, firstName: e.target.value })}
                  onChange={e => handleChangeInputs('firstName', e.target.value)}
                />
              </div>

              <hr className={`${!isDisabled ? 'bg-lightBlue-900' : 'bg-lightBlue-400'}`} />

              <div className='flex flex-col mt-12 mx-4'>
                <label className='text-base mb-3'>Familiya</label>
                <input
                  disabled={isDisabled}
                  type='text'
                  className='outlined text-sm text-blueGray-500'
                  value={profile?.lastName || ''}
                  onChange={e => handleChangeInputs('lastName', e.target.value)}
                />
              </div>

              <hr />

              <div className='flex flex-col mt-12 mx-4'>
                <label className='text-base mb-3'>Telefon raqam</label>
                <input
                  disabled={isDisabled}
                  type='text'
                  className='text-sm text-blueGray-500'
                  value={profile?.phoneNumber || ''}
                  onChange={e => handleChangeInputs('phoneNumber', e.target.value)}
                />
              </div>

              <hr />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
