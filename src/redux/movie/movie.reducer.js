import * as movieTypes from "./movie.type";

const initialState = {
  movie: {
    isLoading: false,
    data: null,
    page: 1,
  },
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${movieTypes.GET_FILTERED_MOVIES_PENDING}`:
      return {
        ...state,
        movie: {
          ...state.movie,
          ...payload,
          isLoading: true,
        },
      };
    case `${movieTypes.GET_FILTERED_MOVIES_FULFILLED}`:
      return {
        ...state,
        movie: {
          ...state.movie,
          ...payload,
          isLoading: false,
        },
      };
    case `${movieTypes.GET_FILTERED_MOVIES_REJECTED}`:
      return {
        ...state,
        movie: {
          ...state.movie,
          isLoading: false,
        },
      };

    default:
      return state;
  }
};

export default movieReducer;
