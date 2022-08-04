import React, { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui material components
import Icon from "@mui/material/Icon";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import UsersTableData from "layouts/users/data/UsersTableData";

// Material Dashboard 2 React components
import MDInput from "components/MDInput";

function Users() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = useState(false);

  const { columns, rows } = UsersTableData();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
                  Users Table
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
          <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
            <Grid item xs={10} sm={10} md={8} lg={6} xl={6}>
              <Card>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <MDBox mb={2} sx={{ display: "flex" }}>
                      <MDInput
                        sx={{ marginRight: "5px" }}
                        type="text"
                        label="First Name"
                        fullWidth
                      />
                      <MDInput type="text" label="Last Name" fullWidth />
                    </MDBox>
                    <MDBox mb={2} sx={{ display: "flex" }}>
                      <MDInput
                        sx={{ marginRight: "5px" }}
                        type="date"
                        InputLabelProps={{ shrink: true, required: true }}
                        label="Date of Birth"
                        fullWidth
                      />
                      <MDInput type="text" label="Address" fullWidth />
                    </MDBox>
                    <MDBox mb={2} sx={{ display: "flex" }}>
                      <MDInput sx={{ marginRight: "5px" }} type="text" label="Region" fullWidth />
                      <MDInput type="text" label="Role" fullWidth />
                    </MDBox>
                    <MDBox mb={2} sx={{ display: "flex" }}>
                      <MDInput
                        sx={{ marginRight: "5px" }}
                        type="text"
                        label="Phone Number"
                        fullWidth
                      />
                      <MDInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        fullWidth
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </MDBox>
                    <MDBox
                      mt={4}
                      mb={1}
                      spacing={1}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MDButton sx={{ paddingX: "35px" }} variant="gradient" color="info">
                        Save
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </Modal>
      </div>
    </DashboardLayout>
  );
}

export default Users;
