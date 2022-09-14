import PropTypes from 'prop-types';
import { Box, Pagination } from '@mui/material';
import './Pagination.scss';

function PaginationTable(props) {
  const { dataCount, pageNumber, pageSize, onChangePageSize, onChangeCurrPage } = props;
  // const pagesCount = dataCount > pageSize ? Math.ceil(dataCount / pageSize) : 1;

  return (
    <Box className='pagination'>
      <Box className='leftCont'>
        <span>Elementlar soni:</span>
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
            {pageNumber} dan {dataCount || 0} gacha
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
