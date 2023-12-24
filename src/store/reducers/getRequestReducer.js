import { GET_REQUEST_ACTION } from "../actions/getRequestAction";
import { requestData } from "../datas/requestData";
export const getRequestReducer = (state = requestData, action) => {
  switch (action.type) {
    case GET_REQUEST_ACTION:
      return {
        ...state,
        loading: action.payload.loading,
        coffees: action.payload.coffees,
      };
    default:
      return state;
  }
};

export const getDatas = (query) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_REQUEST_ACTION,
        payload: { loading: true, coffees: [] },
      });
      const reponse = await fetch(`http://localhost:3000/coffees?q=${query}`);
      const data = await reponse.json();
      dispatch({
        type: GET_REQUEST_ACTION,
        payload: { loading: false, coffees: data },
      });
    } catch (error) {
      dispatch({
        type: GET_REQUEST_ACTION,
        payload: { loading: false, coffees: [] },
      });
      console.error(error);
    }
  };
};
