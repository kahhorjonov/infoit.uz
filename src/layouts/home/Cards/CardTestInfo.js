import React from 'react';
import PropTypes from 'prop-types';

// icons
import AccessTimeFilled from '@mui/icons-material/AccessTimeFilled';

export default function CardTestInfo({
  statTitle,
  statSubjectTitle,
  statDescripiron,
  statStartDate,
  statEndDate,
  statStartTime,
  statEndTime,
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
          <span className='text-sm ml-1'>Boshlanish vaqti</span>
        </p>
        <p>
          <span className='text-sm whitespace-nowrap mr-2'>{statStartDate}</span>
          <span className='text-sm whitespace-nowrap font-bold'>{statStartTime}</span>
        </p>

        <p className='text-base flex items-center text-red-500'>
          <AccessTimeFilled />
          <span className='text-sm ml-1'>Tugash vaqti</span>
        </p>
        <p>
          <span className='text-sm whitespace-nowrap mr-2'>{statEndDate}</span>
          <span className='text-sm whitespace-nowrap font-bold'>{statEndTime}</span>
        </p>

        <p className='mt-4'>
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
            Sotib olish
          </button>
        </p>
      </div>
    </div>
  );
}

CardTestInfo.defaultProps = {
  statTitle: 'Prezident maktablari uchun',
  statDescripiron: 'Fan nomi',
  statSubjectTitle: 'Fizika',
  statStartDate: '20.08.2022',
  statEndDate: '21.08.2022',
  statStartTime: '20:35',
  statEndTime: '20:35',
  statPrice: '45000',
};

CardTestInfo.propTypes = {
  statTitle: PropTypes.string,
  statDescripiron: PropTypes.string,
  statSubjectTitle: PropTypes.string,
  statStartDate: PropTypes.string,
  statEndDate: PropTypes.string,
  statStartTime: PropTypes.string,
  statEndTime: PropTypes.string,
  statPrice: PropTypes.string,
};
