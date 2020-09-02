import * as snackbarTypes from "./snackbar.type";

export const openSnackBar = (message) => async (dispatch) => {
  return dispatch({
    type: snackbarTypes.OPEN_SNACKBAR,
    message,
  });
};
export const closeSnackBar = () => async (dispatch) => {
  return dispatch({
    type: snackbarTypes.CLOSE_SNACKBAR,
    message: "",
  });
};
