/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import { useState, useEffect } from "react";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";

// Services
import { fetchAllUsers } from "services/userService";

export default function data() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const result = await fetchAllUsers();
    setUsers(result.data.objectKoinot.content);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  users;
  const Name = ({ name, child }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{child}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Balance = ({ amount }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {amount}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "name", accessor: "name", width: "45%", align: "left" },
      { Header: "balance", accessor: "balance", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows:
      users &&
      users.map((user) => ({
        name: (
          <Name
            name={`${user.firstName && user.firstName} ${user.lastName && user.lastName}`}
            child={user.phoneNumber}
          />
        ),
        balance: <Balance amount={user.balance} />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDButton
            variant="text"
            color="dark"
            //  onClick={() => alert(user.id)}
          >
            <Icon>edit</Icon>&nbsp;edit
          </MDButton>
        ),
      })),
  };
}
