import { GET_CATEGORIES_PROCCESS, GET_CATEGORIES_SUCCESS, GET_QUESTIONS_PROCCESS, GET_QUESTIONS_SUCCESS, SET_QUESTION_PAGINATION } from "./actionTypes";

export const getCategoriesProccess = () => ({
    type: GET_CATEGORIES_PROCCESS
});

export const getCategoriesSuccess = (categories) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: categories,
});


export const getQuestionsProccess = () => ({
    type: GET_QUESTIONS_PROCCESS
})

export const getQuestionsSuccess = (questions) => ({
    type: GET_QUESTIONS_SUCCESS,
    payload: questions,
})

export const setQuestionsPagination = (pagination) => ({
    type: SET_QUESTION_PAGINATION,
    payload: pagination
})