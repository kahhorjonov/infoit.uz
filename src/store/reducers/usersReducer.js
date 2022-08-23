import { GET_USERS_PROCESS, GET_USERS_SUCCESS } from 'store/actions/actionTypes';

const initialState = {
  isLoading: false,
  users: [],
  pagination: {
    pageNumber: 1,
    pageSize: 10,
  },
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_PROCESS:
      return { ...state, isLoading: true };

    case GET_USERS_SUCCESS:
      return { ...state, isLoading: false, users: action.payload };

    default:
      return state;
  }
};
