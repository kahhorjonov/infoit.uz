import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions, deleteQuestion } from 'store/thunk';
import { setCurrentQuestion } from 'store/actions/actionCreaters';
import PaginationTable from 'components/Pagination/Pagination';
import MDBox from 'components/MDBox';
import ModalComp from 'components/Modal/ModalComp';
import MDButton from 'components/MDButton';
import Spiner from 'components/Loader/Spiner';
import Latex from 'react-latex';
import Styles from './Table.module.scss';

function Table() {
  const navigate = useNavigate();
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

  const handleDelete = async testId => {
    const response = await deleteQuestion(testId);
    response === 200 &&
      dispatch(
        getQuestions({
          search: '',
          categoryId: currentCategory?.id,
          pagination: { ...pagination, pageNumber: 1 },
        }),
      );
    handleClose();
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
        <div className='mt-2'>
          <h2 className='mb-3'>
            <span className='font-bold'>Savol:</span> {currentQuestion?.id}
          </h2>
          <div className='flex justify-between'>
            <p className='text-base'>
              <Latex>{currentQuestion?.name}</Latex>
            </p>
            {currentQuestion?.questionPhoto && (
              <img
                src={currentQuestion?.questionPhoto?.link}
                alt={currentQuestion?.questionPhoto?.fileName}
                className='max-w-150-px'
              />
            )}
          </div>
          <div>
            {currentQuestion?.choices?.map(choice => (
              <div
                className={`border-b mt-4 flex items-center text-base ${
                  choice?.correct ? 'border-green text-green' : ''
                }`}
              >
                {choice?.choicePhoto && (
                  <img
                    src={choice?.choicePhoto?.link}
                    alt={choice?.choicePhoto?.fileName}
                    className='max-w-100-px'
                  />
                )}
                <span className='ml-3'>
                  <Latex>{choice?.text}</Latex>
                </span>
              </div>
            ))}
          </div>
          <MDBox
            width='100%'
            m='2rem 0 0 0'
            display='flex'
            alignItems='center'
            justifyContent='end'
            gap={1}
          >
            <MDButton
              color='success'
              onClick={() =>
                navigate('/admin/questionForm', {
                  state: { formType: 'edit', categoryId: currentCategory?.id },
                })
              }
            >
              Tahrirlash
            </MDButton>
            <MDButton color='secondary' onClick={() => handleDelete(currentQuestion?.id)}>
              O`chirish
            </MDButton>
          </MDBox>
        </div>
        {/* <Form
          formType='view'
          categoryId={currentCategory?.id || currentQuestion?.category?.id}
          onClose={handleClose}
        /> */}
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
                    {/* <img src='' alt='' /> */}
                    <span>
                      <Latex>{question?.name}</Latex>
                    </span>
                  </td>
                  <td>
                    <Latex>{question?.choices?.filter(choice => choice.correct)[0]?.text}</Latex>
                  </td>
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
