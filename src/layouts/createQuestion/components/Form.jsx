import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import TextArea from 'components/TextArea/TextArea';
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';
import ChoiceInput from 'components/ChoiceInput/ChoiceInput';
import { v4 } from 'uuid';
import MDButton from 'components/MDButton';
import { Icon } from '@mui/material';
import { toast } from 'react-toastify';
import { addQuestion, deleteQuestion, editQuestion, getQuestions } from '../../../store/thunk';

function Form({ formType, categoryId, onClose }) {
  const dispatch = useDispatch();
  const {
    questionsData: { pagination, currentQuestion, search },
    category: { currentCategory },
  } = useSelector(store => store);
  const [actionType, setActionType] = useState(formType);
  const [questionsForm, setQuestionsForm] = useState({
    idx: actionType !== 'add' && currentQuestion.id ? currentQuestion.id : '',
    text: actionType !== 'add' && currentQuestion?.name ? currentQuestion?.name : '',
    categoryId:
      actionType !== 'add' && currentQuestion?.category?.id
        ? currentQuestion?.category?.id
        : categoryId || '',
    attachmentId:
      actionType !== 'add' && currentQuestion?.questionPhoto?.fileId
        ? currentQuestion.questionPhoto.fileId
        : '',
    questionPhoto:
      actionType !== 'add' && currentQuestion?.questionPhoto?.fileName
        ? currentQuestion?.questionPhoto?.link
        : '',
    choices:
      actionType !== 'add' && currentQuestion?.choices
        ? currentQuestion?.choices?.map(choice => ({
            idx: choice?.id,
            attachmentId: choice?.choicePhoto?.fileId,
            choicePhoto: choice?.choicePhoto?.link,
            correct: choice.correct,
            text: choice.text,
          }))
        : [{ idx: v4(), attachmentId: 0, choicePhoto: '', correct: false, text: '' }],
  });

  // console.log(currentQuestion);

  const handleAddAnswer = () => {
    const newChoice = { idx: v4(), attachmentId: 0, choicePhoto: '', correct: false, text: '' };
    const choices = [...questionsForm.choices];
    choices.push(newChoice);

    setQuestionsForm({
      ...questionsForm,
      choices,
    });
  };

  const handleDeleteAnswer = choiceId => {
    const data = questionsForm.choices.filter(answer => answer.idx !== choiceId);
    setQuestionsForm({ ...questionsForm, choices: data });
  };

  const handleChangeAnswer = (idx, name, value) => {
    const choices = questionsForm.choices.map(choice =>
      choice.idx === idx
        ? { ...choice, [name]: value }
        : name === 'correct' && value === true
        ? { ...choice, correct: false }
        : choice,
    );
    // if (name === 'correct' && value === true) setCorrectChoiceId(idx);
    setQuestionsForm({ ...questionsForm, choices });
  };

  const handleAddImageAnswer = (idx, attachmentId, choicePhoto) => {
    const choices = questionsForm.choices.map(choice =>
      choice.idx === idx ? { ...choice, attachmentId, choicePhoto } : choice,
    );

    setQuestionsForm({ ...questionsForm, choices });
  };

  const handleTestChoiceChecked = () =>
    questionsForm?.choices?.filter(
      choice => choice.correct && (choice?.text || choice.attachmentId),
    )[0]
      ? true
      : toast.error('Error filling answers!');

  const handleTestQuestionWrite = () =>
    questionsForm?.text || questionsForm?.attachmentId
      ? true
      : toast.error('Error filling question!');

  const handleSave = question => {
    if (
      actionType === 'add' &&
      handleTestQuestionWrite() === true &&
      handleTestChoiceChecked() === true
    ) {
      dispatch(addQuestion(question, categoryId, pagination, search));
      onClose();
    }

    if (actionType === 'edit') {
      dispatch(
        editQuestion({ ...question, id: currentQuestion.id }, categoryId, pagination, search),
      );
      setActionType('view');
    }
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
    onClose();
  };

  return (
    <MDBox display='flex' flexDirection='column' gap={2}>
      <MDBox display='flex' alignItems='center' justifyContent='space-between'>
        <MDTypography variant='text' color='text' fontSize='5' fontWeight='bold'>
          Question: {formType === 'view' && questionsForm?.idx}
        </MDTypography>
        {actionType !== 'view' && (
          <MDButton fontSize='5' onClick={() => handleAddAnswer()}>
            <Icon>add</Icon>
          </MDButton>
        )}
      </MDBox>
      <MDBox xs={5}>
        <MDBox display='flex' alignItems='center' gap={1}>
          <TextArea
            formType={actionType}
            text={questionsForm?.text}
            image={questionsForm?.questionPhoto}
            onChangeText={text => setQuestionsForm({ ...questionsForm, text })}
            onAddImage={(attachmentId, questionPhoto) =>
              setQuestionsForm({ ...questionsForm, attachmentId, questionPhoto })
            }
            onDeleteImage={() =>
              setQuestionsForm({
                ...questionsForm,
                questionPhoto: '',
                attachmentId: null,
              })
            }
          />
        </MDBox>
      </MDBox>
      <MDBox xs={5} style={{ maxHeight: '50vh', overflowY: 'auto' }}>
        {questionsForm?.choices?.map(answer => (
          <MDBox key={answer.idx} display='flex' alignItems='center' gap={1}>
            <ChoiceInput
              {...answer}
              formType={actionType}
              onAddAnswer={() => handleAddAnswer()}
              onDeleteAnswer={idx => handleDeleteAnswer(idx)}
              onChangeText={(idx, name, value) => handleChangeAnswer(idx, name, value)}
              onAddImage={(idx, attachmentId, choicePhoto) =>
                handleAddImageAnswer(idx, attachmentId, choicePhoto)
              }
            />
          </MDBox>
        ))}
      </MDBox>
      {actionType === 'edit' || actionType === 'add' ? (
        <MDBox width='100%' display='flex' alignItems='center' gap={1}>
          <MDButton fullWidth color='success' onClick={() => handleSave(questionsForm)}>
            Save
          </MDButton>
          <MDButton
            fullWidth
            color='secondary'
            onClick={actionType === 'add' ? onClose : () => setActionType('view')}
          >
            Cancel
          </MDButton>
        </MDBox>
      ) : (
        <MDBox width='100%' display='flex' alignItems='center' gap={1}>
          <MDButton fullWidth color='success' onClick={() => setActionType('edit')}>
            Edit
          </MDButton>
          <MDButton fullWidth color='secondary' onClick={() => handleDelete(currentQuestion?.id)}>
            Delete
          </MDButton>
        </MDBox>
      )}
    </MDBox>
  );
}

Form.propTypes = {
  formType: PropTypes.string,
  categoryId: PropTypes.number,
  onClose: PropTypes.func,
};

export default Form;
