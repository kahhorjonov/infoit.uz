import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_PROCCESS } from "store/actions/actionTypes";

const initialState = {
    isLoading: false,
    categories: []
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_PROCCESS:
            return { ...state, isLoading: true };

        case GET_CATEGORIES_SUCCESS:
            return { ...state, isLoading: false, categories: action.payload };

        default:
            return state
    }
}