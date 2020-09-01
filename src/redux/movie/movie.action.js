import * as movieTypes from "./movie.type";
import service from "../../utils/service";

export const getList = ({ search }) => async (dispatch) => {
  dispatch({ type: movieTypes.GET_FILTERED_MOVIES_PENDING });

  try {
    const response = await service.get("", { params: { s: "spiderman" } });
    return dispatch({
      type: movieTypes.GET_FILTERED_MOVIES_FULFILLED,
      payload: { data: response.data },
    });
  } catch (error) {
    return dispatch({
      type: movieTypes.GET_FILTERED_MOVIES_REJECTED,
      payload: error,
    });
  }
};
