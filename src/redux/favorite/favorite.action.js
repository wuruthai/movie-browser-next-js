import * as favoriteTypes from "./favorite.type";

export const addToFavorites = (item) => (dispatch, getState) => {
  const { favoriteList } = getState().favorite;
  if (favoriteList.some((favorite) => favorite.imdbID === item.imdbID)) return;
  dispatch({
    type: favoriteTypes.ADD_FAVORITE,
    payload: [...favoriteList, item],
  });
};

export const removeFromFavorites = (item) => (dispatch, getState) => {
  const { favoriteList } = getState().favorite;
  const index = favoriteList.findIndex(
    (favorite) => favorite.imdbID === item.imdbID
  );
  if (index === -1) return;
  const copyFavoriteList = [...favoriteList];
  copyFavoriteList.splice(index, 1);
  dispatch({
    type: favoriteTypes.ADD_FAVORITE,
    payload: copyFavoriteList,
  });
};
