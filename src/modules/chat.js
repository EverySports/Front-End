const GET_CHATLIST = 'chat/GET_CHATLIST';
const GET_CHATLIST_SUCCESS = 'chat/GET_CHATLIST_SUCCESS';
const GET_CHATLIST_ERROR = 'chat/GET_CHATLIST_ERROR';

const initialState = {
  chatData: {
    loading: false,
    data: null,
    error: false,
  },
};

export const getChatList = () => async (dispatch) => {
    dispatch({type : GET_CHATLIST})
    try{
        const 

    }catch(e){
        dispatch({type : GET_CHATLIST_ERROR})
    }
};

export default function chat(state = initialState, action) {
  switch (action.type) {
    case GET_CHATLIST:
      return {
          ...state,
          chatData: {
            loading: true,
            data: null,
            error: false,
          },
      };

    case GET_CHATLIST_SUCCESS:
      return  {
        ...state,
        chatData: {
          loading: false,
          data: action.data,
          error: false,
        },
    };

    case GET_CHATLIST_ERROR:
        return {
            ...state,
            chatData: {
              loading: false,
              data: null,
              error: action.error,
            },
        };
    default:
      return state;
  }
}
