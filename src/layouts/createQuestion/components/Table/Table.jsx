import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from 'store/thunk';
import { setCurrentQuestion } from 'store/actions/actionCreaters';
import PaginationTable from 'components/Pagination/Pagination';
import MDBox from 'components/MDBox';
import ModalComp from 'components/Modal/ModalComp';
import Spiner from 'components/Loader/Spiner';
import Form from '../Form';
import Styles from './Table.module.scss';

function Table() {
  const dispatch = useDispatch();
  const { category, questionsData } = useSelector(store => store);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const handleChooseQuestion = question => {
    handleOpen();
    dispatch(setCurrentQuestion(question));
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
      <ModalComp status={open} onClose={handleClose}>
        <Form
          formType='view'
          categoryId={category?.currentCategory?.id || questionsData?.currentQuestion?.category?.id}
          pagination={questionsData?.pagination}
          questionNumber={1}
          onClose={handleClose}
          questionData={questionsData?.currentQuestion}
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
              {questionsData?.questions?.map((question, idx) => (
                <tr key={question.id} onClick={() => handleChooseQuestion(question)}>
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

export default Table;
