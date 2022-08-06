import { GET_CATEGORIES_PROCCESS, GET_CATEGORIES_SUCCESS } from "./actionTypes";

export const getCategoriesProccess = () => ({
    type: GET_CATEGORIES_PROCCESS
});

export const getCategoriesSuccess = (categories) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: categories,
});
