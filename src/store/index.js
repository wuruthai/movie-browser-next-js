import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import movieReducer from "../redux/movie/movie.reducer";
import filtersReducer from "../redux/filters/filters.reducer";

const store = (initialState) => {
  return createStore(
    combineReducers({ movie: movieReducer, filters: filtersReducer }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default store;
