import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlanningTest, getPlanningTestById } from 'store/thunk';
import infoit_bg from 'assets/images/infoit_bg.jpg';
import default_image from 'assets/homePage/default_test.jpg';

// Components

import CardTestInfo from '../Cards/CardTestInfo';
import FooterHome from './FooterHome';

export default function TestInfo() {
  const dispatch = useDispatch();
  const {
    category,
    planningTests: { planning, currentTestData },
  } = useSelector(store => store);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPlanningTestById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(
      getPlanningTest({
        categoryId: currentTestData?.category?.id || '',
        pagination: { pageNumber: 1, pageSize: 6 },
      }),
    );
  }, [dispatch, category.currentCategory.id]);

  return (
    <main>
      <div className='relative pt-16 pb-32 flex content-center items-center justify-center bg-white min-h-screen-75'>
        <div className='mt-8 container relative mx-auto'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full lg:w-6/12 xl:w-4/12 px-4 py-6 ml-auto mr-auto text-center'>
              <img
                src={currentTestData?.photo?.link || default_image}
                alt={currentTestData?.photo?.fileId || '...'}
                className='rounded-xl ml-auto mr-auto shadow-lg right'
              />
            </div>

            <div className='w-full lg:w-6/12 xl:w-4/12 px-4 ml-auto mr-auto'>
              <CardTestInfo planningTests={currentTestData} />
            </div>
          </div>
        </div>
      </div>

      {/* section tests */}

      <section className='relative py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='items-center flex flex-wrap px-4 py-2'>
            <h2 className='font-bold text-2xl mb-4'>Yo`riqnoma</h2>
            <p className='text-blueGray-400 text-lg'>
              Test uchun to`lov sizni InfoIT hisob raqamingizdan yechiladi. Testni vaqtiga e`tibor
              bering va shu vaqtda o`zingiz uchun qulay muhit yarating. Masalan, internet
              tezligingiz qurilmangizni quvvatini tekshiring, imkon qadar shovqin bo`lmagan joy
              tanlang.
            </p>

            <br />

            <p className='text-blueGray-400 text-lg'>
              Testni yechishga tayyor ekanligingizga ishonchigiz komil bo`lsa, hisobingizga o`tib u
              yerda sotib olingan teslar bo`limidan, sotib olgan testingizni tanlang, shuda test
              boshlanadi. Testni qayta yecha olmaysiz shuning uchun boshlashdan oldin tepadagi
              fikirlarga rioya qiling
            </p>
          </div>
        </div>
      </section>

      <section className='relative py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'>
            {planning?.map(test => (
              <div key={test.id} className='w-full lg:w-6/12 xl:w-4/12 px-4 py-2'>
                <CardTestInfo planningTests={test} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterHome />
    </main>
  );
}
