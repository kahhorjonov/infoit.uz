const initialState = {
  quizs: [],
  count: 20,
  pagination: {
    pageNumber: 1,
    pageSize: 1,
  },
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return { ...state };

    default:
      return state;
  }
};
