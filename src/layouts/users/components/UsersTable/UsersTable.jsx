import MDBox from 'components/MDBox';
import PaginationTable from 'components/Pagination/Pagination';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'store/thunk';

import Styles from './UsersTable.module.scss';

function UsersTable() {
  const dispatch = useDispatch();
  const { users } = useSelector(store => store);

  useEffect(() => {
    dispatch(getUsers({ pagination: users.pagination }));
  }, [dispatch]);

  return (
    <MDBox>
      <table className={Styles.usersTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>FIO</th>
            <th>Balans</th>
            <th>Telefon</th>
            <th>Manzil</th>
          </tr>
        </thead>
        <tbody>
          {/* {category?.currentCategory?.child?.map((c, idx) => (
            <tr key={c.id} onClick={() => handleOpen(c)}>
              <td>{idx + 1}</td>
              <td>{c.nameUz}</td>
              <td>100</td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <PaginationTable
        dataCount={10}
        pageNumber={1}
        pageSize={10}
        onChangeCurrPage={() => {}}
        onChangePageSize={() => {}}
      />
    </MDBox>
  );
}

export default UsersTable;
