import {
  GET_USERS_PROCESS,
  GET_USERS_SUCCESS,
  SET_CURRENT_USER,
  SEARCH_USERS,
} from 'store/actions/actionTypes';

const initialState = {
  isLoading: false,
  users: [],
  count: 0,
  search: '',
  pagination: {
    pageNumber: 1,
    pageSize: 5,
  },
  currentUser: {},
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_PROCESS:
      return { ...state, isLoading: true };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload.users.content,
        count: action.payload.users.totalPages,
        pagination: action.payload.pagination,
      };

    case SEARCH_USERS:
      return { ...state, search: action.payload };

    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};
