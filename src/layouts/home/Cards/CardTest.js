import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate, useParams } from 'react-router-dom';

// icons
import AccessTimeFilled from '@mui/icons-material/AccessTimeFilled';

export default function CardTest({
  id,
  name,
  category,
  startVisionTestDate,
  durationTimeInMinutes,
}) {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-2'>
      <div className='relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg p-2'>
        <div className='flex-auto p-4'>
          <div className='flex flex-wrap'>
            <div className='relative w-full pr-4 max-w-full flex-grow flex-1'>
              <span className='font-semibold text-lg text-blueGray-700'>{name}</span>
            </div>
          </div>
          <span className='text-sm whitespace-nowrap'>Kategoriya</span>
          <p className='text-base whitespace-nowrap font-bold'>{category.nameUz}</p>
          <p className='mt-4 text-base flex items-center text-lightBlue-600'>
            <AccessTimeFilled />
            <span className='text-sm ml-1'>Davomiyligi</span>
          </p>
          <p>
            <span className='text-sm whitespace-nowrap mr-2'>
              {new Date(startVisionTestDate).toLocaleDateString()}
            </span>
            <span className='text-sm whitespace-nowrap font-bold'>
              {new Date(durationTimeInMinutes).toLocaleTimeString()}
            </span>
          </p>
          <p>
            <span className='text-base whitespace-nowrap'>Narxi:</span>
          </p>
          <p>
            <span className='whitespace-nowrap font-bold'>45000 so`m</span>
          </p>

          <p className='w-full text-blueGray-400 mt-4 flex justify-between items-center'>
            <button
              type='button'
              className='w-full bg-lightBlue-600'
              style={{
                outline: 'none',
                padding: '0.4rem 0.6rem',
                color: 'white',
                borderRadius: '6px',
              }}
              onClick={() => navigate(`/test/${id}`)}
            >
              Test yechishni boshlash
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

CardTest.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  category: PropTypes.object,
  startVisionTestDate: PropTypes.number,
  durationTimeInMinutes: PropTypes.number,
};
