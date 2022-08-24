import {
  SET_CURRENT_TEST_DATA,
  GET_PLANNING_TESTS_PROCCESS,
  GET_PLANNING_TESTS_SUCCESS,
} from 'store/actions/actionTypes';

const initialState = {
  isLoading: false,
  planning: [],
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
        planning: action.payload.data.content,
        count: action.payload.data.totalPages,
        pagination: action.payload.pagination,
      };

    case SET_CURRENT_TEST_DATA:
      return { ...state, currentTestData: action.payload };

    default:
      return state;
  }
};
