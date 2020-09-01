import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import movieReducer from "../redux/movie/movie.reducer";

const store = (initialState) => {
  return createStore(
    movieReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default store;
