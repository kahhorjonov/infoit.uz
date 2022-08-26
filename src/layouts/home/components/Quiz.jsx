import Spiner from 'components/Loader/Spiner';
import MDButton from 'components/MDButton';
import QuizPagination from 'components/QuizPagination/QuizPagination';
import Timer from 'components/Timer/Timer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getQuizs, finishUserTest } from 'store/thunk';

import CardQuiz from '../Cards/CardQuiz/CardQuiz';

export default function Quiz() {
  const dispatch = useDispatch();
  const {
    quiz: { isLoading, quizs, pageNumber, count },
    userTests: { currentTest },
  } = useSelector(store => store);
  const params = useParams();
  const timeLs = localStorage.getItem('timeMinutes');

  const testDuration = currentTest.durationTimeInMinutes / 1000 / 60;

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60 * (timeLs > 0 ? timeLs + 1 : testDuration));

  const handleFinishedTest = testId => finishUserTest(testId);

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
          <h1 className='text-4xl font-bold'>{currentTest?.name}</h1>
          <p>Savollar soni: {currentTest?.questionsCount} ta</p>
          <p>Davomiyligi: {testDuration} minut</p>
        </div>
        <div className='flex items-center gap-3'>
          <Timer expiryTimestamp={time} />
          <MDButton type='button' color='error' onClick={() => handleFinishedTest(currentTest?.id)}>
            Testni to‘xtatish
          </MDButton>
        </div>
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
