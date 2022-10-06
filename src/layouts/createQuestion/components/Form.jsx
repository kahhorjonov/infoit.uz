import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { toast } from 'react-toastify';
import { PropTypes } from 'prop-types';
import { Icon } from '@mui/material';
import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';
import TextArea from 'components/TextArea/TextArea';
import ChoiceInput from 'components/ChoiceInput/ChoiceInput';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import { addQuestion, editQuestion } from '../../../store/thunk';
// import MDInput from 'components/MDInput';

function Form() {
  const navigate = useNavigate();
  const {
    state: { formType, categoryId },
  } = useLocation();
  const dispatch = useDispatch();
  const {
    questionsData: { pagination, currentQuestion, search },
  } = useSelector(store => store);
  const [questionsForm, setQuestionsForm] = useState({
    idx: formType !== 'add' && currentQuestion.id ? currentQuestion.id : '',
    text: formType !== 'add' && currentQuestion?.name ? currentQuestion?.name : '',
    categoryId:
      formType !== 'add' && currentQuestion?.category?.id
        ? currentQuestion?.category?.id
        : categoryId || '',
    attachmentId:
      formType !== 'add' && currentQuestion?.questionPhoto?.fileId
        ? currentQuestion.questionPhoto.fileId
        : '',
    questionPhoto:
      formType !== 'add' && currentQuestion?.questionPhoto?.fileName
        ? currentQuestion?.questionPhoto?.link
        : '',
    choices:
      formType !== 'add' && currentQuestion?.choices
        ? currentQuestion?.choices?.map(choice => ({
            idx: choice?.id,
            attachmentId: choice?.choicePhoto?.fileId,
            choicePhoto: choice?.choicePhoto?.link,
            correct: choice.correct,
            text: choice.text,
          }))
        : [{ idx: v4(), attachmentId: 0, choicePhoto: '', correct: false, text: '' }],
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
      : toast.error('To`g`ri javobni belgilang!');

  const handleTestQuestionWrite = () =>
    questionsForm?.text || questionsForm?.attachmentId ? true : toast.error('Savolni kiriting!');

  const handleCancel = () => {
    navigate('/admin/createQuestion');
  };

  const handleSave = question => {
    if (
      formType === 'add' &&
      handleTestQuestionWrite() === true &&
      handleTestChoiceChecked() === true
    ) {
      dispatch(addQuestion(question, categoryId, pagination, search));
      handleCancel();
    }

    if (formType === 'edit') {
      dispatch(
        editQuestion({ ...question, id: currentQuestion.id }, categoryId, pagination, search),
      );
      handleCancel();
    }
  };

  useEffect(() => {}, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox
        width='60%'
        bgColor='white'
        p='1.5rem'
        m='auto'
        borderRadius='1rem'
        display='flex'
        flexDirection='column'
        gap={2}
      >
        <MDBox display='flex' alignItems='center' justifyContent='space-between'>
          <MDTypography variant='text' color='text' fontSize='5' fontWeight='bold'>
            Savol: {formType === 'view' && questionsForm?.idx}
          </MDTypography>
          <MDButton fontSize='5' onClick={() => handleAddAnswer()}>
            <Icon>add</Icon>
          </MDButton>
        </MDBox>
        <MDBox xs={5}>
          <MDBox display='flex' alignItems='center' gap={1}>
            <TextArea
              formType={formType}
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
                formType={formType}
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
        <MDBox width='100%' display='flex' alignItems='center' justifyContent='end' gap={1}>
          <MDButton
            // sx={{ wdth: '10%' }}
            color='success'
            onClick={() => handleSave(questionsForm)}
          >
            Saqlash
          </MDButton>
          <MDButton color='secondary' onClick={() => handleCancel()}>
            Bekor qilish
          </MDButton>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

Form.propTypes = {
  formType: PropTypes.string,
  categoryId: PropTypes.number,
  onClose: PropTypes.func,
};

export default Form;
