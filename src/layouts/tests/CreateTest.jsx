import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'store/thunk';
import { Icon, Grid } from '@mui/material';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';
import DropDown from 'components/DropDown/DropDown';
import TestTable from './components/TestTable/TestsTable';
import CreateTestForm from './components/CreateTestForm/CreateTestForm';
import PlanningTestTable from './components/PlanningTestsTable/PlanningTestTable';

function CreateTest() {
  const dispatch = useDispatch();
  const { category } = useSelector(store => store);
  const [actionType, setActionType] = useState('view');
  const [newTest, setNewTest] = useState({
    name: '',
    image: '',
    categoryId: null,
    price: 0,
    durationTimeInMinutes: 0,
    questionsCount: 0,
    attachmentId: null,
    questionsId: [],
    startTestDate: '',
    finishTestDate: '',
    startVisionTestDate: '',
    finishVisionTestDate: '',
  });

  const handleChangeTestData = (name, value) => {
    if (name === 'image') {
      setNewTest({ ...newTest, attachmentId: value.attachmentId, image: value.imageUrl });
    } else setNewTest({ ...newTest, [name]: value });
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox
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
            Categories
          </MDTypography>
          <MDBox display='flex' alignItems='center' gap={3}>
            <DropDown />
            {actionType === 'view' && category?.currentCategory?.id && (
              <MDButton
                onClick={() => {
                  console.log(newTest);
                  setActionType('add');
                }}
              >
                <Icon>add</Icon>
              </MDButton>
            )}
            {actionType === 'add' && (
              <MDButton
                onClick={() => {
                  setActionType('view');
                }}
              >
                <Icon>check</Icon>
              </MDButton>
            )}
          </MDBox>
        </MDBox>

        <MDBox mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={actionType === 'view' ? 12 : 8}>
              {actionType === 'view' && <PlanningTestTable />}
              {actionType === 'add' && <TestTable />}
            </Grid>
            {actionType === 'add' && (
              <Grid item xs={12} md={6} lg={4}>
                <MDBox
                  width='100%'
                  height='minContent'
                  bgColor='white'
                  coloredShadow='dark'
                  borderRadius='xl'
                  p={3}
                >
                  <CreateTestForm
                    onChangeTestData={(name, value) => handleChangeTestData(name, value)}
                  />
                </MDBox>
              </Grid>
            )}
          </Grid>
        </MDBox>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default CreateTest;
