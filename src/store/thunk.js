import { axiosPublic } from 'services/axiosPublic';
import {
  getCategoriesProccess,
  getCategoriesSuccess,
  getQuestionsProccess,
  getQuestionsSuccess,
} from './actions/actionCreaters';

export const getCategories = () => async dispatch => {
  try {
    dispatch(getCategoriesProccess());
    const response = await axiosPublic.get('api/category/v1');

    dispatch(getCategoriesSuccess(response.data.objectKoinot));
  } catch (e) {
    console.error(e);
  }
};

export const getQuestions =
  (categoryId = '', pageNumber, pageSize) =>
  async dispatch => {
    try {
      dispatch(getQuestionsProccess());
      const response = await axiosPublic.get(
        `api/question/v1?category=${categoryId}&page=${pageNumber - 1}&pageSize=${pageSize}`,
      );
      dispatch(getQuestionsSuccess(response.data.objectKoinot));
    } catch (e) {
      toast.error(e);
    }
  };

export const addQuestion = async question => {
  try {
    const response = await axiosPublic.post('api/question/v1/save', [question]);

    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
};

export const fetchAllUsers = () => async dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${getTokenFromStorage()}`,
    },
  };
};

export const uploadPhoto = async photo => {
  console.log(photo);
  try {
    const response = await axiosPublic.post(`koinot/attachment/v1/upload-photo`, photo, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};
