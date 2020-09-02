import React, { useCallback } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { openSnackBar, closeSnackBar } from "../redux/snackbar/snackbar.action";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Message = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.snackbar);
  const handleClose = useCallback(() => {
    dispatch(closeSnackBar());
  }, [snackbar]);

  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={snackbar.severity}>
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default Message;
