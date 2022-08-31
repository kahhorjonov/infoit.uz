import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setQuizPageNumber } from 'store/actions/actionCreaters';

import { Box, Pagination } from '@mui/material';

import './QuizPagination.scss';
import { useParams } from 'react-router-dom';

function PageItem({ page, selected, onClick, choosed, choiceResult }) {
  const params = useParams();

  const paramPathName = params['*'].split('/')[0];

  if (page)
    return (
      <div
        className={`pageItem ${selected ? 'active' : ''} ${choosed ? 'choosed' : ''} ${
          paramPathName === 'result' ? (choiceResult ? 'correctChoice' : 'errorChoice') : ''
        }`}
        onClick={event => onClick(event, page)}
      >
        {page}
      </div>
    );
  return <div>...</div>;
}

PageItem.propTypes = {
  page: PropTypes.number,
  selected: PropTypes.bool,
  choosed: PropTypes.bool,
  choiceResult: PropTypes.bool,
  onClick: PropTypes.func,
};

function QuizPagination() {
  const dispatch = useDispatch();
  const {
    quiz: { pageNumber, count, quizs, userAnswers, currentQuiz },
  } = useSelector(store => store);

  const handleChangePageNumber = pageNum => dispatch(setQuizPageNumber(pageNum));

  return (
    <Box className='quizPagination'>
      <Pagination
        renderItem={item => (
          <PageItem
            {...item}
            choosed={userAnswers[quizs[parseInt(item?.page, 10) - 1]?.id] ? true : false}
            choiceResult={
              quizs[parseInt(item?.page, 10) - 1]?.choices?.filter(choice => choice?.correct)[0]
                ?.userAnswer
            }
          />
        )}
        page={pageNumber}
        count={count}
        boundaryCount={7}
        siblingCount={1}
        hidePrevButton
        hideNextButton
        onChange={(event, page) => handleChangePageNumber(page)}
      />
    </Box>
  );
}

export default QuizPagination;
