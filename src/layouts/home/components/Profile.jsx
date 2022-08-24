import { Link } from 'react-router-dom';
import hand from 'assets/homePage/hand&pen.png';

// Icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// Components
import CardWhy from '../Cards/CardWhy';
import CardForTeachers from '../Cards/CardForTeachers';
import FooterHome from './FooterHome';
import Tests from './Tests';

export default function Profile() {
  return (
    <main>
      <div
        id='main'
        className='relative pt-16 pb-32 flex content-center items-center justify-center bg-white min-h-screen-75'
      >
        <div className='container relative mx-auto'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto'>
              <div className='pr-12 lg:w-8/12'>
                <h1 className='text-left font-semibold text-4xl'>
                  INFO <span className='text-blue-900'>IT</span>
                </h1>

                <p className='text-left mt-4 mb-12 text-lg text-blueGray-700 mb-4'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia in aut, dolorum
                  perferendis saepe deleniti dolore fugiat aliquid architecto alias?
                </p>

                <Link
                  className='text-left  bg-blue-900 text-white rounded px-6 py-4 text-sm'
                  to='/login'
                >
                  <button
                    className='bg-transparent uppercase outline-none focus:outline-none ease-linear transition-all duration-150'
                    type='button'
                  >
                    <span>
                      Test yechishni boshlash &nbsp;
                      <ArrowRightAltIcon fontSize='small' />
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className='lg:w-6/12 px-4 py-6 ml-auto mr-auto text-center'>
              <img
                style={{ width: '708px' }}
                alt='...'
                className='rounded-xl ml-auto mr-auto shadow-lg right'
                src={hand}
                // src='https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                // src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* section tests */}

      <section id='tests' className='relative py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='items-center flex flex-wrap'>
            <Tests />
          </div>
        </div>
      </section>

      {/* section carts */}

      <section id='about-us' className='relative py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='items-center flex flex-wrap'>
            <CardWhy />
          </div>
        </div>
      </section>

      <section id='for-teachers' className='relative py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='items-center flex flex-wrap'>
            <CardForTeachers />
          </div>
        </div>
      </section>

      <FooterHome />
    </main>
  );
}
