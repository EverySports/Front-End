import * as paymentAPI from '../api/payment';

// Action Type
const GET_SCHEDULE = 'schedule/GET_SCHEDULE';
const GET_SCHEDULE_SUCCESS = 'schedule/GET_SCHEDULE_SUCCESS';
const GET_SCHEDULE_ERROR = 'schedule/GET_SCHEDULE_ERROR';

const initialState = {
  schedule: {
    loading: false,
    data: {
      userSchedule: null,
      teacherSchedule: null,
    },
    error: null,
  },
};

export const getSchedule = () => async (dispatch) => {
  dispatch({type: GET_SCHEDULE});
  try {
    const response = await paymentAPI.getSchedule();

    dispatch({
      type: GET_SCHEDULE_SUCCESS,
      response,
    });
  } catch (e) {
    dispatch({
      type: GET_SCHEDULE_ERROR,
      error: e,
    });
  }
};

export default function schedule(state = initialState, action) {
  switch (action.type) {
    case GET_SCHEDULE:
      return {
        ...state,
        schedule: {
          loading: true,
          data: null,
          error: null,
        },
      };

    case GET_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedule: {
          loading: false,
          data: {
            userSchedule: action.response.user_Schedule,
            teacherSchedule: action.response.teacher_Schedule,
          },
          error: null,
        },
      };

    case GET_SCHEDULE_ERROR:
      return {
        ...state,
        schedule: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
