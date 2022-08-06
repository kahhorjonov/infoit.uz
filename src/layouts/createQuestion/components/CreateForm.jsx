import { useState } from "react";
import { PropTypes } from "prop-types";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
// import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import AddImage from "components/AddImage/AddImage";
import { v4 } from "uuid";
import ScreenImage from "components/ScreenImage/ScreenImage";
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";

function AnswerInput({ id, status, text, img, onAddAnswer, onDeleteAnswer, onChangeAnswer }) {
  return (
    <MDBox width='100%'>
      <MDBox display='flex' alignItems='center'>
        <MDInput
          label='Answer'
          fullWidth
          value={text}
          onChange={e => onChangeAnswer(id, "text", e.target.value)}
        />
        {!img && <AddImage onChange={image => onChangeAnswer(id, "img", image)} />}
        <Icon
          fontSize='large'
          color={status ? "success" : "secondary"}
          onClick={() => onChangeAnswer(id, "status", !status)}
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
      <MDBox display='flex' alignItems='center' mt={2} mb={2} gap={1}>
        {img && <ScreenImage key={v4()} img={img} onDelete={() => onChangeAnswer(id, "img", "")} />}
      </MDBox>
    </MDBox>
  );
}

AnswerInput.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onAddAnswer: PropTypes.func.isRequired,
  onDeleteAnswer: PropTypes.func.isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
};

function CreateForm({ questionNumber, onClose }) {
  const [questionsForm, setQuestionsForm] = useState({
    question: "",
    image: "",
    answers: [{ id: v4(), status: false, text: "", img: "" }],
  });

  const handleAddAnswer = () => {
    const newAnswer = { id: v4(), status: false, text: "", img: "" };
    const data = [...questionsForm.answers];
    data.push(newAnswer);
    setQuestionsForm({
      ...questionsForm,
      answers: data,
    });
  };

  const handleDeleteAnswer = answerId => {
    const data = questionsForm.answers.filter(answer => answer.id !== answerId);
    setQuestionsForm({ ...questionsForm, answers: data });
  };

  const handleChangeQuestion = question => {
    setQuestionsForm({ ...questionsForm, question });
  };

  const handleAddImage = image => {
    // const data = [...questionsForm.image];
    // data.push(URL.createObjectURL(image.target.files[0]));
    setQuestionsForm({ ...questionsForm, image });
  };

  const handleDeleteImage = image => {
    const data = [...questionsForm.image];
    data.splice(data.indexOf(image), 1);
    setQuestionsForm({
      ...questionsForm,
      image: data,
    });
  };

  const handleChangeAnswer = (id, name, value) => {
    const newAnswer = questionsForm.answers.map(answer =>
      answer.id === id ? { ...answer, [name]: value } : answer,
    );

    // console.log(name, value);
    console.log(id, name, value);

    setQuestionsForm({ ...questionsForm, answers: newAnswer });
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
          <AddImage onChange={img => handleAddImage(img)} />
        </MDBox>
        <MDBox display='flex' alignItems='center' mt={2} gap={1}>
          {questionsForm?.image && (
            <ScreenImage img={questionsForm.image} onDelete={e => handleDeleteImage(e)} />
          )}
        </MDBox>
      </MDBox>
      <MDBox item xs={5}>
        {questionsForm?.answers?.map(answer => (
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
        <MDButton fullWidth color='success'>
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
  questionNumber: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateForm;
