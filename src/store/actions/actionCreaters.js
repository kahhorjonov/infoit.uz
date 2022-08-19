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

export const getPlanningTestProccess = () => ({
  type: GET_PLANNING_TESTS_PROCCESS,
})

export const getPlanningTestSuccess = (testData) => ({
  type: GET_PLANNING_TESTS_SUCCESS,
  payload: testData
})