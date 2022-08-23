import { axiosPublic } from 'services/axiosPublic';
import { toast } from 'react-toastify';
import {
  getCategoriesProccess,
  getCategoriesSuccess,
  getPlanningTestProccess,
  getPlanningTestSuccess,
  getQuestionsProccess,
  getQuestionsSuccess,
  getUsersProcess,
  setCurrentPlanningTestData,
} from './actions/actionCreaters';

const access_token = localStorage.getItem('token');

export const getCategories = () => async dispatch => {
  try {
    dispatch(getCategoriesProccess());
    const response = await axiosPublic.get('api/category/v1');
    dispatch(getCategoriesSuccess(response.data.objectKoinot));
  } catch (e) {
    toast.error(e);
  }
};

export const createNewCategory = data => async dispatch => {
  try {
    const response = await axiosPublic.post('api/category/v1', data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    toast.success(response.data.message);
    dispatch(getCategories());
  } catch (e) {
    toast.error(e);
  }
};

export const deleteCategory = categoryId => async dispatch => {
  try {
    const response = await axiosPublic.delete(`api/category/v1/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    toast.success(response.data.message);
    dispatch(getCategories());
  } catch (e) {
    toast.error(e);
  }
};

export const getQuestions =
  ({ categoryId, pagination }) =>
  async dispatch => {
    try {
      dispatch(getQuestionsProccess());
      const response = await axiosPublic.get(
        `api/question/v1?category=${categoryId || ''}&page=${pagination.pageNumber - 1}&size=${
          pagination.pageSize
        }`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );

      dispatch(getQuestionsSuccess({ questions: response.data.objectKoinot, pagination }));
    } catch (e) {
      toast.error(e);
    }
  };

export const addQuestion = (question, categoryId, pagination) => async dispatch => {
  try {
    const response = await axiosPublic.post('api/question/v1/save', [question]);
    toast.success(response.data.message);
    dispatch(getQuestions({ categoryId, pagination }));
  } catch (e) {
    toast.error(e);
  }
};

export const editQuestion = (question, categoryId, pagination) => async dispatch => {
  try {
    const response = await axiosPublic.post('api/question/v1/edit', question);
    toast.success(response.data.message);
    dispatch(getQuestions({ categoryId, pagination }));
  } catch (e) {
    toast.error(e);
  }
};

export const uploadPhoto = async (photo, type) => {
  let image;
  const formBody = new FormData();
  formBody.append('photo', photo);

  try {
    const response = await axiosPublic.post(
      `koinot/attachment/v1/upload-photo?AttachmentEnumTypeWhy=web&type=${type}`,
      formBody,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    // console.log(response.data.objectKoinot[0].fileId);
    image = {
      attechmentId: response.data.objectKoinot[0].fileId,
      imageUrl: response.data.objectKoinot[0].link,
    };
  } catch (e) {
    toast.error(e);
  }

  return image;
};

export const addPlanningTest = data => async dispatch => {
  try {
    dispatch(getQuestionsProccess());
    const response = await axiosPublic.post('api/test/v1/save', data);
    console.log(response);
    dispatch(getQuestionsSuccess({ categoryId: '', pagination: { pageNumber: 1, pageSize: 10 } }));
  } catch (e) {
    toast.error(e);
  }
};

export const getPlanningTest =
  ({ categoryId, pagination }) =>
  async dispatch => {
    try {
      dispatch(getPlanningTestProccess());
      const response = await axiosPublic.get(
        `api/test/v1/find-all?category=${categoryId}&page=${pagination.pageNumber - 1}&size=${
          pagination.pageSize
        }&search=`,
      );

      dispatch(getPlanningTestSuccess({ data: response.data.objectKoinot, pagination }));
    } catch (e) {
      toast.error(e);
    }
  };

export const getPlanningTestById = id => async dispatch => {
  try {
    const response = await axiosPublic.get(`api/test/v1/by-id?testId=${id}`);
    dispatch(setCurrentPlanningTestData(response.data.objectKoinot));
  } catch (e) {
    toast.error(e);
  }
};

export const getUsers =
  ({ pagination }) =>
  async dispatch => {
    try {
      dispatch(getUsersProcess());
      const response = await axiosPublic.get(
        `api/user/v1?page=${pagination.pageNumber - 1}size=${pagination.pageSize}`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        },
      );
      console.log(response.data);
    } catch (e) {
      toast.error(e);
    }
  };

export const sendCardDetails = async data => {
  try {
    const result = await axiosPublic.post(`api/payment/v1/card-info`, data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    console.log(result);
  } catch (ex) {
    console.log(ex);
  }
};
