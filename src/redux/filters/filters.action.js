import * as filterTypes from "./filters.type";

export const setFilters = (payload) => async (dispatch) => {
  return dispatch({
    type: filterTypes.SET_FILTERS,
    payload: { data: payload },
  });
};
