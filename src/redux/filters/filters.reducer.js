import * as filterTypes from "./filters.type";
import { MOVIE_TYPES } from "../../constants";

const initialState = {
  search: "",
  movieType: MOVIE_TYPES.MOVIE,
  date: null,
};

const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${filterTypes.SET_FILTERS}`:
      return {
        ...state,
        ...payload.data,
      };
    default:
      return state;
  }
};

export default filtersReducer;
