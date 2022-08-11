import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, getQuestions } from 'store/thunk';
// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

import MDButton from 'components/MDButton';
import { Icon } from '@mui/material';
import ModalComp from 'components/Modal/ModalComp';
// import { SelectPicker } from 'rsuite';

import CategorySelect from '../../components/CategorySelect/CategorySelect';
import PaginationTable from '../../components/Pagination/Pagination';
import Spiner from '../../components/Loader/Spiner';
import Form from './components/Form';
import Table from './components/Table/Table';

function CreateQuestion() {
  const dispatch = useDispatch();
  const { category, questionsData } = useSelector(state => state);
  const [createQStatus, setCreateQStatus] = useState(false);
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 5,
  });
  const [categorys, setCategorys] = useState({
    id: '',
    child1: [],
  });
  const handleOpen = () => setCreateQStatus(true);
  const handleClose = () => setCreateQStatus(false);

  const handleChangePage = pageNumber => {
    setPagination({ ...pagination, pageNumber });
  };
  const handleChangePageSize = pageSize => {
    setPagination({ ...pagination, pageNumber: 1, pageSize });
  };

  // const categ = category.categories.map(c => ({
  //   label: c.nameUz,
  //   value: c.id,
  //   role: c.nameUz,
  // }));

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    setCategorys({ id: category?.categories[0]?.id, child1: category?.categories[0]?.children });
  }, [category]);

  useEffect(() => {
    dispatch(getQuestions(categorys.id, pagination.pageNumber, pagination.pageSize));
  }, [dispatch, categorys.id, pagination]);

  return (
    <DashboardLayout>
      <ModalComp status={createQStatus} onClose={handleClose}>
        <Form
          formType='add'
          categoryId={categorys?.id || 0}
          pagination={pagination}
          onClose={handleClose}
        />
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
                <MDBox display='flex' alignItems='center' gap={3}>
                  {/* <SelectPicker data={categ} groupBy='role' style={{ width: 224 }} /> */}

                  <CategorySelect
                    options={category.categories}
                    onChange={e =>
                      setCategorys({
                        id: JSON.parse(e).id,
                        child1: JSON.parse(e).child,
                      })
                    }
                  />

                  {categorys?.child1?.length > 0 && (
                    <CategorySelect
                      options={categorys.child1}
                      onChange={e =>
                        setCategorys({
                          ...categorys,
                          id: JSON.parse(e).id,
                          child2: JSON.parse(e).child,
                        })
                      }
                    />
                  )}
                  {categorys?.child2?.length > 0 && (
                    <CategorySelect
                      options={categorys.child2}
                      onChange={e =>
                        setCategorys({
                          ...categorys,
                          id: JSON.parse(e).id,
                          child3: JSON.parse(e).child,
                        })
                      }
                    />
                  )}
                  {categorys?.child3?.length > 0 && (
                    <CategorySelect
                      options={categorys.child3}
                      onChange={e =>
                        setCategorys({
                          // child4: JSON.parse(e).child,
                          ...categorys,
                          id: JSON.parse(e).id,
                        })
                      }
                    />
                  )}
                  <MDButton onClick={() => handleOpen()}>
                    <Icon>add</Icon>
                  </MDButton>
                </MDBox>
              </MDBox>
              <MDBox width='100%' p={3}>
                {questionsData.isLoading ? (
                  <Spiner />
                ) : (
                  <Table
                    questions={questionsData?.questions}
                    pagination={pagination}
                    categoryId={categorys?.id || 0}
                  />
                )}

                <PaginationTable
                  dataCount={questionsData.count}
                  pageNumber={pagination.pageNumber}
                  pageSize={pagination.pageSize}
                  onChangeCurrPage={page => handleChangePage(page)}
                  onChangePageSize={pageSize => handleChangePageSize(pageSize)}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default CreateQuestion;
