import React, { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";

// @mui material components
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import CategoriesTableData from "layouts/tables/data/CategoriesTableData";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// @mui material components
// import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// Material Dashboard 2 React components
import MDInput from "components/MDInput";

// Authentication layout components

function Categories() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const { columns, rows } = CategoriesTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Authors Table
                </MDTypography>
                <MDButton variant="text" color="white" onClick={handleOpen}>
                  <Icon>add</Icon>&nbsp;add
                </MDButton>{" "}
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <BasicLayout>
            <Card>
              <MDBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput type="phone" label="Phone" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="password" label="Password" fullWidth />
                  </MDBox>
                  <MDBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MDTypography>
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth>
                      sign in
                    </MDButton>
                  </MDBox>
                  <MDBox mt={3} mb={1} textAlign="center">
                    <MDTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MDTypography
                        component={Link}
                        to="/authentication/sign-up"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MDTypography>
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </BasicLayout>
        </Modal>
      </div>
    </DashboardLayout>
  );
}

export default Categories;
