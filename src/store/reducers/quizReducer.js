import {
  GET_QUIZ_PROCCESS,
  GET_QUIZ_SUCCESS,
  SET_QUIZ_PAGINATION,
  SET_USER_ANSWER,
} from 'store/actions/actionTypes';

const userAnswersLS = JSON.parse(localStorage.getItem('userAnswers'));

const initialState = {
  quizs: [],
  count: 1,
  pageNumber: 1,
  currentQuiz: {},
  currentTest: {},
  isLoading: false,
  userAnswers: userAnswersLS || {},
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

    case SET_QUIZ_PAGINATION:
      return { ...state, pageNumber: action.payload, currentQuiz: state.quizs[action.payload - 1] };

    case SET_USER_ANSWER:
      return handleAddAnswer(state, action.payload);

    default:
      return state;
  }
};
