import { Box, Pagination } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import './QuizPagination.scss';

function QuizPagination() {
  const { quiz } = useSelector(store => store);
  const [pagination, setPagination] = useState(1);

  return (
    <Box className='quizPagination'>
      <Pagination
        page={pagination}
        count={20}
        boundaryCount={8}
        siblingCount={2}
        variant='outlined'
        hidePrevButton
        hideNextButton
        onChange={(event, page) => setPagination(page)}
      />
    </Box>
  );
}

export default QuizPagination;
 