const GET_LOGIN = 'login/GET_LOGIN';
const GET_LOGIN_SUCCESS = 'login/GET_LOGIN_SUCCESS';
const GET_LOGIN_ERROR = 'login/GET_LOGIN_ERROR';

export const getLogin = () => async (dispatch) => {
  dispatch({type: GET_LOGIN});
  try {
    dispatch({type: GET_LOGIN_SUCCESS});
  } catch (e) {
    dispatch({type: GET_LOGIN_ERROR});
  }
};
