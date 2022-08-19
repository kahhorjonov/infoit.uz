import { GET_PLANNING_TESTS_PROCCESS, GET_PLANNING_TESTS_SUCCESS } from "store/actions/actionTypes";

const initialState = {
    isLoading: false,
    planning: [],
    count: null,
    pagination: {
        pageNumber: 1,
        pageSize: 10
    }
}

export const planningTestReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PLANNING_TESTS_PROCCESS:
            return { ...state, isLoading: true };

        case GET_PLANNING_TESTS_SUCCESS:
            return {
                ...state, isLoading: false,
                planning: action.payload.data.content,
                count: action.payload.data.totalPages,
                pagination: action.payload.pagination
            };

        default: return state;
    }
}

