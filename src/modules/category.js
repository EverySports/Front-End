import * as CategoryClassAPI from '../api/searchclasscategoty';
import * as CategoryTeacherAPI from '../api/searchtrainercategory';
/* action */
const GET_CLASS = 'category/GET_CLASS';
const GET_CLASS_SUCCESS = 'category/GET_CLASS_SUCCESS';
const GET_CLASS_ERROR = 'category/GET_CLASS_ERROR';

const GET_TEACHER = 'category/GET_TEACHER';
const GET_TEACHER_SUCCESS = 'category/GET_TEACHER_SUCCESS';
const GET_TEACHER_ERROR = 'category/GET_TEACHER_ERROR';

const initialState = {
  searchList: {
    loading: false,
    data: {
      classList: null,
      teacherList: null,
    },
    error: null,
  },
};

export const getCategoryClassList = (category) => async (dispatch) => {
  dispatch({type: GET_CLASS});
  try {
    const classList = await CategoryClassAPI.getCategoryClassList(category);
    dispatch({
      type: GET_CLASS_SUCCESS,
      classList,
    });
  } catch (e) {
    dispatch({
      type: GET_CLASS_ERROR,
      error: e,
    });
  }
};

export const getCategoryTeacherList = (category) => async (dispatch) => {
  dispatch({type: GET_TEACHER});
  try {
    const teacherList = await CategoryTeacherAPI.getCategoryTeacherList(
      category,
    );
    dispatch({
      type: GET_TEACHER_SUCCESS,
      teacherList,
    });
  } catch (e) {
    dispatch({
      type: GET_TEACHER_ERROR,
      error: e,
    });
  }
};

export default function category_class(state = initialState, action) {
  switch (action.type) {
    case GET_CLASS:
      return {
        ...state,
        searchList: {
          loading: true,
          data: {
            classList: null,
          },
          error: null,
        },
      };
    case GET_CLASS_SUCCESS:
      return {
        ...state,
        searchList: {
          loading: false,
          data: {
            classList: action.classList,
          },
          error: null,
        },
      };
    case GET_CLASS_ERROR:
      return {
        ...state,
        searchList: {
          loading: false,
          data: {
            classList: null,
          },
          error: action.error,
        },
      };

    case GET_TEACHER:
      return {
        ...state,
        searchList: {
          loading: true,
          data: {
            teacherList: null,
          },
          error: null,
        },
      };
    case GET_TEACHER_SUCCESS:
      return {
        ...state,
        searchList: {
          loading: false,
          data: {
            teacherList: action.teacherList,
          },
          error: null,
        },
      };
    case GET_TEACHER_ERROR:
      return {
        ...state,
        searchList: {
          loading: false,
          data: {
            teacherList: null,
          },
          error: action.error,
        },
      };
    default:
      return state;
  }
}
