import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getUsers, getDashboardStatisticsTable } from 'store/thunk';
import { getDashboardStatisticsTable } from 'store/thunk';
// import { setCurrentUser } from 'store/actions/actionCreaters';

import MDBox from 'components/MDBox';
// import ModalComp from 'components/Modal/ModalComp';
import { Icon } from '@mui/material';
// import PaginationTable from 'components/Pagination/Pagination';
import Spiner from 'components/Loader/Spiner';
// import UserForm from '../UserForm/UserForm';
import Styles from './UsersTable.module.scss';

function DashboardStatisticstable() {
  const dispatch = useDispatch();
  const {
    dashboardStatistics: { isLoading, dashboardStatistics },
  } = useSelector(store => store);

  // const handleChangeCurrentPage = pageNumber => {
  //   dispatch(getUsers({ role, pagination: { ...pagination, pageNumber } }));
  // };

  // const handleChangePageSize = pageSize => {
  //   dispatch(getUsers({ role, pagination: { ...pagination, pageNumber: 1, pageSize } }));
  // };

  useEffect(() => {
    dispatch(getDashboardStatisticsTable());
  }, []);

  return (
    <MDBox>
      {isLoading ? (
        <Spiner />
      ) : dashboardStatistics?.length > 0 ? (
        <>
          <table className={Styles.usersTable}>
            <thead>
              <tr>
                <th> </th>
                <th>Test mavzusi</th>
                <th>Foyda</th>
                <th>Foydalanuvchilar soni</th>
              </tr>
            </thead>
            <tbody>
              {dashboardStatistics?.map(test => (
                <tr key={test.id}>
                  {/* <td>{idx + 1 + pagination.pageSize * (pagination.pageNumber - 1)}</td> */}
                  <td>
                    <Icon>quiz</Icon>
                  </td>
                  <td>{test?.name}</td>
                  <td>{test?.benefit}</td>
                  <td>{test?.userCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <PaginationTable
            dataCount={count}
            pageNumber={pagination?.pageNumber}
            pageSize={pagination?.pageSize}
            onChangeCurrPage={pageNumber => handleChangeCurrentPage(pageNumber)}
            onChangePageSize={pageSize => handleChangePageSize(pageSize)}
          /> */}
        </>
      ) : (
        <div>
          <h1>Testlar bo`yicha statistika mavjud emas!</h1>
        </div>
      )}
    </MDBox>
  );
}

export default DashboardStatisticstable;
