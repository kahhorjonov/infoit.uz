import { axiosPublic } from "services/axiosPublic";
import { getCategoriesProccess, getCategoriesSuccess } from "./actions/actionCreaters";

export const getCategories = () => async dispatch => {

    try {
        dispatch(getCategoriesProccess());
        const response = await axiosPublic.get('api/category/v1');

        dispatch(getCategoriesSuccess(response.data.objectKoinot));

    } catch (e) {
        console.error(e);
    }

}