import { GET_MY_DATAS_PROCESS, GET_MY_DATAS_SUCCESS } from 'store/actions/actionTypes';

const initialState = {
  isLoading: false,
  profileData: [],
};

export const getMeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_DATAS_PROCESS:
      return { ...state, isLoading: true };

    case GET_MY_DATAS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profileData: action.payload,
      };

    default:
      return state;
  }
};
