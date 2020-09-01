import * as movieTypes from "./movie.type";

const initialState = {
  isLoading: false,
  data: null,
  page: 1,
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${movieTypes.GET_FILTERED_MOVIES_PENDING}`:
      return {
        ...state,
        isLoading: true,
      };
    case `${movieTypes.GET_FILTERED_MOVIES_FULFILLED}`:
      return {
        ...state,
        ...state.movie,
        ...payload,
        isLoading: false,
      };
    case `${movieTypes.GET_FILTERED_MOVIES_REJECTED}`:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default movieReducer;
