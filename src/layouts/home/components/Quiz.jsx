import QuizPagination from 'components/QuizPagination/QuizPagination';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getQuizs } from 'store/thunk';
import CardQuiz from '../Cards/CardQuiz/CardQuiz';

export default function Quiz() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizs(2051));
  }, [dispatch]);

  return (
    <div className='relative mt-32'>
      <div className='container mx-auto'>
        <div>
          <h1 className='text-4xl font-bold'>Fizika fanidan test topshiriqlari</h1>
          <p>Savollar soni: 30 ta</p>
          <p>Davomiyligi: 1 soat 45 minut</p>
        </div>
      </div>

      <hr className='mt-6 hr-3' />

      <div className='container mx-auto mt-20 mb-24'>
        <div className='flex'>
          <QuizPagination />
          <CardQuiz />
        </div>
      </div>
    </div>
  );
}
