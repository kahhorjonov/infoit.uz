import { useState } from 'react';
import PropTypes from 'prop-types';
import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';
import MDInput from 'components/MDInput';
import { useDispatch, useSelector } from 'react-redux';
import { createNewCategory, deleteCategory } from 'store/thunk';

function CategoryForm({ formType, currCategory, onClose }) {
  const dispatch = useDispatch();
  const { category } = useSelector(store => store);
  const [actionType, setActionType] = useState(formType);
  const [newCategory, setNewCategory] = useState({
    nameEn: currCategory?.nameEn || '',
    nameRu: currCategory?.nameRu || '',
    nameUz: currCategory?.nameUz || '',
    parentCategory: category?.currentCategory?.id,
  });

  const handleChangeCategory = (name, value) => {
    setNewCategory({ ...newCategory, [name]: value });
  };

  const handleSave = categoryData => {
    if (actionType === 'add') {
      dispatch(createNewCategory(categoryData));
      onClose();
    }

    if (actionType === 'edit') {
      dispatch(createNewCategory({ ...categoryData, id: currCategory.id }));
      setActionType('view');
    }
  };

  const handleDelete = () => {
    dispatch(deleteCategory(currCategory.id));
  };

  return (
    <MDBox display='flex' flexDirection='column' gap={2}>
      <MDBox display='flex' justifyContent='space-between' xs={12}>
        <MDTypography variant='text' color='text' fontSize='5' fontWeight='bold'>
          Create Category
        </MDTypography>
        <MDTypography>Parent Category: {category?.currentCategory?.name}</MDTypography>
      </MDBox>
      <MDBox xs={5}>
        <MDBox display='flex' alignItems='center' gap={1}>
          <MDInput
            disabled={actionType === 'view' ? true : false}
            value={newCategory?.nameUz}
            fullWidth
            label='Category Name UZ'
            onChange={e => handleChangeCategory('nameUz', e.target.value)}
          />
          <MDInput
            disabled={actionType === 'view' ? true : false}
            value={newCategory?.nameRu}
            fullWidth
            label='Category Name RU'
            onChange={e => handleChangeCategory('nameRu', e.target.value)}
          />
          <MDInput
            disabled={actionType === 'view' ? true : false}
            value={newCategory?.nameEn}
            fullWidth
            label='Category Name EN'
            onChange={e => handleChangeCategory('nameEn', e.target.value)}
          />
        </MDBox>
      </MDBox>
      {actionType === 'edit' || actionType === 'add' ? (
        <MDBox width='100%' display='flex' alignItems='center' gap={1}>
          <MDButton fullWidth color='success' onClick={() => handleSave(newCategory)}>
            Save
          </MDButton>
          <MDButton
            fullWidth
            color='secondary'
            onClick={actionType === 'add' ? onClose : () => setActionType('view')}
          >
            Cancel
          </MDButton>
        </MDBox>
      ) : (
        <MDBox width='100%' display='flex' alignItems='center' gap={1}>
          <MDButton fullWidth color='success' onClick={() => setActionType('edit')}>
            Edit
          </MDButton>
          <MDButton fullWidth color='secondary' onClick={() => handleDelete()}>
            Delete
          </MDButton>
        </MDBox>
      )}
    </MDBox>
  );
}

CategoryForm.propTypes = {
  formType: PropTypes.string,
  currCategory: PropTypes.object,
  onClose: PropTypes.func,
};

export default CategoryForm;
