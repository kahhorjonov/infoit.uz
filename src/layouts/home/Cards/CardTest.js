import React from 'react';
import PropTypes from 'prop-types';

// icons
import AccessTimeFilled from '@mui/icons-material/AccessTimeFilled';

export default function CardTest({
  statTitle,
  statSubjectTitle,
  statDescripiron,
  statDate,
  statTime,
  statPrice,
}) {
  return (
    <div className='relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg p-2'>
      <div className='flex-auto p-4'>
        <div className='flex flex-wrap'>
          <div className='relative w-full pr-4 max-w-full flex-grow flex-1'>
            <span className='font-semibold text-lg text-blueGray-700'>{statTitle}</span>
          </div>
        </div>
        <span className='text-sm whitespace-nowrap'>{statDescripiron}</span>
        <p className='text-base whitespace-nowrap font-bold'>{statSubjectTitle}</p>
        <p className='mt-4 text-base flex items-center text-lightBlue-600'>
          <AccessTimeFilled />
          <span className='text-sm ml-1'>Davomiyligi</span>
        </p>
        <p>
          <span className='text-sm whitespace-nowrap mr-2'>{statDate}</span>
          <span className='text-sm whitespace-nowrap font-bold'>{statTime}</span>
        </p>
        <p>
          <span className='text-base whitespace-nowrap'>Narxi:</span>
        </p>
        <p>
          <span className='whitespace-nowrap font-bold'>{statPrice} so`m</span>
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
          >
            Test yechishni boshlash
          </button>
        </p>
      </div>
    </div>
  );
}

CardTest.defaultProps = {
  statTitle: 'Prezident maktablari uchun',
  statDescripiron: 'Fan nomi',
  statSubjectTitle: 'Fizika',
  statDate: '20.08.2022',
  statTime: '20:35',
  statPrice: '45000',
};

CardTest.propTypes = {
  statTitle: PropTypes.string,
  statDescripiron: PropTypes.string,
  statSubjectTitle: PropTypes.string,
  statDate: PropTypes.string,
  statTime: PropTypes.string,
  statPrice: PropTypes.string,
};
