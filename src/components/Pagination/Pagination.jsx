import React from 'react';
import PropTypes from 'prop-types';
import { Box, Pagination } from '@mui/material';
import './Pagination.scss';

function PaginationTable(props) {
  const { dataCount, pageNumber, pageSize, onChangePageSize, onChangeCurrPage } = props;
  const [pageNum, setPageNum] = useState(null);
  const [inpErr, setInpErr] = useState(false);

  const pagesCount = dataCount > pageSize ? Math.ceil(dataCount / pageSize) : 1;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setInpErr(false);
  };

  const handleChangePageNum = num => {
    if (num >= 0 && num <= pagesCount) {
      const n = parseInt(num, 10);
      setPageNum(n);
      setInpErr(false);
    } else setInpErr(true);
  };

  const handleSave = num => {
    if (num > 0) {
      onChangeCurrPage(num);
      handleClose();
    } else setInpErr(true);
  };

  return (
    <Box className='pagination'>
      <Box className='leftCont'>
        <span>Page Size:</span>
        <select
          value={pageSize}
          onChange={e => {
            onChangePageSize(e.target.value);
          }}
        >
          <option>5</option>
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
          <option>60</option>
          <option>70</option>
          <option>80</option>
          <option>90</option>
          <option>100</option>
        </select>
      </Box>
      <Box className='rightCont'>
        <div>
          <span variant='string'>
            To {pageNumber} From {dataCount || 0}
          </span>
        </div>

        <Pagination
          page={pageNumber}
          siblingCount={2}
          onChange={(event, page) => onChangeCurrPage(page)}
          count={dataCount || 0}
          variant='outlined'
          shape='rounded'
        />
      </Box>
    </Box>
  );
}

PaginationTable.propTypes = {
  dataCount: PropTypes.number,
  pageNumber: PropTypes.number,
  pageSize: PropTypes.node,
  onChangePageSize: PropTypes.func,
  onChangeCurrPage: PropTypes.func,
};

export default PaginationTable;
