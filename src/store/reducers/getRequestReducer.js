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
