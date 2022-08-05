import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from 'store/thunk';
// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
// import Select from "components/Select/Select";

import MDButton from 'components/MDButton';
import { Icon } from '@mui/material';
import TableComp from 'components/Table/Table';
import ModalComp from 'components/Modal/ModalComp';
import CreateForm from './components/CreateForm';
// import DataTable from "examples/Tables/DataTable";

// Data
// import CategoriesTableData from "layouts/tables/data/CategoriesTableData";

// const categorySelect = [
//   { id: "1", label: "Category 1", val: "c1" },
//   { id: "2", label: "Category 2", val: "c2" },
//   { id: "3", label: "Category 3", val: "c3" },
//   { id: "4", label: "Category 4", val: "c4" },
// ];

// const KEYS = [
//   { id: "1", key: "text" },
//   { id: "1", key: "status" },
// ];

// const head = {
//   text: "Questions",
//   status: "Answers",
// };

function CreateQuestion() {
  const dispatch = useDispatch();
  const { category } = useSelector(state => state);
  const [createQStatus, setCreateQStatus] = useState(false);

  const handleOpen = () => setCreateQStatus(true);
  const handleClose = () => setCreateQStatus(false);

  console.log(category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <DashboardLayout>
      <ModalComp status={createQStatus} onClose={handleClose}>
        <CreateForm questionNumber={1} onClose={handleClose} />
      </ModalComp>
      <DashboardNavbar />
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
                  Questions Table
                </MDTypography>
                <MDBox display='flex' alignItems='center' gap={5}>
                  <select
                    style={{
                      width: '500%',
                      padding: '0.7rem 1rem',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      outline: 'none',
                      border: 'none',
                    }}
                  >
                    <option>Category</option>
                    <option>Fizika</option>
                    <option>Matematika</option>
                    <option>Ingliz tili</option>
                  </select>
                  <MDButton onClick={() => handleOpen()}>
                    <Icon>add</Icon>
                  </MDButton>
                </MDBox>
              </MDBox>
              <MDBox width='100%' p={3}>
                <TableComp />
                {/* <CreateForm questionNumber={1} /> */}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default CreateQuestion;
