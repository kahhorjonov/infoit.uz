import React from 'react';
import { Link } from 'react-router-dom';

// images
import teacher from 'assets/homePage/teacher.png';

// Icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// components

export default function CardForTeachers() {
  return (
    <div className='relative flex flex-row min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'>
      <div className='w-full rounded-y-l lg:w-6/12 bg-white mb-0 px-4 py-6'>
        <div className='lg:w-8/12 p-2'>
          <h1 className='uppercase mb-4 font-bold'>O`qituvchilar uchun</h1>
          <span className='text-left text-sm'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit temporibus labore
            perferendis ea laudantium, nisi, sed exercitationem magni facere reprehenderit illum! Et
            excepturi doloremque maxime placeat. Exercitationem, corporis non. Voluptatum.
          </span>

          <Link
            className='text-left my-4 bg-blue-900 text-white rounded py-2 px-2 text-sm'
            to='/login'
          >
            <button
              className='mt-8 bg-transparent uppercase outline-none focus:outline-none ease-linear transition-all duration-150'
              type='button'
            >
              <span>
                O`qituvchilar uchun testlar &nbsp;
                <ArrowRightAltIcon fontSize='small' />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className='w-full rounded-y-r lg:w-6/12 bg-white mb-0 px-4 py-6'>
        <div className='px-4 ml-auto mr-auto text-center'>
          <img
            src={teacher}
            alt='...'
            className='w-50 h-50 rounded-2xl ml-auto mr-auto shadow-lg'
          />
        </div>
      </div>
    </div>
  );
}
