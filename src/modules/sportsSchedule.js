import * as SportsAPI from '../api/sports';
// action type
const GET_SPORTS_SCHEDULE = 'sports/GET_SPORTS_SCHEDULE';
const GET_SPORTS_SCHEDULE_SUCCESS = 'sports/GET_SPORTS_SCHEDULE_SUCCESS';
const GET_SPORTS_SCHEDULE_ERROR = 'sports/GET_SPORTS_SCHEDULE_ERROR';

const initialState = {
  sportsSchedule: {
    loading: false,
    data: null,
    error: null,
  },
};

export const getSportsSchedule = (userID) => async (dispatch) => {
  try {
    dispatch({type: GET_SPORTS_SCHEDULE});
    const schedule = await SportsAPI.getScheduleList(userID);
    dispatch({
      type: GET_SPORTS_SCHEDULE_SUCCESS,
      schedule,
    });
  } catch (e) {
    dispatch({
      type: GET_SPORTS_SCHEDULE_ERROR,
      error: e,
    });
  }
};

export default function sportsSchedule(state = initialState, action) {
  switch (action.type) {
    case GET_SPORTS_SCHEDULE:
      return {
        ...state,
        sportsSchedule: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_SPORTS_SCHEDULE_SUCCESS:
      return {
        ...state,
        sportsSchedule: {
          loading: false,
          data: action.schedule,
          error: null,
        },
      };
    case GET_SPORTS_SCHEDULE_ERROR:
      return {
        ...state,
        sportsSchedule: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
