import {
  GET_QUESTIONS_PROCCESS,
  GET_QUESTIONS_SUCCESS,
  SET_CURRENT_QUESTION,
} from 'store/actions/actionTypes';

const initialState = {
  isLoading: false,
  questions: [],
  count: null,
  pageable: {},
  currentQuestion: {},
  pagination: {
    pageNumber: 1,
    pageSize: 5,
  },
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS_PROCCESS:
      return { ...state, isLoading: true };

    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        count: action.payload.questions.totalPages,
        questions: action.payload.questions.content,
        pagination: action.payload.pagination,
      };

    case SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: action.payload };

    default:
      return state;
  }
};
