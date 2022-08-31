import {
  SET_CURRENT_TEST_DATA,
  GET_PLANNING_TESTS_PROCCESS,
  GET_PLANNING_TESTS_SUCCESS,
  GET_PLANNING_TESTS_FOR_USER_SUCCESS,
} from 'store/actions/actionTypes';

const initialState = {
  isLoading: true,
  forAdmin: [],
  forUser: [],
  count: null,
  currentTestData: {},
  pagination: {
    pageNumber: 1,
    pageSize: 5,
  },
};

export const planningTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANNING_TESTS_PROCCESS:
      return { ...state, isLoading: true };

    case GET_PLANNING_TESTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        forAdmin: action.payload.data.content,
        count: action.payload.data.totalPages,
        pagination: action.payload.pagination,
      };

    case GET_PLANNING_TESTS_FOR_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        forUser: action.payload.data.content,
        count: action.payload.data.totalPages,
        pagination: action.payload.pagination,
      };

    case SET_CURRENT_TEST_DATA:
      return { ...state, currentTestData: action.payload };

    default:
      return state;
  }
};
