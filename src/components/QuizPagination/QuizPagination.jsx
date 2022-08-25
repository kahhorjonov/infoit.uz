import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setQuizPageNumber } from 'store/actions/actionCreaters';

import { Box, Pagination } from '@mui/material';

import './QuizPagination.scss';

function PageItem({ page, selected, onClick, choosed }) {
  if (page)
    return (
      <div
        className={`pageItem ${selected ? 'active' : ''} ${choosed ? 'choosed' : ''}`}
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
  onClick: PropTypes.func,
};

function QuizPagination() {
  const dispatch = useDispatch();
  const {
    quiz: { pageNumber, count, quizs, userAnswers },
  } = useSelector(store => store);

  const handleChangePageNumber = pageNum => dispatch(setQuizPageNumber(pageNum));

  return (
    <Box className='quizPagination'>
      <Pagination
        renderItem={item => (
          <PageItem {...item} choosed={userAnswers[quizs[item?.page]?.id] ? true : false} />
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
