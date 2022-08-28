import { useDispatch, useSelector } from 'react-redux';
import { sendAnswer } from 'store/thunk';
import MDButton from 'components/MDButton';
import { Icon } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { setQuizPageNumber } from 'store/actions/actionCreaters';

import Styles from './CardQuiz.module.scss';

function CardQuiz() {
  const dispatch = useDispatch();

  const {
    quiz: { currentQuiz, pageNumber, count, userAnswers },
  } = useSelector(store => store);

  const handleChooseChoice = (questionId, questionChoiceId) => {
    dispatch(sendAnswer({ questionId, questionChoiceId }));
  };

  const handleClickNext = pageNum => pageNumber < count && dispatch(setQuizPageNumber(pageNum + 1));
  const handleClickPrev = pageNum => pageNumber > 1 && dispatch(setQuizPageNumber(pageNum - 1));

  return (
    <div className={Styles.cardQuiz}>
      <p>Savol {pageNumber}</p>
      <div className={Styles.question}>
        <div>
          {/* <p>Savolni o‘qib, variantlardan birini tanlang</p> */}
          <span>{currentQuiz?.name}</span>
        </div>
        <div className={Styles.imageCont}>
          <img src={currentQuiz?.questionPhoto?.link} alt={currentQuiz?.questionPhoto?.fileId} />
        </div>
      </div>

      <div className={Styles.choiceContainer}>
        {currentQuiz?.choices?.map(choice => (
          <div
            key={choice.id}
            className={`${Styles.choice} ${
              userAnswers[currentQuiz?.id]?.questionChoiceId === choice.id ? Styles.active : ''
            } `}
            onClick={() => handleChooseChoice(currentQuiz?.id, choice?.id)}
          >
            <div className={Styles.choiceVariant}>
              <Icon>check</Icon>
            </div>
            <span className={Styles.choiceText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis.
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
            color={pageNumber === 30 ? 'secondary' : ''}
            onClick={() => handleClickNext(pageNumber)}
          />
        </div>
        <MDButton
          disabled={pageNumber === 30}
          type='button'
          variant='contained'
          color='secondary'
          onClick={() => handleClickNext(pageNumber)}
        >
          Keyingi test
        </MDButton>
      </div>
    </div>
  );
}

export default CardQuiz;
