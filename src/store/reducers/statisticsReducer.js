import {
  GET_DASHBOARD_STATISTCS_PROCESS,
  GET_DASHBOARD_STATISTCS_SUCCESS,
  GET_TEST_STATISTICS_TEST_ID_PROCESS,
  GET_TEST_STATISTICS_TEST_ID_SUCCESS,
} from 'store/actions/actionTypes';

const initialState = {
  isLoading: true,
  statisticsData: [],
  usersSolved: 0,
  count: 0,
  pagination: {
    pageNumber: 1,
    pageSize: 5,
  },
  testStatisticsTestIdData: [],
};

export const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_STATISTCS_PROCESS:
      return { ...state, isLoading: true };

    case GET_TEST_STATISTICS_TEST_ID_PROCESS:
      return { ...state, isLoading: true };

    case GET_DASHBOARD_STATISTCS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        statisticsData: action.payload,
      };

    case GET_TEST_STATISTICS_TEST_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        usersSolved: action.payload.testStatisticsIdData.totalElements,
        count: action.payload.testStatisticsIdData.totalPages,
        pagination: action.payload.pagination,
        testStatisticsTestIdData: action.payload.testStatisticsIdData.content,
      };

    default:
      return state;
  }
};
