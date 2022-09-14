import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getDashboardStatistics, getDashboardStatisticsTable } from 'store/thunk';

// @mui material components
import { Card, Grid } from '@mui/material';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
// import Footer from "examples/Footer";
import ComplexStatisticsCard from 'examples/ComplexStatisticsCard/index';

// Data
import DashboardStatistics from 'layouts/dashboard/DashboardStatistics';

function Dashboard() {
  const dispatch = useDispatch();
  const {
    statisticsData: { statisticsData },
  } = useSelector(store => store);

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
                    Testlar bo`yicha statistika
                  </MDTypography>
                </MDBox>
                <MDBox width='100%' p={3}>
                  <DashboardStatistics />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
