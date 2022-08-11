import { axiosPublic } from "services/axiosPublic";
import { getCategoriesProccess, getCategoriesSuccess, getQuestionsProccess, getQuestionsSuccess } from "./actions/actionCreaters";

export const getCategories = () => async dispatch => {
    try {
        dispatch(getCategoriesProccess());
        const response = await axiosPublic.get('api/category/v1');

        dispatch(getCategoriesSuccess(response.data.objectKoinot));

    } catch (e) {
        console.error(e);
    }
}


export const getQuestions = (categoryId = "", pageNumber, pageSize) => async dispatch => {
    try {
        dispatch(getQuestionsProccess())
        const response = await axiosPublic.get(`api/question/v1?category=${categoryId}&page=${pageNumber - 1}&pageSize=${pageSize}`);
        dispatch(getQuestionsSuccess(response.data.objectKoinot));

    } catch (e) {
        console.error(e);
    }
};

export const addQuestion = (question, categoryId, pagination) => async dispatch => {
    try {
        const response = await axiosPublic.post('api/question/v1/save', [question]);
        console.log(response.data);
        dispatch(getQuestions(categoryId, pagination.pageNumber, pagination.pageSize));
    } catch (e) {
        console.error(e);
    }
}


export const uploadPhoto = async (photo) => {
    let image;
    const formBody = new FormData();
    formBody.append("photo", photo);

    try {
        const response = await axiosPublic.post(`koinot/attachment/v1/upload-photo`, formBody,
            { headers: { "Content-Type": "multipart/form-data" } }
        );

        // console.log(response.data.objectKoinot[0].fileId);
        image = { attechmentId: response.data.objectKoinot[0].fileId, imageUrl: response.data.objectKoinot[0].link };

    } catch (e) {
        console.error(e);
    }

    return image;

}


