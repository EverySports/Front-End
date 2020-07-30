import * as TeacherAPI from '../api/teacherInfo';

//action type
const GET_TEACHER = 'teacherInfo/GET_TEACHER';
const GET_TEACHER_SUCCESS = 'teacherInfo/GET_TEACHER_SUCCESS';
const GET_TEACHER_ERROR = 'teacherInfo/GET_TEACHER_ERROR';

const initialState = {
  teacherInfo: {
    loading: false,
    data: null,
    error: null,
  },
};

//thunk function
export const getTeacherInfo = (teacherID) => async (dispatch) => {
  dispatch({type: GET_TEACHER});
  try {
    const data = await TeacherAPI.getTeacherInfo(teacherID);
    dispatch({
      type: GET_TEACHER_SUCCESS,
      data,
    });
  } catch (e) {
    dispatch({
      type: GET_TEACHER_ERROR,
      error: e,
    });
  }
};

export default function teacherInfo(state = initialState, action) {
  switch (action.type) {
    case GET_TEACHER:
      return {
        ...state,
        teacherInfo: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_TEACHER_SUCCESS:
      return {
        ...state,
        teacherInfo: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_TEACHER_ERROR:
      return {
        ...state,
        teacherInfo: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
