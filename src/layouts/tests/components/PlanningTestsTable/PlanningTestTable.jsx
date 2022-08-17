import MDBox from 'components/MDBox';
import PaginationTable from 'components/Pagination/Pagination';

import Styles from '../TestTable.module.scss';

function PlanningTestTable() {
  return (
    <MDBox bgColor='white' coloredShadow='dark' borderRadius='xl' p={3}>
      <table className={Styles.testTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Questions Count</th>
            <th>Questions Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
      <PaginationTable
        dataCount={10}
        pageNumber={2}
        pageSize={10}
        onChangeCurrPage={() => {}}
        onChangePageSize={() => {}}
      />
    </MDBox>
  );
}

export default PlanningTestTable;
