import { GET_REQUEST_ACTION } from "../actions/getRequestAction";
import { GET_QUERY } from "../actions/getQueryAction";
import { GET_PRICE_ACTION } from "../actions/getPriceAction";
import { requestData } from "../datas/requestData";
export const getRequestReducer = (state = requestData, action) => {
  switch (action.type) {
    case GET_REQUEST_ACTION:
      return {
        ...state,
        loading: action.payload.loading,
        coffees: action.payload.coffees,
      };
    case GET_QUERY:
      return { ...state, query: action.payload.query };
    case GET_PRICE_ACTION:
      return { ...state, maxPrice: action.payload.maxPrice };
    default:
      return state;
  }
};
