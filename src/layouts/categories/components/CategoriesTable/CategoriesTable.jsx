import { useState } from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import MDBox from 'components/MDBox';
import ModalComp from 'components/Modal/ModalComp';
import CategoryForm from '../CategoryForm';

import Styles from './CategoryTable.module.scss';

function CategoriesTable() {
  const {
    category: { currentCategory },
  } = useSelector(store => store);
  const [open, setOpen] = useState({ status: false, currCategory: {} });

  const handleOpen = currCategory => setOpen({ ...open, status: true, currCategory });
  const handleClose = () => setOpen({ status: false, currCategory: {} });

  return (
    <MDBox>
      <ModalComp status={open.status} onClose={handleClose}>
        <CategoryForm formType='view' currCategory={open.currCategory} />
      </ModalComp>
      <table className={Styles.categoryTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>Kategoriya</th>
            <th>Savollari soni</th>
          </tr>
        </thead>
        <tbody>
          {currentCategory?.children?.map((c, idx) => (
            <tr key={c?.id} onClick={() => handleOpen(c)}>
              <td>{idx + 1}</td>
              <td>{c?.nameUz}</td>
              <td>{c?.questionsCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MDBox>
  );
}

export default CategoriesTable;
