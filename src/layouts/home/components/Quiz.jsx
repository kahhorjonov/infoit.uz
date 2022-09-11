import Spiner from 'components/Loader/Spiner';
import MDButton from 'components/MDButton';
import QuizPagination from 'components/QuizPagination/QuizPagination';
import Timer from 'components/Timer/Timer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getResultTestSuccess } from 'store/actions/actionCreaters';
import { getQuizs, finishUserTest, resultTest, getCurrentTestTime } from 'store/thunk';
import ModalComp from 'components/Modal/ModalComp';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
// import resultJson from './result.json';

import CardQuiz from '../Cards/CardQuiz/CardQuiz';

export default function Quiz() {
  const dispatch = useDispatch();
  const {
    quiz: { isLoading, correctAnswersCount, quizs },
    userTests: { currentTest },
  } = useSelector(store => store);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const paramPathName = params['*'].split('/')[0];

  const testDurationTime = currentTest.durationTimeInMinutes / 1000 / 60;

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleFinishedTest = async testId => {
    const response = await finishUserTest(testId);
    if (response.success === 200) {
      // dispatch(getResultTestSuccess(resultJson.objectKoinot));
      handleClose();
      dispatch(getResultTestSuccess(response.objectKoinot));
      localStorage.removeItem('userAnswers');
      navigate(`/result/${testId}`);
    }
  };

  // useEffect(() => {
  //   quizs.length === 0 && paramPathName !== 'result' && navigate('/myTests');
  // }, []);

  useEffect(() => {
    if (paramPathName === 'quiz') {
      dispatch(getQuizs(params?.id));
    }
    paramPathName === 'result' && dispatch(resultTest(params?.id));
  }, [dispatch]);

  return (
    <div className='relative mt-32'>
      <ModalComp width='280px' status={openModal} onClose={handleClose}>
        <MDTypography textAlign='center'>Rostdan ham testni tugatmoqchimisiz?</MDTypography>
        <MDBox display='flex' justifyContent='space-between' mt={3} gap={2}>
          <MDButton
            fullWidth
            type='button'
            variant='contained'
            color='success'
            onClick={() => handleFinishedTest(currentTest?.id)}
          >
            Ha
          </MDButton>
          <MDButton
            fullWidth
            type='button'
            variant='contained'
            color='secondary'
            onClick={() => handleClose()}
          >
            Yo`q
          </MDButton>
        </MDBox>
      </ModalComp>
      <div className='container mx-auto flex justify-between'>
        <div>
          <h2 className='text-4xl font-bold'>{currentTest?.name}</h2>
          <p>Savollar soni: {currentTest?.questionsCount} ta</p>
          {paramPathName === 'result' && <p>To`g`ri javoblar soni: {correctAnswersCount} ta</p>}
          <p>Davomiyligi: {testDurationTime} minut</p>
        </div>
        <div className='flex items-center gap-3'>
          {paramPathName === 'quiz' && <Timer />}
          <MDButton
            type='button'
            color={paramPathName === 'quiz' ? 'error' : 'secondary'}
            // onClick={() => handleFinishedTest(currentTest?.id)}
            onClick={() => (paramPathName === 'quiz' ? handleOpen() : navigate('/myTests'))}
          >
            {paramPathName === 'quiz' ? 'Testni to‘xtatish' : 'Testdan chiqish'}
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
            <CardQuiz onFinishTest={() => handleOpen()} />
          </div>
        )}
      </div>
    </div>
  );
}
