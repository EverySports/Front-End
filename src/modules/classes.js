import * as hotClassAPI from '../api/hotclasses';
import * as newClassAPI from '../api/newclasses';

/* action */
const GET_CLASSES = '/classes/GET_CLASSES';
const GET_CLASSES_SUCCESS = '/classes/GET_CLASSES_SUCCESS';
const GET_CLASSES_ERROR = '/classes/GET_CLASSES_ERROR';

const initialState = {
  classes: {
    loading: false,
    data: {
      hotClasses: null,
      newClasses: null,
    },
    error: null,
  },
};

export const getClasses = () => async (dispatch) => {
  dispatch({type: GET_CLASSES});
  try {
    const hotClasses = await hotClassAPI.getHotClasses();
    const newClasses = await newClassAPI.getNewClasses();
    const tempData = {
      hotClasses: hotClasses,
      newClasses: newClasses,
    };

    dispatch({
      type: GET_CLASSES_SUCCESS,
      tempData,
    });
  } catch (e) {
    dispatch({
      type: GET_CLASSES_ERROR,
      error: e,
    });
  }
};

export default function classes(state = initialState, action) {
  switch (action.type) {
    case GET_CLASSES:
      return {
        ...state,
        classes: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_CLASSES_SUCCESS:
      return {
        ...state,
        classes: {
          loading: false,
          data: action.tempData,
          error: null,
        },
      };
    case GET_CLASSES_ERROR:
      return {
        ...state,
        classes: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
