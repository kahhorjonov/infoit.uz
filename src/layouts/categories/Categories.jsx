import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'store/thunk';

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// @mui material components
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDButton from 'components/MDButton';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

// Material Dashboard 2 React components
import DropDown from 'components/DropDown/DropDown';
import ModalComp from 'components/Modal/ModalComp';
import Spiner from 'components/Loader/Spiner';
import CategoriesTable from './components/CategoriesTable/CategoriesTable';
import CategoryForm from './components/CategoryForm';

function Categories() {
  const dispatch = useDispatch();
  const { category } = useSelector(store => store);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getCategories(false));
  }, [dispatch]);

  return (
    <DashboardLayout>
      <ModalComp status={open} onClose={handleClose}>
        <CategoryForm formType='add' onClose={handleClose} />
      </ModalComp>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                p={2}
                variant='gradient'
                bgColor='info'
                borderRadius='lg'
                coloredShadow='info'
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <MDTypography variant='h6' color='white'>
                  Kategoriyalar
                </MDTypography>
                <MDBox display='flex' alignItems='center' gap={3}>
                  <DropDown />
                  <MDButton onClick={() => handleOpen()}>
                    <Icon>add</Icon>
                  </MDButton>
                </MDBox>
              </MDBox>
              <MDBox width='100%' p={3}>
                {category.isLoading ? <Spiner /> : <CategoriesTable />}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Categories;
