import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_PROCCESS, SET_CURRENT_CATEGORIES } from "store/actions/actionTypes";

const initialState = {
    isLoading: false,
    categories: [],
    currentCategory: null
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_PROCCESS:
            return { ...state, isLoading: true };

        case GET_CATEGORIES_SUCCESS:
            return {
                ...state, isLoading: false,
                categories: action.payload,
                currentCategory: {
                    id: action.payload[0].id,
                    name: action.payload[0].nameUz
                }
            };

        case SET_CURRENT_CATEGORIES:
            return { ...state, currentCategory: action.payload };

        default:
            return state
    }
}