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
  const {
    category: { currentCategory },
    questionsData: { isLoading, pagination, count, questions, currentQuestion, search },
  } = useSelector(store => store);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = pageNumber => {
    dispatch(
      getQuestions({
        search,
        categoryId: currentCategory?.id,
        pagination: { ...pagination, pageNumber },
      }),
    );
  };
  const handleChangePageSize = pageSize => {
    dispatch(
      getQuestions({
        search,
        categoryId: currentCategory?.id,
        pagination: { ...pagination, pageNumber: 1, pageSize },
      }),
    );
  };

  const handleChooseQuestion = question => {
    handleOpen();
    dispatch(setCurrentQuestion(question));
  };

  useEffect(() => {
    // currentCategory?.id &&
    dispatch(
      getQuestions({
        search,
        pagination,
        categoryId: currentCategory?.id || '',
      }),
    );
  }, [dispatch, currentCategory, search]);

  return (
    <MDBox sx='100%'>
      <ModalComp status={open} onClose={handleClose}>
        <Form
          formType='view'
          categoryId={currentCategory?.id || currentQuestion?.category?.id}
          questionNumber={1}
          onClose={handleClose}
          questionData={currentQuestion}
        />
      </ModalComp>
      {isLoading ? (
        <Spiner />
      ) : questions?.length > 0 ? (
        <>
          <table className={Styles.table}>
            <thead>
              <tr>
                <th>№</th>
                <th>Savollar</th>
                <th>To`g`ri javoblar</th>
              </tr>
            </thead>
            <tbody>
              {questions?.map((question, idx) => (
                <tr key={question.id} onClick={() => handleChooseQuestion(question)}>
                  <td>{idx + 1 + pagination.pageSize * (pagination.pageNumber - 1)}</td>
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
            dataCount={count}
            pageNumber={pagination.pageNumber}
            pageSize={pagination.pageSize}
            onChangeCurrPage={page => handleChangePage(page)}
            onChangePageSize={pageSize => handleChangePageSize(pageSize)}
          />
        </>
      ) : (
        <div>
          <h1>Savollar mavjud emas!</h1>
        </div>
      )}
    </MDBox>
  );
}

export default Table;
