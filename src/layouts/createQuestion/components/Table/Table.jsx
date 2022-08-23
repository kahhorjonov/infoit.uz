import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from 'store/thunk';
import PaginationTable from 'components/Pagination/Pagination';
import MDBox from 'components/MDBox';
import ModalComp from 'components/Modal/ModalComp';
import Spiner from 'components/Loader/Spiner';
import Form from '../Form';
import Styles from './Table.module.scss';

function Table({ questions, categoryId }) {
  const dispatch = useDispatch();
  const { category, questionsData } = useSelector(store => store);
  const [openId, setOpenId] = useState({});

  const handleOpen = data => setOpenId(data);
  const handleClose = () => setOpenId(null);

  const handleChangePage = pageNumber => {
    dispatch(
      getQuestions({
        categoryId: category?.currentCategory?.id,
        pagination: { ...questionsData?.pagination, pageNumber },
      }),
    );
  };
  const handleChangePageSize = pageSize => {
    dispatch(
      getQuestions({
        categoryId: category?.currentCategory?.id,
        pagination: { ...questionsData?.pagination, pageNumber: 1, pageSize },
      }),
    );
  };

  useEffect(() => {
    dispatch(
      getQuestions({
        categoryId: category?.currentCategory?.id,
        pagination: questionsData?.pagination,
      }),
    );
  }, [dispatch, category?.currentCategory]);

  return (
    <MDBox sx='100%'>
      <ModalComp status={openId?.id ? true : false} onClose={handleClose}>
        <Form
          formType='view'
          categoryId={categoryId}
          pagination={questionsData?.pagination}
          questionNumber={1}
          onClose={handleClose}
          questionData={openId}
        />
      </ModalComp>
      {questionsData.isLoading ? (
        <Spiner />
      ) : (
        <>
          <table className={Styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Question</th>
                <th>Right Answer</th>
              </tr>
            </thead>
            <tbody>
              {questions?.map((question, idx) => (
                <tr key={question.id} onClick={() => handleOpen(question)}>
                  <td>
                    {idx +
                      1 +
                      questionsData.pagination.pageSize * (questionsData.pagination.pageNumber - 1)}
                  </td>
                  <td>
                    <img src='' alt='' />
                    {question?.name}
                  </td>
                  <td>{question?.choices?.filter(choice => choice.correct)[0]?.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationTable
            dataCount={questionsData.count}
            pageNumber={questionsData.pagination.pageNumber}
            pageSize={questionsData.pagination.pageSize}
            onChangeCurrPage={page => handleChangePage(page)}
            onChangePageSize={pageSize => handleChangePageSize(pageSize)}
          />
        </>
      )}
    </MDBox>
  );
}

Table.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoryId: PropTypes.number,
};

export default Table;
