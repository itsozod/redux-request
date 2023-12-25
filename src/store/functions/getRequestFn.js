import { GET_REQUEST_ACTION } from "../actions/getRequestAction";
export const getDatas = (query) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_REQUEST_ACTION,
        payload: { loading: true, coffees: [] },
      });
      const reponse = await fetch(
        `http://localhost:3000/coffees?title_like=${query}`
      );
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
