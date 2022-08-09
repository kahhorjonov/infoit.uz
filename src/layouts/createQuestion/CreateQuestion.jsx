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
// import Select from "components/Select/Select";

import MDButton from 'components/MDButton';
import { Icon } from '@mui/material';
import TableComp from 'components/Table/Table';
import ModalComp from 'components/Modal/ModalComp';

import CategorySelect from '../../components/CategorySelect/CategorySelect';
import PaginationTable from '../../components/Pagination/Pagination';
import { setQuestionsPagination } from '../../store/actions/actionCreaters';
import CreateForm from './components/CreateForm';

// import DataTable from "examples/Tables/DataTable";

function CreateQuestion() {
  const dispatch = useDispatch();
  const { category, questionsData } = useSelector(state => state);
  const [createQStatus, setCreateQStatus] = useState(false);
  const [categorys, setCategorys] = useState({
    id: category.categories[0]?.id,
    child1: category.categories[0]?.children,
  });
  const handleOpen = () => setCreateQStatus(true);
  const handleClose = () => setCreateQStatus(false);

  const handleChangePage = page => {
    dispatch(setQuestionsPagination({ ...questionsData.pagination, page }));
  };
  const handleChangePageSize = pageSize => {
    dispatch(setQuestionsPagination({ ...questionsData.pagination, page: 1, pageSize }));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    setCategorys({ id: category?.categories[0]?.id, child1: category?.categories[0]?.children });
  }, [category]);

  useEffect(() => {
    dispatch(getQuestions(categorys?.id));
  }, [dispatch, categorys.id]);

  return (
    <DashboardLayout>
      <ModalComp status={createQStatus} onClose={handleClose}>
        <CreateForm categoryId={categorys?.id || 0} questionNumber={1} onClose={handleClose} />
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
                {!questionsData.isLoading && <TableComp questions={questionsData?.questions} />}

                <PaginationTable
                  dataCount={questionsData.count}
                  pageNumber={questionsData.pagination.page}
                  pageSize={questionsData.pagination.pageSize}
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
