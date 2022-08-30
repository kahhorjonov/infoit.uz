import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanningTest, getPlanningTestById } from 'store/thunk';
import PropTypes from 'prop-types';
import MDBox from 'components/MDBox';
import PaginationTable from 'components/Pagination/Pagination';
import Spiner from 'components/Loader/Spiner';

import ModalComp from 'components/Modal/ModalComp';
import CardTestInfo from 'layouts/home/Cards/CardTestInfo';
import Styles from '../TestTable.module.scss';

function PlanningTestTable({ onChangeActionType }) {
  const dispatch = useDispatch();
  const {
    category: { currentCategory },
    planningTests: { isLoading, planning, currentTestData, count, pagination },
  } = useSelector(store => store);
  const [testInfo, setTestInfo] = useState(false);

  const milliSecondsToMinutes = milliSeconds => milliSeconds / 1000 / 60;

  // console.log(planningTest);

  const handleOpenCurrentTestData = id => {
    dispatch(getPlanningTestById(id));
    setTestInfo(true);
  };

  const handleChangeCurrPage = pageNumber => {
    dispatch(
      getPlanningTest({
        categoryId: currentCategory?.id || '',
        pagination: { ...pagination, pageNumber },
      }),
    );
  };
  const handleChangePageSize = pageSize => {
    dispatch(
      getPlanningTest({
        categoryId: currentCategory?.id || '',
        pagination: { ...pagination, pageNumber: 1, pageSize },
      }),
    );
  };

  useEffect(() => {
    currentCategory?.id &&
      dispatch(
        getPlanningTest({
          categoryId: currentCategory?.id,
          pagination,
        }),
      );
  }, [dispatch, currentCategory]);

  return (
    <MDBox bgColor='white' coloredShadow='dark' borderRadius='xl' p={3}>
      <ModalComp status={testInfo} onClose={() => setTestInfo(false)}>
        <div className='items-center flex'>
          <div className='w-full  px-4'>
            <img
              alt={currentTestData?.photo?.fileName || '...'}
              className='rounded-xl ml-auto mr-auto shadow-lg right'
              src={currentTestData?.photo?.link}
            />
          </div>

          <div className='w-full px-4'>
            <CardTestInfo
              workingComp='admin'
              planningTests={currentTestData}
              onChangeAction={type => onChangeActionType(type)}
            />
          </div>
        </div>
      </ModalComp>
      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <table className={Styles.testTable}>
            <thead>
              <tr>
                <th>№</th>
                <th>Test Name</th>
                <th>Questions Count</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Start date</th>
                <th>Finish date</th>
              </tr>
            </thead>
            <tbody>
              {planning?.map((testData, idx) => (
                <tr key={testData?.id} onClick={() => handleOpenCurrentTestData(testData.id)}>
                  <td>{idx + 1 + pagination.pageSize * (pagination.pageNumber - 1)}</td>
                  <td>{testData?.name}</td>
                  <td>{testData?.questionsCount}</td>
                  <td>{milliSecondsToMinutes(testData?.durationTimeInMinutes)}</td>
                  <td>{testData?.price}</td>
                  <td>{new Date(testData?.startVisionTestDate).toLocaleString()}</td>
                  <td>{new Date(testData?.finishVisionTestDate).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationTable
            dataCount={count}
            pageNumber={pagination?.pageNumber}
            pageSize={pagination?.pageSize}
            onChangeCurrPage={pageNumber => handleChangeCurrPage(pageNumber)}
            onChangePageSize={pageSize => handleChangePageSize(pageSize)}
          />
        </>
      )}
    </MDBox>
  );
}

PlanningTestTable.propTypes = {
  onChangeActionType: PropTypes.func,
};

export default PlanningTestTable;
