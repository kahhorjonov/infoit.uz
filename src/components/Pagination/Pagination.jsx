import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Pagination } from '@mui/material';
import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import Fade from '@mui/material/Fade';
import './Pagination.scss';
// import { Input, INPUT_HEIGHT } from '../Input/Input';

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

  // const handleChangePageNum = num => {
  //   if (num >= 0 && num <= pagesCount) {
  //     const n = parseInt(num, 10);
  //     setPageNum(n);
  //     setInpErr(false);
  //   } else setInpErr(true);
  // };

  // const handleSave = num => {
  //   if (num > 0) {
  //     onChangeCurrPage(num);
  //     handleClose();
  //   } else setInpErr(true);
  // };

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
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>
      </Box>
      <Box className='rightCont'>
        <div>
          <Button variant='string' onClick={handleClick}>
            To {pageNumber} From {pagesCount}
          </Button>
          {/* <Menu anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
            <div style={{ margin: '10px' }}>
              <Input
                error_message={inpErr && ' '}
                type='number'
                height={INPUT_HEIGHT.H_32}
                value={pageNum}
                onChange={e => handleChangePageNum(e)}
              />
              <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                <Button
                  style={{ borderRadius: 0 }}
                  variant='outlined'
                  color='primary'
                  onClick={() => handleSave(pageNum)}
                >
                  Save
                </Button>
                <Button
                  style={{ borderRadius: 0 }}
                  variant='outlined'
                  color='error'
                  onClick={() => handleClose()}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Menu> */}
        </div>

        <Pagination
          page={pageNumber}
          siblingCount={2}
          onChange={(event, page) => onChangeCurrPage(page)}
          count={pagesCount}
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
