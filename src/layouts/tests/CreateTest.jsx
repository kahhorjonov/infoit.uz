import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, addPlanningTest } from 'store/thunk';
import { toast } from 'react-toastify';
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
  const {
    category: { currentCategory },
    planningTests: { currentTestData, search },
  } = useSelector(store => store);
  const [actionType, setActionType] = useState('view');
  const [newTest, setNewTest] = useState({
    name: '',
    image: '',
    price: 0,
    active: true,
    categoryId: '',
    questionsId: [],
    attachmentId: '',
    questionsCount: 0,
    durationTimeInMinutes: 0,
    startTestDate: new Date().toISOString().substr(0, 16),
    finishTestDate: new Date().toISOString().substr(0, 16),
  });

  const handleChangeTestData = (name, value) => {
    if (name === 'image') {
      setNewTest({ ...newTest, attachmentId: value.attachmentId, image: value.imageUrl });
    } else setNewTest({ ...newTest, [name]: value });
  };

  const handleAddQuestionId = id => {
    const idsArray = [...newTest.questionsId];
    const filterId = idsArray?.filter(ids => ids === id);
    if (filterId.length === 0) {
      idsArray.push(id);
      setNewTest({ ...newTest, questionsId: idsArray });
    } else setNewTest({ ...newTest, questionsId: idsArray?.filter(ids => ids !== id) });
  };

  const handleTestValidation = () => {
    if (newTest?.name === '') toast.error('Test nomini kiriting!');
    else if (!newTest?.durationTimeInMinutes) toast.error('Test ishlash vaqtini kiriting!');
    // else if (!newTest?.price) toast.error('Enter the test price!');
    else if (!newTest?.questionsCount) toast.error('Savollar sonini kiriting!');
    else if (Date.parse(newTest?.startTestDate) < Date.parse(new Date()))
      toast.error('Test boshlanish vaqtini noto`g`ri!');
    else if (Date.parse(newTest?.finishTestDate) < Date.parse(new Date()))
      toast.error('Testning tugash vaqti noto`g`ri!');
    else if (Date.parse(newTest?.startTestDate) >= Date.parse(newTest?.finishTestDate))
      toast.error('Test boshlash va tugash vaqtini noto`g`ri!');
    else if (!newTest?.attachmentId) toast.error('Test uchun muqova tanlang!');
    else return true;
    return false;
  };

  const handleSave = data => {
    if (handleTestValidation()) {
      actionType === 'add'
        ? dispatch(addPlanningTest({ ...data, search, categoryId: currentCategory?.id }))
        : dispatch(addPlanningTest({ ...data, search }));
      setActionType('view');
    }
  };

  useEffect(() => {
    actionType === 'edit' &&
      setNewTest({
        ...newTest,
        id: currentTestData?.id,
        name: currentTestData?.name,
        image: currentTestData?.photo?.link,
        price: currentTestData?.price,
        active: currentTestData?.active,
        categoryId: currentTestData?.category?.id,
        attachmentId: currentTestData?.photo?.fileId,
        questionsCount: currentTestData?.questionsCount,
        startTestDate: new Date(currentTestData?.startTestDate).toISOString().substr(0, 16),
        finishTestDate: new Date(currentTestData?.finishTestDate).toISOString().substr(0, 16),
        durationTimeInMinutes: new Date(currentTestData?.durationTimeInMinutes).getMinutes(),
      });
  }, [actionType, currentTestData]);

  useEffect(() => {
    dispatch(getCategories(true));
  }, [dispatch]);

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
            Testlar
          </MDTypography>
          <MDBox display='flex' alignItems='center' gap={3}>
            <DropDown />
            {actionType === 'view' && currentCategory?.id && (
              <MDButton
                onClick={() => {
                  setActionType('add');
                }}
              >
                <Icon>add</Icon>
              </MDButton>
            )}
            {(actionType === 'add' || actionType === 'edit') && (
              <>
                <MDButton onClick={() => setActionType('view')}>
                  <Icon>cancel</Icon>
                </MDButton>
                <MDButton onClick={() => handleSave(newTest)}>
                  <Icon>check</Icon>
                </MDButton>
              </>
            )}
          </MDBox>
        </MDBox>

        <MDBox mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={actionType === 'view' ? 12 : 8}>
              {actionType === 'view' && (
                <PlanningTestTable onChangeActionType={type => setActionType(type)} />
              )}
              {(actionType === 'add' || actionType === 'edit') && (
                <TestTable
                  questionsId={newTest?.questionsId}
                  onAddQuestionId={id => handleAddQuestionId(id)}
                />
              )}
            </Grid>
            {(actionType === 'add' || actionType === 'edit') && (
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
                    {...newTest}
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
