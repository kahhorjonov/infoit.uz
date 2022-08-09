import { GET_QUESTIONS_PROCCESS, GET_QUESTIONS_SUCCESS } from "store/actions/actionTypes"

const initialState = {
    isLoading: false,
    questions: [],
    count: null,
    pagination: {
        page: 1,
        pageSize: 10,
    },
    pageable: {}
}


export const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTIONS_PROCCESS:
            return { ...state, isLoading: true }

        case GET_QUESTIONS_SUCCESS:
            return { ...state, isLoading: false, questions: action.payload.content, count: action.payload.size, pageable: action.payload.pageable }

        default: return state;
    }
}