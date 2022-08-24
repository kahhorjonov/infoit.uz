import { GET_USER_TESTS_PROCCESS, GET_USER_TESTS_SUCCESS } from 'store/actions/actionTypes';

const initialState = {
  isLoading: false,
  tests: [],
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

    default:
      return state;
  }
};
