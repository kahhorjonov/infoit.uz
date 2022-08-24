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
  choosed: PropTypes.string,
  onClick: PropTypes.func,
};

function QuizPagination() {
  const dispatch = useDispatch();
  const { quiz } = useSelector(store => store);

  const handleChangePageNumber = pageNumber => dispatch(setQuizPageNumber(pageNumber));

  return (
    <Box className='quizPagination'>
      <Pagination
        renderItem={item => <PageItem {...item} choosed='' />}
        page={quiz?.pageNumber}
        count={quiz?.count}
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
