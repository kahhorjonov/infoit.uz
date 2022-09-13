import {
  GET_STATISTICS_TABLE_PROCESS,
  GET_STATISTICS_TABLE_SUCCESS,
} from 'store/actions/actionTypes';

const initialState = {
  isLoading: false,
  dashboardStatistics: [],
  count: 0,
  search: '',
  pagination: {
    pageNumber: 1,
    pageSize: 5,
  },
};

export const dashboardStatisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATISTICS_TABLE_PROCESS:
      return { ...state, isLoading: true };

    case GET_STATISTICS_TABLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dashboardStatistics: action.payload,
        // count: action.payload.users.totalPages,
        // pagination: action.payload.pagination,
      };

    default:
      return state;
  }
};
