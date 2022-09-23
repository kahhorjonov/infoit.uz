import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendAnswer } from 'store/thunk';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { setQuizPageNumber } from 'store/actions/actionCreaters';
import MDButton from 'components/MDButton';
import { Icon } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ModalComp from 'components/Modal/ModalComp';

import Styles from './CardQuiz.module.scss';

function CardQuiz({ onFinishTest }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [openImage, setOpenImage] = useState(false);

  const paramPathName = params['*'].split('/')[0];

  const {
    quiz: { currentQuiz, pageNumber, count, userAnswers },
  } = useSelector(store => store);

  const handleChooseChoice = (questionId, questionChoiceId) => {
    dispatch(sendAnswer({ questionId, questionChoiceId }));
  };
  const handleOpenImage = () => setOpenImage(true);
  const handleCloseImage = () => setOpenImage(false);

  const handleClickNext = pageNum => pageNumber < count && dispatch(setQuizPageNumber(pageNum + 1));
  const handleClickPrev = pageNum => pageNumber > 1 && dispatch(setQuizPageNumber(pageNum - 1));

  return (
    <div className={Styles.cardQuiz}>
      <ModalComp status={openImage} onClose={handleCloseImage} width='maxContainer'>
        <img src={currentQuiz?.questionPhoto?.link} alt={currentQuiz?.questionPhoto?.fileId} />
      </ModalComp>
      <p>Savol {pageNumber}</p>
      <div className={Styles.question}>
        <div>
          {/* <p>Savolni o‘qib, variantlardan birini tanlang</p> */}
          {paramPathName === 'quiz' && <span>{currentQuiz?.name}</span>}
          {paramPathName === 'result' && <span>{currentQuiz?.questionText}</span>}
        </div>
        <div className={Styles.imageCont}>
          <img
            src={currentQuiz?.questionPhoto?.link}
            alt={currentQuiz?.questionPhoto?.fileId}
            onClick={() => handleOpenImage()}
          />
        </div>
      </div>

      <div className={Styles.choiceContainer}>
        {currentQuiz?.choices?.map(choice => (
          <div
            key={v4()}
            className={`${Styles.choice} 
            ${
              paramPathName === 'quiz' &&
              userAnswers[currentQuiz?.id]?.questionChoiceId === choice.id
                ? Styles.active
                : ''
            } 
            ${
              paramPathName === 'result' && choice?.userAnswer
                ? choice.correct
                  ? Styles.correctChoice
                  : Styles.uncorrectChoice
                : ''
            }
            ${
              paramPathName === 'result' && choice?.correct && !choice?.userAnswer && Styles.correct
            }
            `}
            onClick={() =>
              paramPathName === 'quiz' && handleChooseChoice(currentQuiz?.id, choice?.id)
            }
          >
            <div className={Styles.choiceVariant}>
              <Icon>check</Icon>
            </div>
            {choice?.choicePhoto?.link && (
              <div className={Styles.choiceImageContainer}>
                <img src={choice?.choicePhoto?.link} alt={choice?.choicePhoto?.fileId || '...'} />
              </div>
            )}
            <span className={Styles.choiceText}>
              {paramPathName === 'quiz' ? choice?.text : choice?.choice}
            </span>
          </div>
        ))}
      </div>

      <div className='flex  justify-between mt-6'>
        <div />
        <div className='flex items-center'>
          <ArrowBackIosIcon
            color={pageNumber === 1 ? 'secondary' : ''}
            onClick={() => handleClickPrev(pageNumber)}
          />
          <h1 className='mx-2'>
            {pageNumber} / {count}
          </h1>
          <ArrowForwardIosIcon
            color={pageNumber === count ? 'secondary' : ''}
            onClick={() => handleClickNext(pageNumber)}
          />
        </div>
        <MDButton
          // disabled={pageNumber === 30}
          type='button'
          variant='contained'
          color={
            paramPathName === 'quiz' ? (pageNumber === count ? 'error' : 'secondary') : 'secondary'
          }
          onClick={() =>
            paramPathName === 'quiz'
              ? pageNumber === count
                ? onFinishTest()
                : handleClickNext(pageNumber)
              : pageNumber === count
              ? navigate('/myTests')
              : handleClickNext(pageNumber)
          }
        >
          {paramPathName === 'quiz'
            ? pageNumber === count
              ? 'Testni yakunlash'
              : 'Keyingi test'
            : pageNumber === count
            ? 'Testdan chiqish'
            : 'Keyingi savol'}
        </MDButton>
      </div>
    </div>
  );
}

CardQuiz.propTypes = {
  onFinishTest: PropTypes.func,
};

export default CardQuiz;
