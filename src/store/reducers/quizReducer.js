import {
  GET_QUIZ_PROCCESS,
  GET_QUIZ_SUCCESS,
  SET_QUIZ_PAGINATION,
  SET_USER_ANSWER,
  GET_RESULT_TEST_SUCCESS,
  GET_CURRENT_QUIZ_TIME,
} from 'store/actions/actionTypes';

const userAnswersLS = JSON.parse(localStorage.getItem('userAnswers'));

const initialState = {
  quizs: [],
  result: [],
  count: 1,
  pageNumber: 1,
  currentQuiz: {},
  isLoading: false,
  userAnswers: userAnswersLS || {},
  correctAnswersCount: 0,
  duration: 0,
};

const handleAddAnswer = (state, payload) => {
  const currentAnswer = state?.userAnswers[payload.questionId];
  const userAnswers = {
    ...state.userAnswers,
    [payload.questionId]: currentAnswer
      ? { ...currentAnswer, questionChoiceId: payload.questionChoiceId }
      : payload,
  };

  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));

  return { ...state, userAnswers };
};

export const quizReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case GET_QUIZ_PROCCESS:
      return { ...state, isLoading: true };

    case GET_QUIZ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        quizs: action.payload,
        currentQuiz: action.payload[0],
        count: action.payload.length,
      };

    case GET_CURRENT_QUIZ_TIME:
      return { ...state, duration: action.payload };

    case SET_QUIZ_PAGINATION:
      return { ...state, pageNumber: action.payload, currentQuiz: state.quizs[action.payload - 1] };

    case SET_USER_ANSWER:
      return handleAddAnswer(state, action.payload);

    case GET_RESULT_TEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pageNumber: 1,
        quizs: action.payload.questions,
        count: action.payload.questionsCount,
        correctAnswersCount: action.payload.correctAnswersCount,
        currentQuiz: action.payload.questions[0],
      };

    default:
      return state;
  }
};
