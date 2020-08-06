import * as userAPI from '../api/user';

const GET_USERINFO = 'user/GET_USERINFO';
const GET_USERINFO_SUCCESS = 'user/GET_USERINFO_SUCCESS';
const GET_USERINFO_ERROR = 'user/GET_USERINFO_ERROR';

const intitialState = {
  userInfo: {
    loading: false,
    data: null,
    error: null,
  },
};

export const getUserInfo = () => async (dispatch) => {
  dispatch({type: GET_USERINFO});
  try {
    const userInfo = await userAPI.getUserInfo();
    dispatch({
      type: GET_USERINFO_SUCCESS,
      userInfo,
    });
  } catch (e) {
    dispatch({
      type: GET_USERINFO_ERROR,
      error: e,
    });
  }
};

export default function userInfo(state = intitialState, action) {
  switch (action.type) {
    case GET_USERINFO:
      return {
        ...state,
        userInfo: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_USERINFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          loading: false,
          data: action.userInfo,
          error: null,
        },
      };
    case GET_USERINFO_ERROR:
      return {
        ...state,
        userInfo: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
