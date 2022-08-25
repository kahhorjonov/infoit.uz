import Spiner from 'components/Loader/Spiner';
import QuizPagination from 'components/QuizPagination/QuizPagination';
import Timer from 'components/Timer/Timer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getQuizs } from 'store/thunk';

import CardQuiz from '../Cards/CardQuiz/CardQuiz';

export default function Quiz() {
  const dispatch = useDispatch();
  const {
    quiz: { isLoading, quizs, pageNumber, count },
  } = useSelector(store => store);
  const params = useParams();
  const timeLs = localStorage.getItem('timeMinutes');

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60 * (timeLs > 0 ? parseInt(timeLs, 10) + 1 : 10));

  // useEffect(() => {
  //   quizs.length === 0 && navigate('/myTests');
  // }, [quizs]);

  useEffect(() => {
    dispatch(getQuizs(params?.id));
  }, [dispatch]);

  return (
    <div className='relative mt-32'>
      <div className='container mx-auto flex justify-between'>
        <div>
          <h1 className='text-4xl font-bold'>Fizika fanidan test topshiriqlari</h1>
          <p>Savollar soni: 30 ta</p>
          <p>Davomiyligi: 1 soat 45 minut</p>
        </div>
        <Timer expiryTimestamp={time} />
      </div>

      <hr className='mt-6 hr-3' />

      <div className='container mx-auto mt-20 mb-24'>
        {isLoading ? (
          <Spiner />
        ) : (
          <div className='flex'>
            <QuizPagination />
            <CardQuiz />
          </div>
        )}
      </div>
    </div>
  );
}
