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
  GET_USER_TESTS_PROCCESS,
  GET_USER_TESTS_SUCCESS,
  SET_USER_CURRENT_TEST_INFO,
  GET_MY_DATAS_PROCESS,
  GET_MY_DATAS_SUCCESS,
  GET_PLANNING_TESTS_FOR_USER_SUCCESS,
  GET_RESULT_TEST_SUCCESS,
  GET_CURRENT_QUIZ_TIME,
  GET_DASHBOARD_STATISTCS_PROCESS,
  GET_DASHBOARD_STATISTCS_SUCCESS,
  SEARCH_QUESTIONS,
  SEARCH_USERS,
  SEARCH_PLANNING_TESTS,
  GET_TEST_STATISTICS_TEST_ID_PROCESS,
  GET_TEST_STATISTICS_TEST_ID_SUCCESS,
  GET_STATISTICS_TABLE_PROCESS,
  GET_STATISTICS_TABLE_SUCCESS,
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

export const searchQuestions = search => ({
  type: SEARCH_QUESTIONS,
  payload: search,
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

export const searchUsers = search => ({
  type: SEARCH_USERS,
  payload: search,
});

export const getPlanningTestProccess = () => ({
  type: GET_PLANNING_TESTS_PROCCESS,
});

export const getPlanningTestSuccess = testData => ({
  type: GET_PLANNING_TESTS_SUCCESS,
  payload: testData,
});
export const getPlanningTestForUserSuccess = testData => ({
  type: GET_PLANNING_TESTS_FOR_USER_SUCCESS,
  payload: testData,
});

export const setCurrentPlanningTestData = testData => ({
  type: SET_CURRENT_TEST_DATA,
  payload: testData,
});

export const searchPlanningTests = search => ({
  type: SEARCH_PLANNING_TESTS,
  payload: search,
});

export const getQuizProccess = () => ({
  type: GET_QUIZ_PROCCESS,
});

export const getQuizSuccess = quizs => ({
  type: GET_QUIZ_SUCCESS,
  payload: quizs,
});

export const getCurrentQuizTime = time => ({
  type: GET_CURRENT_QUIZ_TIME,
  payload: time,
});

export const setQuizPageNumber = pageNumber => ({
  type: SET_QUIZ_PAGINATION,
  payload: pageNumber,
});

export const setUserAnswer = answer => ({
  type: SET_USER_ANSWER,
  payload: answer,
});

export const getResultTestSuccess = result => ({
  type: GET_RESULT_TEST_SUCCESS,
  payload: result,
});

export const getUserTestsProccess = () => ({
  type: GET_USER_TESTS_PROCCESS,
});

export const getUserTestsSuccess = tests => ({
  type: GET_USER_TESTS_SUCCESS,
  payload: tests,
});

export const setUserCurrentTestInfo = testInfo => ({
  type: SET_USER_CURRENT_TEST_INFO,
  payload: testInfo,
});

export const getMyDatasProcess = () => ({
  type: GET_MY_DATAS_PROCESS,
});

export const getMyDatasSuccess = profileData => ({
  type: GET_MY_DATAS_SUCCESS,
  payload: profileData,
});

export const getDashboardStatisticsProcess = () => ({
  type: GET_DASHBOARD_STATISTCS_PROCESS,
});

export const getDashboardStatisticsSuccess = statisticsData => ({
  type: GET_DASHBOARD_STATISTCS_SUCCESS,
  payload: statisticsData,
});

export const getStatisticsTestIdProcess = () => ({
  type: GET_TEST_STATISTICS_TEST_ID_PROCESS,
});

export const getStatisticsTestIdSuccess = testStatisticsTestId => ({
  type: GET_TEST_STATISTICS_TEST_ID_SUCCESS,
  payload: testStatisticsTestId,
});

export const getStatisticsTableProcess = () => ({
  type: GET_STATISTICS_TABLE_PROCESS,
});

export const getStatisticsTableSuccess = testStatisticsTestId => ({
  type: GET_STATISTICS_TABLE_SUCCESS,
  payload: testStatisticsTestId,
});
