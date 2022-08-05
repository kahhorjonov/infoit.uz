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
import { fetchAllCategories } from "services/categoryService";

export default function data() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const {
      data: { objectKoinot },
    } = await fetchAllCategories();
    setCategories(objectKoinot);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const Category = ({ name, child }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{child}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Tests = ({ amount }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {amount}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "category", accessor: "category", width: "45%", align: "left" },
      { Header: "tests", accessor: "tests", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows:
      categories &&
      categories.map((category) => ({
        category: <Category name={category.nameUz} child={category.children[0].nameUz} />,
        tests: <Tests amount="1561" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDButton
            variant="text"
            color="dark"
            // onClick={() => alert(category.id)}
          >
            <Icon>edit</Icon>&nbsp;edit
          </MDButton>
        ),
      })),
  };
}
