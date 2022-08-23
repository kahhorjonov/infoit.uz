import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, getQuestions } from 'store/thunk';
// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

import MDButton from 'components/MDButton';
import { Icon } from '@mui/material';
import ModalComp from 'components/Modal/ModalComp';
// import { SelectPicker } from 'rsuite';

import DropDown from 'components/DropDown/DropDown';
import Form from './components/Form';
import Table from './components/Table/Table';

function CreateQuestion() {
  const dispatch = useDispatch();
  const { category, questionsData } = useSelector(state => state);
  const [createQStatus, setCreateQStatus] = useState(false);

  const handleOpen = () => setCreateQStatus(true);
  const handleClose = () => setCreateQStatus(false);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <DashboardLayout>
      <ModalComp status={createQStatus} onClose={handleClose}>
        <Form
          formType='add'
          categoryId={category?.currentCategory?.id || 0}
          pagination={questionsData?.pagination}
          onClose={handleClose}
        />
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
                  Questions
                </MDTypography>
                <MDBox display='flex' alignItems='center' gap={3}>
                  <DropDown />
                  {category?.currentCategory?.id && (
                    <MDButton onClick={() => handleOpen()}>
                      <Icon>add</Icon>
                    </MDButton>
                  )}
                </MDBox>
              </MDBox>
              <MDBox width='100%' p={3}>
                <Table />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default CreateQuestion;
