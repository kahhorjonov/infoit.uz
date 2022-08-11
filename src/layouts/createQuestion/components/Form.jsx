import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import TextArea from 'components/TextArea/TextArea';
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';
import ChoiceInput from 'components/ChoiceInput/ChoiceInput';
import { v4 } from 'uuid';
import MDButton from 'components/MDButton';
import { addQuestion } from '../../../store/thunk';

function Form({ formType, questionData, categoryId, pagination, onClose }) {
  const dispatch = useDispatch();
  const [actionType, setActionType] = useState(formType);
  const [questionsForm, setQuestionsForm] = useState({
    idx: actionType !== 'add' && questionData.id ? questionData.id : '',
    text: actionType !== 'add' && questionData?.name ? questionData?.name : '',
    categoryId,
    attachmentId:
      actionType !== 'add' && questionData?.questionPhoto?.fileId
        ? questionData.questionPhoto.fileId
        : 0,
    questionPhoto:
      actionType !== 'add' && questionData?.questionPhoto?.fileName
        ? questionData?.questionPhoto?.fileName
        : '',
    choices:
      actionType !== 'add' && questionData?.choices
        ? questionData?.choices?.map(choice => ({
            idx: choice?.id,
            attachmentId: choice?.choicePhoto?.fileId,
            choicePhoto: choice?.choicePhoto?.fileName,
            correct: choice.correct,
            text: choice.text,
          }))
        : [ { idx: v4(), attachmentId: 0, choicePhoto: '', correct: false, text: '' }],
  });

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
      choice.idx === idx ? { ...choice, [name]: value } : choice,
    );

    setQuestionsForm({ ...questionsForm, choices });
  };

  const handleAddImageAnswer = (idx, attachmentId, choicePhoto) => {
    const choices = questionsForm.choices.map(choice =>
      choice.idx === idx ? { ...choice, attachmentId, choicePhoto } : choice,
    );

    setQuestionsForm({ ...questionsForm, choices });
  };

  const handleSave = question => {
    dispatch(addQuestion(question, categoryId, pagination));
  };

  const handleDelete = () => {
    onClose();
  };

  return (
    <MDBox display='flex' flexDirection='column' gap={2}>
      <MDBox item xs={12}>
        <MDTypography variant='text' color='text' fontSize='5' fontWeight='bold'>
          Question: {formType === 'view' && questionsForm.idx}
        </MDTypography>
      </MDBox>
      <MDBox item xs={5}>
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
                attechmentId: null,
              })
            }
          />
        </MDBox>
      </MDBox>
      <MDBox item xs={5}>
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
          <MDButton fullWidth color='secondary' onClick={() => handleDelete()}>
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
  questionData: PropTypes.object,
  pagination: PropTypes.object,
  onClose: PropTypes.func,
};

export default Form;
