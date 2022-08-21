import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from 'store/thunk';
import MDBox from 'components/MDBox';
import Spiner from 'components/Loader/Spiner';
import PaginationTable from 'components/Pagination/Pagination';
import Styles from '../TestTable.module.scss';

function TestTable({ onAddQuestionId }) {
  const dispatch = useDispatch();
  const { category, questionsData } = useSelector(store => store);

  const handleChangeCurrPage = pageNumber => {
    dispatch(
      getQuestions({
        categoryId: category.currentCategory.id,
        pagination: { ...questionsData.pagination, pageNumber },
      }),
    );
  };

  const handleChangePageSize = pageSize => {
    dispatch(
      getQuestions({
        categoryId: category.currentCategory.id,
        pagination: { ...questionsData.pagination, pageNumber: 1, pageSize },
      }),
    );
  };

  useEffect(() => {
    dispatch(
      getQuestions({
        categoryId: category.currentCategory.id,
        pagination: questionsData.pagination,
      }),
    );
  }, [dispatch, category.currentCategory.id]);

  return (
    <MDBox bgColor='white' coloredShadow='dark' borderRadius='xl' p={3}>
      {questionsData.isLoading ? (
        <Spiner />
      ) : (
        <>
          <table className={Styles.testTable}>
            <thead>
              <tr>
                <th> </th>
                <th>№</th>
                <th>Questions</th>
              </tr>
            </thead>
            <tbody>
              {questionsData?.questions?.map((test, idx) => (
                <tr key={test.id}>
                  <td>
                    <input type='checkbox' onChange={e => onAddQuestionId(test.id)} />
                  </td>
                  <td>
                    {idx +
                      1 +
                      questionsData.pagination.pageSize * (questionsData.pagination.pageNumber - 1)}
                  </td>
                  <td>{test.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationTable
            dataCount={questionsData.count}
            pageNumber={questionsData.pagination.pageNumber}
            pageSize={questionsData.pagination.pageSize}
            onChangeCurrPage={pageNumber => handleChangeCurrPage(pageNumber)}
            onChangePageSize={pageSize => handleChangePageSize(pageSize)}
          />
        </>
      )}
    </MDBox>
  );
}

TestTable.propTypes = {
  onAddQuestionId: PropTypes.func,
};

export default TestTable;
