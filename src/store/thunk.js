import { axiosPublic } from 'services/axiosPublic';
import { getTokenFromStorage } from 'services/authService';
import { toast } from 'react-toastify';
import {
  getCategoriesProccess,
  getCategoriesSuccess,
  getCurrentQuizTime,
  getMyDatasProcess,
  getMyDatasSuccess,
  getPlanningTestForUserSuccess,
  getPlanningTestProccess,
  getPlanningTestSuccess,
  getQuestionsProccess,
  getQuestionsSuccess,
  getQuizProccess,
  getQuizSuccess,
  getResultTestSuccess,
  getUsersProcess,
  getUsersSuccess,
  getUserTestsProccess,
  getUserTestsSuccess,
  setCurrentPlanningTestData,
  setUserAnswer,
  getDashboardStatisticsProcess,
  getDashboardStatisticsSuccess,
  getStatisticsTestIdProcess,
  getStatisticsTestIdSuccess,
  getStatisticsTableProcess,
  getStatisticsTableSuccess,
} from './actions/actionCreaters';

const access_token = getTokenFromStorage();

export const getCategories = addCurrCategory => async dispatch => {
  try {
    dispatch(getCategoriesProccess());
    const response = await axiosPublic.get('api/category/v1');
    dispatch(getCategoriesSuccess({ category: response.data.objectKoinot, addCurrCategory }));
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
  ({ search, categoryId, pagination }) =>
  async dispatch => {
    try {
      dispatch(getQuestionsProccess());
      const response = await axiosPublic.get(
        `api/question/v1?category=${categoryId}&page=${pagination.pageNumber - 1}&size=${
          pagination.pageSize
        }&search=${search}`,
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

export const addQuestion = (question, categoryId, pagination, search) => async dispatch => {
  try {
    const response = await axiosPublic.post('api/question/v1/save', [question]);
    toast.success(response.data.message);
    dispatch(getQuestions({ search, categoryId, pagination }));
  } catch (e) {
    toast.error(e.response.message);
  }
};

export const editQuestion = (question, categoryId, pagination, search) => async dispatch => {
  try {
    const response = await axiosPublic.post('api/question/v1/edit', question);
    toast.success(response.data.message);
    dispatch(getQuestions({ search, categoryId, pagination }));
  } catch (e) {
    toast.error(e.response.message);
  }
};

export const deleteQuestion = async testId => {
  try {
    const response = await axiosPublic.delete(`api/question/v1?questionId=${testId}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    toast.success(response.data.message);
    return response.data.success;
  } catch (e) {
    toast.error(`${e.response.data.message}, ${e.response.data.objectKoinot[0].expelling}`);
    return e.response.data.success;
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

export const getPlanningTest =
  ({ search, categoryId, pagination }) =>
  async dispatch => {
    try {
      dispatch(getPlanningTestProccess());
      const response = await axiosPublic.get(
        `api/test/v1/find-all-admin?category=${categoryId}&page=${pagination.pageNumber - 1}&size=${
          pagination.pageSize
        }&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );

      dispatch(getPlanningTestSuccess({ data: response.data.objectKoinot, pagination }));
    } catch (e) {
      toast.error(e);
    }
  };

export const getPlanningTestForUser =
  ({ categoryId, pagination }) =>
  async dispatch => {
    try {
      dispatch(getPlanningTestProccess());
      const response = await axiosPublic.get(
        `api/test/v1/find-all-user?category=${categoryId}&page=${pagination.pageNumber - 1}&size=${
          pagination.pageSize
        }&search=`,
      );
      dispatch(getPlanningTestForUserSuccess({ data: response.data.objectKoinot, pagination }));
    } catch (e) {
      toast.error(e);
    }
  };

export const addPlanningTest =
  ({ data, pagination, onChange }) =>
  async dispatch => {
    try {
      await axiosPublic.post('api/test/v1/save', data, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      toast.success('Muvaffaqiyatli amalga oshirildi!');
      dispatch(
        getPlanningTest({
          search: data?.search,
          categoryId: data.categoryId,
          pagination,
        }),
      );
      onChange();
    } catch (e) {
      toast.error(e.response.data.message);
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
  ({ search, role = '', pagination }) =>
  async dispatch => {
    try {
      dispatch(getUsersProcess());
      const response = await axiosPublic.get(
        `api/user/v1?page=${pagination.pageNumber - 1}&role=${role}&size=${
          pagination.pageSize
        }&search=${search}&sortType=DESC`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        },
      );
      dispatch(getUsersSuccess({ users: response.data.objectKoinot, pagination }));
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

export const addUser =
  ({ search, user, pagination, role }) =>
  async dispatch => {
    try {
      await axiosPublic.post(`/api/user/v1/register`, user, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      dispatch(getUsers({ search, role, pagination }));
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
  await axiosPublic.post(`api/payment/v1/confirmation?confirmationCode=${code}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const buyTest = async testId => {
  try {
    const response = await axiosPublic.post(
      `api/test/v1/buy-test?testId=${testId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    toast.success('Test sotib olindi!');
    return response.status;
  } catch (e) {
    toast.error(e.response.data.message);
    return e.response.status;
  }
};

export const startUserTest = async testId => {
  try {
    const response = await axiosPublic.get(
      `api/question/v1/get-with-all-question?testId=${testId}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const finishUserTest = async testId => {
  try {
    const response = await axiosPublic.post(
      `/api/test/v1/finish-test?testId=${testId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    return response.data;
  } catch (e) {
    toast.error(e.response.data.error);
    return e.response.status;
  }
};

export const resultTest = testId => async dispatch => {
  try {
    dispatch(getQuizProccess());
    const response = await axiosPublic.get(`api/test/v1/test-results?testId=${testId}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    dispatch(getResultTestSuccess(response.data.objectKoinot));
  } catch (e) {
    toast.error(e.response);
  }
};

export const getCurrentTestTime = () => async dispatch => {
  try {
    const response = await axiosPublic.get('api/test/v1/test-time-left', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // console.log(response.data.objectKoinot);
    dispatch(getCurrentQuizTime(response.data.objectKoinot));
  } catch (e) {
    toast.error(e.response);
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

    const timer = await axiosPublic.get('api/test/v1/test-time-left', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // dispatch(getCurrentTestTime());
    dispatch(getQuizSuccess({ quizs: response.data.objectKoinot, timer: timer.data.objectKoinot }));
  } catch (e) {
    toast.error(e?.response?.data?.message);
    //   console.log(e?.response?.data?.message);
  }
};

export const sendAnswer =
  ({ questionId, questionChoiceId }) =>
  async dispatch => {
    try {
      dispatch(setUserAnswer({ questionId, questionChoiceId }));
      await axiosPublic.post(
        `api/question/v1/check-single-question?deviceType=WEB&questionChoiceId=${questionChoiceId}&questionId=${questionId}`,
        {},
        {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        },
      );
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
    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const register = async data => {
  try {
    await axiosPublic.post('api/auth/v1/register', data);
  } catch (error) {
    toast.error(error);
  }
};

export const getDashboardStatistics = () => async dispatch => {
  try {
    dispatch(getDashboardStatisticsProcess());
    const response = await axiosPublic.get('api/statistics/v1/overall', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    dispatch(getDashboardStatisticsSuccess(response?.data?.objectKoinot));
  } catch (e) {
    toast.error(e);
  }
};

export const getDashboardStatisticsTable = () => async dispatch => {
  try {
    dispatch(getStatisticsTableProcess());
    const response = await axiosPublic.get('api/statistics/v1/test', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    dispatch(getStatisticsTableSuccess(response?.data?.objectKoinot));
  } catch (e) {
    toast.error(e);
  }
};

export const getStatisticsTestId =
  ({ pagination, id }) =>
  async dispatch => {
    try {
      dispatch(getStatisticsTestIdProcess());
      const response = await axiosPublic.get(
        `api/statistics/v1/statistics-by-test-id?page=${pagination.pageNumber - 1}&size=${
          pagination?.pageSize
        }&test_id=${id}`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        },
      );
      dispatch(
        getStatisticsTestIdSuccess({
          testStatisticsIdData: response.data.objectKoinot,
          pagination,
        }),
      );
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };
