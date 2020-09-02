import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import movieReducer from "../redux/movie/movie.reducer";
import filtersReducer from "../redux/filters/filters.reducer";
import favoriteReducer from "../redux/favorite/favorite.reducer";
import snackbarReducer from "../redux/snackbar/snackbar.reducer";

const combinedReducers = combineReducers({
  favorite: favoriteReducer,
  movie: movieReducer,
  filters: filtersReducer,
  snackbar: snackbarReducer,
});
const makeStore = (initialState) => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return createStore(
      combinedReducers,
      // initialState,
      composeWithDevTools(applyMiddleware(thunk))
    );
  } else {
    //If it's on client side, create a store which will persist
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;
    const persistConfig = {
      key: "nextjs",
      whitelist: ["favorite"], // only favorites will be persisted, add other reducers if needed
      storage, // if needed, use a safer storage
    };
    const persistedReducer = persistReducer(persistConfig, combinedReducers); // Create a new reducer with our existing reducer
    const store = createStore(
      persistedReducer,
      // initialState,
      composeWithDevTools(applyMiddleware(thunk))
    );
    store.__persistor = persistStore(store);
    return store;
  }
};

export default makeStore;
