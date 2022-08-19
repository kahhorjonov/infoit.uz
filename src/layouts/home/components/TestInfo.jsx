import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlanningTest } from 'store/thunk';
import cover from 'assets/homePage/Testcover.png';

// Components

import CardTestInfo from '../Cards/CardTestInfo';
import FooterHome from './FooterHome';

export default function TestInfo() {
  const dispatch = useDispatch();
  const { planningTests } = useSelector(store => store);
  const { id } = useParams();

  const currentTestData = planningTests?.planning?.filter(test => test.id === id);

  console.log(currentTestData);

  useEffect(() => {
    dispatch(getPlanningTest({ categoryId: '', pagination: { pageNumber: 1, pageSize: '' } }));
  }, []);

  return (
    <main>
      <div className='relative pt-16 pb-32 flex content-center items-center justify-center bg-white min-h-screen-75'>
        <div className='container relative mx-auto'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-6 ml-auto mr-auto text-center'>
              <img alt='...' className='rounded-xl ml-auto mr-auto shadow-lg right' src={cover} />
            </div>

            <div className='w-full lg:w-6/12 xl:w-4/12 px-4 ml-auto mr-auto'>
              <CardTestInfo />
            </div>
          </div>
        </div>
      </div>

      {/* section tests */}

      <section className='relative py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='items-center flex flex-wrap px-4 py-2'>
            <h2 className='font-bold text-2xl mb-4'>Description</h2>
            <p className='text-blueGray-400 text-lg'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum modi quasi consequatur
              rerum doloremque odio cum nobis ut dicta recusandae tempora aliquam soluta sapiente,
              consectetur impedit voluptatem rem veritatis magni ipsa natus distinctio,
              exercitationem vero!
            </p>

            <br />

            <p className='text-blueGray-400 text-lg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem vitae reiciendis est
              nemo ipsam perspiciatis dignissimos! Ut, laudantium nobis dicta, sint porro eos a qui
              unde exercitationem optio quia dignissimos officiis cumque aut similique magnam nam
              nesciunt ex sequi reprehenderit. Error, dolores eveniet? Tenetur placeat magni
              distinctio officiis sunt et, voluptatibus quaerat ex non vel aperiam quam, ducimus,
              tempora cumque!
            </p>
          </div>
        </div>
      </section>

      <section className='relative py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-2'>
              <CardTestInfo />
            </div>

            <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-2'>
              <CardTestInfo />
            </div>

            <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-2'>
              <CardTestInfo />
            </div>

            <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-2'>
              <CardTestInfo />
            </div>

            <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-2'>
              <CardTestInfo />
            </div>
          </div>
        </div>
      </section>

      <FooterHome />
    </main>
  );
}
