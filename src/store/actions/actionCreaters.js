import {
  GET_CATEGORIES_PROCCESS,
  GET_CATEGORIES_SUCCESS,
  GET_QUESTIONS_PROCCESS,
  GET_QUESTIONS_SUCCESS,
  SET_QUESTION_PAGINATION,
  GET_USERS_PROCESS,
  GET_USERS_SUCCESS,
  SET_CURRENT_CATEGORIES,
  GET_PLANNING_TESTS_PROCCESS,
  GET_PLANNING_TESTS_SUCCESS,
  SET_CURRENT_TEST_DATA,
  SET_CURRENT_QUESTION,
  GET_QUIZ_PROCCESS,
  GET_QUIZ_SUCCESS,
  SET_QUIZ_PAGINATION,
  SET_USER_ANSWER,
  SET_CURRENT_USER,
} from './actionTypes';

export const getCategoriesProccess = () => ({
  type: GET_CATEGORIES_PROCCESS,
});

export const getCategoriesSuccess = categories => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const setCurrentCategories = currCategory => ({
  type: SET_CURRENT_CATEGORIES,
  payload: currCategory,
});

export const getQuestionsProccess = () => ({
  type: GET_QUESTIONS_PROCCESS,
});

export const getQuestionsSuccess = questions => ({
  type: GET_QUESTIONS_SUCCESS,
  payload: questions,
});

export const setCurrentQuestion = currentQustion => ({
  type: SET_CURRENT_QUESTION,
  payload: currentQustion,
});

export const setQuestionsPagination = pagination => ({
  type: SET_QUESTION_PAGINATION,
  payload: pagination,
});

export const getUsersProcess = () => ({
  type: GET_USERS_PROCESS,
});

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const getPlanningTestProccess = () => ({
  type: GET_PLANNING_TESTS_PROCCESS,
});

export const getPlanningTestSuccess = testData => ({
  type: GET_PLANNING_TESTS_SUCCESS,
  payload: testData,
});

export const setCurrentPlanningTestData = testData => ({
  type: SET_CURRENT_TEST_DATA,
  payload: testData,
});

export const getQuizProccess = () => ({
  type: GET_QUIZ_PROCCESS,
});

export const getQuizSuccess = quizs => ({
  type: GET_QUIZ_SUCCESS,
  payload: quizs,
});

export const setQuizPageNumber = pageNumber => ({
  type: SET_QUIZ_PAGINATION,
  payload: pageNumber,
});

export const setUserAnswer = answer => ({
  type: SET_USER_ANSWER,
  payload: answer,
});
