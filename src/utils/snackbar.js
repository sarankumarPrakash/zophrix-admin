let showSnackbar = null;

export const setSnackbarHandler = (fn) => {
  showSnackbar = fn;
};

export const openSnackbar = (message, severity = "error") => {
  if (!showSnackbar) {
    console.error("Snackbar handler not initialized");
    return;
  }

  showSnackbar({
    open: true,
    message,
    severity,
  });
};
