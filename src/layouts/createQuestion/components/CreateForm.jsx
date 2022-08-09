import { useState } from 'react';
import { PropTypes } from 'prop-types';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
// import Grid from "@mui/material/Grid";
import MDBox from 'components/MDBox';
import AddImage from 'components/AddImage/AddImage';
import { v4 } from 'uuid';
// import ScreenImage from 'components/ScreenImage/ScreenImage';
import Icon from '@mui/material/Icon';
import MDButton from 'components/MDButton';
import { addQuestion } from '../../../store/thunk';
// import { uploadPhoto } from '../../../store/thunk';

function AnswerInput({ id, correct, text, onAddAnswer, onDeleteAnswer, onChangeAnswer }) {
  return (
    <MDBox width='100%'>
      <MDBox display='flex' alignItems='center'>
        <MDInput
          label='Answer'
          fullWidth
          value={text}
          onChange={e => onChangeAnswer(id, 'text', e.target.value)}
        />

        <AddImage
          label={`AnswerImage${id}`}
          // value={img}
          onChange={image => onChangeAnswer(id, 'img', image)}
        />

        <Icon
          fontSize='large'
          color={correct ? 'success' : 'secondary'}
          onClick={() => onChangeAnswer(id, 'correct', !correct)}
        >
          check
        </Icon>
        <Icon fontSize='large' color='secondary' onClick={() => onAddAnswer()}>
          add
        </Icon>
        <Icon fontSize='large' color='secondary' onClick={() => onDeleteAnswer(id)}>
          remove
        </Icon>
      </MDBox>
      {/* <MDBox display='flex' alignItems='center' mt={2} mb={2} gap={1}>
        {img && <ScreenImage key={v4()} img={img} onDelete={() => onChangeAnswer(id, 'img', '')} />}
      </MDBox> */}
    </MDBox>
  );
}

AnswerInput.propTypes = {
  id: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  // img: PropTypes.string.isRequired,
  onAddAnswer: PropTypes.func.isRequired,
  onDeleteAnswer: PropTypes.func.isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
};

function CreateForm({ questionNumber, categoryId, onClose }) {
  const [questionsForm, setQuestionsForm] = useState({
    id: 0,
    attachmentId: 0,
    categoryId,
    text: '',
    choices: [{ id: v4(), attachmentId: 0, correct: false, text: '' }],
  });

  const handleAddAnswer = () => {
    const newChoice = { id: v4(), attachmentId: 0, correct: false, text: '' };
    const data = [...questionsForm.choices];
    data.push(newChoice);
    setQuestionsForm({
      ...questionsForm,
      choices: data,
    });
  };

  const handleDeleteAnswer = choiceId => {
    const data = questionsForm.choices.filter(answer => answer.id !== choiceId);
    setQuestionsForm({ ...questionsForm, choices: data });
  };

  const handleChangeQuestion = text => {
    setQuestionsForm({ ...questionsForm, text });
  };

  const handleChangeAnswer = (id, name, value) => {
    const choices = questionsForm.choices.map(choice =>
      choice.id === id ? { ...choice, [name]: value } : choice,
    );

    setQuestionsForm({ ...questionsForm, choices });
  };

  const handleSave = question => {
    addQuestion(question);
    console.log(question);
  };

  return (
    <MDBox display='flex' flexDirection='column' gap={2}>
      <MDBox item xs={12}>
        <MDTypography variant='text' color='text' fontSize='5' fontWeight='bold'>
          Question № {questionNumber}
        </MDTypography>
      </MDBox>
      <MDBox item xs={5}>
        <MDBox display='flex' alignItems='center' gap={1}>
          <MDInput
            label='Question'
            fullWidth
            onChange={e => handleChangeQuestion(e.target.value)}
          />
          <AddImage
            label='questionImage'
            // onChange={img => uploadPhoto(img)}
            onChange={image => setQuestionsForm({ ...questionsForm, image })}
          />
        </MDBox>
        {/* <MDBox display='flex' alignItems='center' mt={2} gap={1}>
          {questionsForm?.image?.imageUrl && (
            <ScreenImage
              img={questionsForm?.image?.imageUrl}
              onDelete={() =>
                setQuestionsForm({
                  ...questionsForm,
                  image: {},
                })
              }
            />
          )}
        </MDBox> */}
      </MDBox>
      <MDBox item xs={5}>
        {questionsForm?.choices?.map(answer => (
          <MDBox key={answer.id} display='flex' alignItems='center' gap={1}>
            <AnswerInput
              {...answer}
              onAddAnswer={() => handleAddAnswer()}
              onDeleteAnswer={id => handleDeleteAnswer(id)}
              onChangeAnswer={(id, name, value) => handleChangeAnswer(id, name, value)}
            />
          </MDBox>
        ))}
      </MDBox>
      <MDBox width='100%' display='flex' alignItems='center' gap={1}>
        <MDButton fullWidth color='success' onClick={() => handleSave(questionsForm)}>
          Save
        </MDButton>
        <MDButton fullWidth color='secondary' onClick={onClose}>
          Cancel
        </MDButton>
      </MDBox>
    </MDBox>
  );
}

CreateForm.propTypes = {
  categoryId: PropTypes.number.isRequired,
  questionNumber: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateForm;
