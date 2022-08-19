import React from 'react';
import PropTypes from 'prop-types';

export default function CardTest({ statTitle }) {
  return (
    <div className='relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg p-2'>
      <div className='flex-auto p-4'>
        <div className='flex flex-wrap'>
          <div className='relative w-full pr-4 max-w-full flex-grow flex-1'>
            <input />
            <input />
          </div>
        </div>

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
  // statDescripiron: 'Fan nomi',
  // statSubjectTitle: 'Fizika',
  // statDate: '20.08.2022',
  // statTime: '20:35',
  // statPrice: '45000',
};

CardTest.propTypes = {
  statTitle: PropTypes.string,
  // statDescripiron: PropTypes.string,
  // statSubjectTitle: PropTypes.string,
  // statDate: PropTypes.string,
  // statTime: PropTypes.string,
  // statPrice: PropTypes.string,
};
