import { SET_QUESTION_PAGINATION } from "store/actions/actionTypes"

const initialState = {
    questionPagination: {
        page: 1,
        pageSize: 10
    }
}

export const paginationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTION_PAGINATION:
            return {
                ...state,
                questionPagination: action.payload
            }
        default:
            return state;
    }
}