import {
  GET_USER_TESTS_PROCCESS,
  GET_USER_TESTS_SUCCESS,
  SET_USER_CURRENT_TEST_INFO,
} from 'store/actions/actionTypes';

const initialState = {
  isLoading: false,
  tests: [],
  currentTest: {},
};

export const userTestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_TESTS_PROCCESS:
      return { ...state, isLoading: true };

    case GET_USER_TESTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tests: action.payload.tests,
      };

    case SET_USER_CURRENT_TEST_INFO:
      return { ...state, currentTest: action.payload };

    default:
      return state;
  }
};
