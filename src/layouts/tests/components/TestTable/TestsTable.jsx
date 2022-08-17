import PropTyps from 'prop-types';
import MDBox from 'components/MDBox';
import './TestsTable.scss';
import MDPagination from 'components/MDPagination';
import { Pagination } from '@mui/material';
import PaginationTable from 'components/Pagination/Pagination';

const TESTS = [
  { id: 1, text: 'Test 1 Test 1 Test 1Test 1Test 1Test 1Test 1 Test 1Test 1Test 1' },
  { id: 2, text: 'Test 2' },
  { id: 3, text: 'Test 3' },
  { id: 4, text: 'Test 4' },
  { id: 5, text: 'Test 5' },
  { id: 6, text: 'Test 6' },
  { id: 7, text: 'Test 7' },
];

function TestTable({ onAddTestId }) {
  const handleChangeCurrPage = pageNumber => {};

  const handleChangePageSize = pageSize => {};

  return (
    <MDBox bgColor='white' coloredShadow='dark' borderRadius='xl' p={3}>
      <table className='test_table'>
        <thead>
          <tr>
            <th> </th>
            <th>ID</th>
            <th>Questions</th>
          </tr>
        </thead>
        <tbody>
          {TESTS.map(test => (
            <tr key={test.id}>
              <td>
                <input type='checkbox' onChange={() => onAddTestId(test.id)} />
              </td>
              <td>{test.id}</td>
              <td>{test.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationTable
        dataCount={100}
        pageNumber={5}
        pageSize={10}
        onChangeCurrPage={pageNumber => handleChangeCurrPage(pageNumber)}
        onChangePageSize={pageSize => handleChangePageSize(pageSize)}
      />
    </MDBox>
  );
}

TestTable.propTypes = {
  onAddTestId: PropTyps.func.isRequired,
};

export default TestTable;
