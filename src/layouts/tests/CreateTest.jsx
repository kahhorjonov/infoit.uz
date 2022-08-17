import { useState } from 'react';
// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
// import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from 'layouts/dashboard/components/OrdersOverview';
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';
import DropDown from 'components/DropDown/DropDown';
import { Icon } from '@mui/material';
import TestTable from './components/TestTable/TestsTable';
import CreateTestForm from './components/CreateTestForm/CreateTestForm';
import PlanningTestTable from './components/PlanningTestsTable/PlanningTestTable';

function CreateTest() {
  // const { sales, tasks } = reportsLineChartData;
  const [createTestData, setCreateTestData] = useState({
    category: 'Category Name',
    date: '',
    count: '',
    testsId: [],
  });
  // const [error, setError] = useState({ category: false, date: false, count: false });

  const handleChangeTestData = (name, value) => {
    setCreateTestData({
      ...createTestData,
      [name]: value,
    });
  };

  const handleSave = testData => {
    testData?.category && testData?.date && testData?.count ? null : '';
  };

  const handleCancel = () => {
    const data = { ...createTestData, category: 'Category Name', date: '', count: '' };
    setCreateTestData(data);
  };

  const handleAddTestId = id => {
    const ids = [...createTestData.testsId];
    ids.push(id);
    setCreateTestData({ ...createTestData, testsId: ids });
  };

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
            <MDButton onClick={() => {}}>
              <Icon>add</Icon>
            </MDButton>
          </MDBox>
        </MDBox>

        <MDBox mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <PlanningTestTable />
              {/* <TestTable onAddTestId={id => handleAddTestId(id)} /> */}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox
                width='100%'
                height='100%'
                bgColor='white'
                coloredShadow='dark'
                borderRadius='xl'
                p={3}
              >
                <CreateTestForm />
              </MDBox>
              {/* <OrdersOverview /> */}
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default CreateTest;
