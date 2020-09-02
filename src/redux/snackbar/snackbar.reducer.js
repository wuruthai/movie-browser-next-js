import * as snackbarTypes from "./snackbar.type";

const initialState = {
  message: "",
  severity: "warning",
  open: false,
};

const filtersReducer = (state = initialState, { type, message }) => {
  switch (type) {
    case `${snackbarTypes.OPEN_SNACKBAR}`:
      return {
        ...state,
        message,
        open: true,
      };
    case `${snackbarTypes.CLOSE_SNACKBAR}`:
      return {
        ...state,
        message: "",
        open: false,
      };
    default:
      return state;
  }
};

export default filtersReducer;
