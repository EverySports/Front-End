import * as classInfoAPI from '../api/classInfo';

const GET_CLASSINFO = 'classInfo/GET_CLASSINFO';
const GET_CLASSINFO_SUCCESS = 'classInfo/GET_CLASSINFO_SUCCESS';
const GET_CLASSINFO_ERROR = 'classInfo/GET_CLASSINFO_ERROR';

const initialState = {
  classInfo: {
    loading: false,
    data: null,
    error: null,
  },
};

// Thunk Function
export const getClassInfo = () => async (dispatch) => {
  dispatch({type: GET_CLASSINFO});
  try {
    const response = await classInfoAPI.getClassInfo();
    dispatch({
      type: GET_CLASSINFO_SUCCESS,
      response,
    });
  } catch (e) {
    dispatch({
      type: GET_CLASSINFO_ERROR,
      error: e,
    });
  }
};

export default function classInfo(state = initialState, action) {
  switch (action.type) {
    case GET_CLASSINFO:
      return {
        ...state,
        classInfo: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_CLASSINFO_SUCCESS:
      return {
        ...state,
        loading: false,
        classInfo: {
          loading: false,
          data: action.response,
          error: null,
        },
      };
    case GET_CLASSINFO_ERROR:
      return {
        ...state,
        classInfo: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
