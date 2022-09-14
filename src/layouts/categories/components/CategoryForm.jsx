import { useState } from 'react';
import PropTypes from 'prop-types';
import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';
import MDInput from 'components/MDInput';
import { useDispatch, useSelector } from 'react-redux';
import { createNewCategory, deleteCategory } from 'store/thunk';
import ModalComp from 'components/Modal/ModalComp';

function CategoryForm({ formType, currCategory, onClose }) {
  const dispatch = useDispatch();
  const { category } = useSelector(store => store);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [actionType, setActionType] = useState(formType);
  const [newCategory, setNewCategory] = useState({
    nameEn: currCategory?.nameEn || '',
    nameRu: currCategory?.nameRu || '',
    nameUz: currCategory?.nameUz || '',
    parentCategory: category?.currentCategory?.id,
  });

  const handleOpen = () => setOpenDeleteModal(true);
  const handleClose = () => setOpenDeleteModal(false);

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
      <ModalComp width='350px' status={openDeleteModal} onClose={handleClose}>
        <MDTypography textAlign='center' mb={1}>
          O`chirishni davom ettirasizmi?
        </MDTypography>
        <MDBox display='flex' justifyContent='space-between' gap={1}>
          <MDButton
            fullWidth
            type='button'
            variant='contained'
            color='success'
            onClick={() => handleDelete()}
          >
            Yes
          </MDButton>
          <MDButton
            fullWidth
            type='button'
            variant='contained'
            color='secondary'
            onClick={handleClose}
          >
            No
          </MDButton>
        </MDBox>
      </ModalComp>
      <MDBox display='flex' justifyContent='space-between' xs={12}>
        <MDTypography variant='text' color='text' fontSize='5' fontWeight='bold'>
          Kategoriya qo`shish
        </MDTypography>
        {/* <MDTypography>Parent Category: {category?.currentCategory?.name}</MDTypography> */}
      </MDBox>
      <MDBox xs={5}>
        <MDBox display='flex' alignItems='center' gap={1}>
          <MDInput
            disabled={actionType === 'view' ? true : false}
            value={newCategory?.nameUz}
            fullWidth
            label='Kategoriya nomi'
            onChange={e => handleChangeCategory('nameUz', e.target.value)}
          />
          {/* <MDInput
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
          /> */}
        </MDBox>
      </MDBox>
      {actionType === 'edit' || actionType === 'add' ? (
        <MDBox width='100%' display='flex' alignItems='center' gap={1}>
          <MDButton fullWidth color='success' onClick={() => handleSave(newCategory)}>
            Saqlash
          </MDButton>
          <MDButton
            fullWidth
            color='secondary'
            onClick={actionType === 'add' ? onClose : () => setActionType('view')}
          >
            Bekor qilish
          </MDButton>
        </MDBox>
      ) : (
        <MDBox width='100%' display='flex' alignItems='center' gap={1}>
          <MDButton fullWidth color='success' onClick={() => setActionType('edit')}>
            Tahrirlash
          </MDButton>
          <MDButton fullWidth color='secondary' onClick={() => handleOpen()}>
            O`chirish
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
