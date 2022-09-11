import {
  GET_DASHBOARD_STATISTCS_PROCESS,
  GET_DASHBOARD_STATISTCS_SUCCESS,
} from 'store/actions/actionTypes';

const initialState = {
  isLoading: true,
  statisticsData: [],
};

export const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_STATISTCS_PROCESS:
      return { ...state, isLoading: true };

    case GET_DASHBOARD_STATISTCS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        statisticsData: action.payload,
      };

    default:
      return state;
  }
};
