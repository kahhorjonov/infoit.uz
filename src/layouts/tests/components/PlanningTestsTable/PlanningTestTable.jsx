import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanningTest } from 'store/thunk';
import MDBox from 'components/MDBox';
import PaginationTable from 'components/Pagination/Pagination';

import Styles from '../TestTable.module.scss';

function PlanningTestTable() {
  const dispatch = useDispatch();
  const { category, planningTests } = useSelector(store => store);

  // console.log(planningTest);

  useEffect(() => {
    dispatch(
      getPlanningTest({
        categoryId: category?.currentCategory?.id || '',
        pagination: planningTests?.pagination,
      }),
    );
  }, [dispatch, category?.currentCategory, planningTests?.pagination]);

  return (
    <MDBox bgColor='white' coloredShadow='dark' borderRadius='xl' p={3}>
      <table className={Styles.testTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>Test Name</th>
            <th>Questions Count</th>
            <th>Duration</th>
            {/* <th>Price</th> */}
            <th>Start date</th>
            <th>Finish date</th>
          </tr>
        </thead>
        <tbody>
          {planningTests?.planning?.map((testData, idx) => (
            <tr key={testData.id}>
              <td>
                {idx +
                  1 +
                  planningTests.pagination.pageSize * (planningTests.pagination.pageNumber - 1)}
              </td>
              <td>{testData?.name}</td>
              <td>{testData?.questionsCount}</td>
              <td>{new Date(testData?.durationTimeInMinutes).getHours()}</td>
              {/* <td>45 000 som</td> */}
              <td>{new Date(testData?.startVisionTestDate).toISOString()}</td>
              <td>{new Date(testData?.finishVisionTestDate).toISOString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationTable
        dataCount={planningTests?.count}
        pageNumber={planningTests?.pagination?.pageNumber}
        pageSize={planningTests?.pagination?.pageSize}
        onChangeCurrPage={() => {}}
        onChangePageSize={() => {}}
      />
    </MDBox>
  );
}

export default PlanningTestTable;
