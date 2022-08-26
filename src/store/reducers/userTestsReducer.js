import {
  GET_USER_TESTS_PROCCESS,
  GET_USER_TESTS_SUCCESS,
  SET_USER_CURRENT_TEST_INFO,
} from 'store/actions/actionTypes';

const currentTestInfo = JSON.parse(localStorage.getItem('currentTestInfo'));

const initialState = {
  isLoading: false,
  tests: [],
  currentTest: currentTestInfo || {},
};

const handleSetCurrentTestInfo = (state, payload) => {
  localStorage.setItem('currentTestInfo', JSON.stringify(payload));

  return { ...state, currentTest: payload };
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
      return handleSetCurrentTestInfo(state, action.payload);

    default:
      return state;
  }
};
