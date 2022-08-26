import { axiosPublic } from 'services/axiosPublic';
import { toast } from 'react-toastify';
import {
  getCategoriesProccess,
  getCategoriesSuccess,
  getMyDatasProcess,
  getMyDatasSuccess,
  getPlanningTestProccess,
  getPlanningTestSuccess,
  getQuestionsProccess,
  getQuestionsSuccess,
  getQuizProccess,
  getQuizSuccess,
  getUsersProcess,
  getUsersSuccess,
  getUserTestsProccess,
  getUserTestsSuccess,
  setCurrentPlanningTestData,
  setUserAnswer,
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
  ({ role = '', pagination }) =>
  async dispatch => {
    try {
      dispatch(getUsersProcess());
      const response = await axiosPublic.get(
        `api/user/v1?page=${pagination.pageNumber - 1}&role=${role}&size=${
          pagination.pageSize
        }&sortType=DESC`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        },
      );
      dispatch(getUsersSuccess({ users: response.data.objectKoinot, pagination }));
    } catch (e) {
      toast.error(e);
    }
  };

export const addUser =
  ({ user, pagination, role }) =>
  async dispatch => {
    try {
      const response = await axiosPublic.post(`/api/user/v1/register`, user, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      console.log(response.data);

      dispatch(getUsers({ role, pagination }));
    } catch (e) {
      toast.error(e);
    }
  };

export function sendCardDetails(data) {
  return axiosPublic.post(`api/payment/v1/card-info`, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}

export const confirmationPayment = async code => {
  try {
    const response = await axiosPublic.post(
      `api/payment/v1/confirmation?confirmationCode=${code}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    console.log(response);
    toast.success(response.data.message);
    toast.success('Testni `Mening testlarim` bo`limidan topishingiz mumkin');
    setTimeout(() => {
      window.location.replace('/');
    }, 2500);
  } catch (e) {
    toast.error(e);
  }
};

export const getQuizTest = async testId => {
  try {
    const response = await axiosPublic.get(
      `api/question/v1/get-with-all-question?testId=${testId}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    return response;
  } catch (error) {
    return error.response.data;
  }
};

export const getQuizs = testId => async dispatch => {
  try {
    dispatch(getQuizProccess());
    const response = await axiosPublic.get(
      `api/question/v1/get-with-all-question?testId=${testId}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    dispatch(getQuizSuccess(response.data.objectKoinot));
  } catch (e) {
    //   console.log(e?.response?.data?.message);
    //   toast.error(e?.response?.data?.message);
  }
};

export const sendAnswer =
  ({ questionId, questionChoiceId }) =>
  async dispatch => {
    try {
      const response = await axiosPublic.post(
        `api/question/v1/check-single-question?deviceType=WEB&questionChoiceId=${parseInt(
          questionChoiceId,
          10,
        )}&questionId=${parseInt(questionId, 10)}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      console.log(response.data);
      dispatch(setUserAnswer({ questionId, questionChoiceId }));
    } catch (e) {
      toast.error(e);
    }
  };

export const getUserTests = isSolved => async dispatch => {
  try {
    dispatch(getUserTestsProccess());
    const response = await axiosPublic.get(`api/test/v1/user-tests?isSolvedTests=${isSolved}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    dispatch(getUserTestsSuccess({ tests: response.data.objectKoinot, isSolved }));
  } catch (e) {
    toast.error(e);
  }
};

export const getMe = () => async dispatch => {
  try {
    dispatch(getMyDatasProcess());
    const response = await axiosPublic.get('api/auth/v1/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    dispatch(getMyDatasSuccess(response.data.objectKoinot));
  } catch (e) {
    toast.error(e);
  }
};

export const updateMe = async data => {
  try {
    const response = await axiosPublic.post('api/auth/v1/edit-me', data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    console.log(response);
  } catch (error) {
    toast.error(error);
  }
};
