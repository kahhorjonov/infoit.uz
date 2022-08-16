import { axiosPublic } from 'services/axiosPublic';

// Services
import { getTokenFromStorage } from 'services/authService';

import {
  getCategoriesProccess,
  getCategoriesSuccess,
  getQuestionsSuccess,
  getQuestionsProccess,
  getUsersProcess,
  getUsersSuccess,
} from './actions/actionCreaters';

export const getCategories = () => async dispatch => {
  try {
    dispatch(getCategoriesProccess());
    const response = await axiosPublic.get('api/category/v1');

    dispatch(getCategoriesSuccess(response.data.objectKoinot));
  } catch (e) {
    // console.error(e);
  }
};

export const getQuestions = categoryId => async dispatch => {
  try {
    dispatch(getQuestionsProccess());
    const response = await axiosPublic.get(`api/question/v1?category=`);
    dispatch(getQuestionsSuccess(response.data.objectKoinot));
  } catch (e) {
    console.error(e);
  }
};

export const addQuestion = async question => {
  try {
    const response = await axiosPublic.post('api/question/v1/save', [question]);
  } catch (e) {
    // console.error(e);
  }
};

export const uploadPhoto = async photo => {
  try {
    const response = await axiosPublic.post(`koinot/attachment/v1/upload-photo`, photo, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch (e) {
    // console.log(e);
  }
};

export const fetchAllUsers = () => async dispatch => {
  const config = {
    headers: {
      Authorization: `Bearer ${getTokenFromStorage()}`,
    },
  };

  try {
    dispatch(getUsersProcess());
    const result = await axiosPublic.get(`api/user/v1`, config);
    console.log(result.data.objectKoinot);
    dispatch(getUsersSuccess(result.data.objectKoinot.content));
  } catch (error) {
    // console.log(error);
  }
};
