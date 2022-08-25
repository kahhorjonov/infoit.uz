import QuizPagination from 'components/QuizPagination/QuizPagination';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getQuizs } from 'store/thunk';
import CardQuiz from '../Cards/CardQuiz/CardQuiz';

export default function Quiz() {
  const dispatch = useDispatch();
  const {
    quiz: { quizs },
  } = useSelector(store => store);
  const navigate = useNavigate();
  const params = useParams();

  // useEffect(() => {
  //   !quizs.length && navigate('/myTests');
  // }, [quizs, params]);

  // useEffect(() => {
  //   dispatch(getQuizs(params?.id));
  // }, [dispatch]);

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
