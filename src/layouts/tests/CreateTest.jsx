import { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { Icon } from "@mui/material";
import TestTable from "./components/TestTable/TestsTable";

function CreateTest() {
  // const { sales, tasks } = reportsLineChartData;
  const [createTestData, setCreateTestData] = useState({
    category: "Category Name",
    date: "",
    count: "",
    testsId: [],
  });
  // const [error, setError] = useState({ category: false, date: false, count: false });

  const handleChangeTestData = (name, value) => {
    setCreateTestData({
      ...createTestData,
      [name]: value,
    });
  };

  const handleSave = (testData) => {
    testData?.category && testData?.date && testData?.count ? null : "";
  };

  const handleCancel = () => {
    const data = { ...createTestData, category: "Category Name", date: "", count: "" };
    setCreateTestData(data);
  };

  const handleAddTestId = (id) => {
    const ids = [...createTestData.testsId];
    ids.push(id);
    setCreateTestData({ ...createTestData, testsId: ids });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={100}>
            <MDBox p={2} variant="gradient" coloredShadow="light" borderRadius="xl">
              <MDBox
                variant="gradient"
                bgColor="dark"
                color="white"
                coloredShadow="dark"
                borderRadius="xl"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="5rem"
                height="5rem"
                mt={-5}
              >
                <Icon fontSize="large" color="inherit">
                  category
                </Icon>
              </MDBox>
              <MDBox textAlign="right" lineHeight={1.25} mt={-5} mb={2}>
                <MDTypography variant="button" fontWeight="light" color="text">
                  Create Test
                </MDTypography>
                <MDTypography variant="h4" height="2rem">
                  {createTestData.category}
                </MDTypography>
              </MDBox>
              <Grid container spacing={1} width="100%" mt={2} justifyContent="space-between">
                <Grid item xs={12} sm={6} lg={3}>
                  <MDInput
                    label="Category"
                    fullWidth
                    required
                    // error={!createTestData.category ? true : false}
                    onChange={(e) => handleChangeTestData("category", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDInput
                    placeholder="Date"
                    type="datetime-local"
                    fullWidth
                    required
                    // error={!createTestData.date ? true : false}
                    onChange={(e) => handleChangeTestData("date", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <MDInput
                    label="Count"
                    type="number"
                    fullWidth
                    required
                    // error={!createTestData.count ? true : false}
                    onChange={(e) => handleChangeTestData("count", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={1.5}>
                  <MDButton
                    variant="gradient"
                    color="info"
                    fullWidth
                    onClick={() => handleSave(createTestData)}
                  >
                    Save
                  </MDButton>
                </Grid>
                <Grid item xs={12} sm={6} lg={1.5}>
                  <MDButton
                    variant="gradient"
                    color="warning"
                    fullWidth
                    onClick={() => handleCancel()}
                  >
                    Cancel
                  </MDButton>
                </Grid>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
        {/* <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox> */}
        <MDBox mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <TestTable onAddTestId={(id) => handleAddTestId(id)} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default CreateTest;
