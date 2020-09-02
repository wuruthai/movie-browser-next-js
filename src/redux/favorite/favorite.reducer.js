import * as favoriteTypes from "./favorite.type";

const initialState = {
  favoriteList: [],
};

const favoriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${favoriteTypes.ADD_FAVORITE}`:
    case `${favoriteTypes.REMOVE_FAVORITE}`:
      return {
        ...state,
        favoriteList: payload,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
