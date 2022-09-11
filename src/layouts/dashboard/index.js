import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getDashboardStatistics } from 'store/thunk';

// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
// import Footer from "examples/Footer";
import ReportsBarChart from 'examples/Charts/BarCharts/ReportsBarChart';
import ReportsLineChart from 'examples/Charts/LineCharts/ReportsLineChart';
import ComplexStatisticsCard from 'examples/ComplexStatisticsCard/index';

// Data
import reportsBarChartData from 'layouts/dashboard/data/reportsBarChartData';
import reportsLineChartData from 'layouts/dashboard/data/reportsLineChartData';

// Dashboard components
import Projects from 'layouts/dashboard/components/Projects';
import OrdersOverview from 'layouts/dashboard/components/OrdersOverview';

function Dashboard() {
  const dispatch = useDispatch();
  const {
    statisticsData: { statisticsData },
  } = useSelector(store => store);

  const { sales, tasks } = reportsLineChartData;

  useEffect(() => {
    dispatch(getDashboardStatistics());
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color='dark'
                icon='quiz'
                title='Testlar'
                count={statisticsData?.testCount}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon='leaderboard'
                title='Yechilgan Testlar'
                count={statisticsData?.solvedTests}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color='success'
                icon='shopping_cart'
                title='Sotib olingan testlar'
                count={statisticsData?.boughtTests}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color='primary'
                icon='person_add'
                title='Foydalanuvchilar'
                count={statisticsData?.userCount}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color='info'
                  title='website views'
                  description='Last Campaign Performance'
                  date='campaign sent 2 days ago'
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color='success'
                  title='daily sales'
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date='updated 4 min ago'
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color='dark'
                  title='completed tasks'
                  description='Last Campaign Performance'
                  date='just updated'
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
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

export default Dashboard;
