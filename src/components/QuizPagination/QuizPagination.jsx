import { useState } from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Box, Pagination } from '@mui/material';

import './QuizPagination.scss';

function PageItem({ page, selected, onClick, choosed }) {
  return (
    <div
      className={`pageItem ${selected ? 'active' : ''} ${choosed ? 'choosed' : ''}`}
      onClick={event => onClick(event, page)}
    >
      {page}
    </div>
  );
}

PageItem.propTypes = {
  page: PropTypes.number,
  selected: PropTypes.bool,
  choosed: PropTypes.string,
  onClick: PropTypes.func,
};

function QuizPagination() {
  const [pagination, setPagination] = useState(1);

  return (
    <Box className='quizPagination'>
      <Pagination
        renderItem={item => <PageItem {...item} choosed='' />}
        page={pagination}
        count={20}
        boundaryCount={8}
        siblingCount={2}
        hidePrevButton
        hideNextButton
        onChange={(event, page) => setPagination(page)}
      />
    </Box>
  );
}

export default QuizPagination;
