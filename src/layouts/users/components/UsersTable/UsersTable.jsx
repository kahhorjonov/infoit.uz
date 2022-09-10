import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'store/thunk';
import { setCurrentUser } from 'store/actions/actionCreaters';

import MDBox from 'components/MDBox';
import ModalComp from 'components/Modal/ModalComp';
import PaginationTable from 'components/Pagination/Pagination';
import Spiner from 'components/Loader/Spiner';
import UserForm from '../UserForm/UserForm';

import Styles from './UsersTable.module.scss';

function UsersTable({ role }) {
  const dispatch = useDispatch();
  const {
    users: { isLoading, users, count, pagination },
  } = useSelector(store => store);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCurrentUser = user => {
    dispatch(setCurrentUser(user));
    handleOpen();
  };

  const handleChangeCurrentPage = pageNumber => {
    dispatch(getUsers({ role, pagination: { ...pagination, pageNumber } }));
  };
  const handleChangePageSize = pageSize => {
    dispatch(getUsers({ role, pagination: { ...pagination, pageNumber: 1, pageSize } }));
  };
  

  return (
    <MDBox>
      <ModalComp width='500px' status={open} onClose={handleClose}>
        <UserForm />
      </ModalComp>
      {isLoading ? (
        <Spiner />
      ) : (
        <>
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
              {users?.map((user, idx) => (
                <tr key={user.id} onClick={() => handleCurrentUser(user)}>
                  <td>{idx + 1 + pagination.pageSize * (pagination.pageNumber - 1)}</td>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  <td>{user?.balance}</td>
                  <td>{user?.phoneNumber}</td>
                  <td>{user?.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationTable
            dataCount={count}
            pageNumber={pagination?.pageNumber}
            pageSize={pagination?.pageSize}
            onChangeCurrPage={pageNumber => handleChangeCurrentPage(pageNumber)}
            onChangePageSize={pageSize => handleChangePageSize(pageSize)}
          />
        </>
      )}
    </MDBox>
  );
}

UsersTable.propTypes = {
  role: PropTypes.string,
};

export default UsersTable;
