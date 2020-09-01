import * as movieTypes from "./movie.type";
import service from "../../utils/service";

export const getList = (page = 1) => async (dispatch, getState) => {
  dispatch({ type: movieTypes.GET_FILTERED_MOVIES_PENDING });
  const { filters } = getState();
  console.log(filters);
  try {
    const response = await service.get("", {
      params: {
        s: filters.search,
        type: filters.movieType,
        y: filters.date?.getFullYear(),
        page,
      },
    });
    console.log("response", response);
    return dispatch({
      type: movieTypes.GET_FILTERED_MOVIES_FULFILLED,
      payload: {
        data: response.data?.Search,
        totalResults: response.data?.totalResults,
        page,
      },
    });
  } catch (error) {
    return dispatch({
      type: movieTypes.GET_FILTERED_MOVIES_REJECTED,
      payload: error,
    });
  }
};
