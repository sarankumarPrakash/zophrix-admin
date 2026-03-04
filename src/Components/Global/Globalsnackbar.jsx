import { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";
import { setSnackbarHandler } from "../../utils/snackbar";

const GlobalSnackbar = () => {
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  useEffect(() => {
    setSnackbarHandler(({ message, severity }) => {
      setSnack({ open: true, message, severity });
    });
  }, []);

  return (
    <Snackbar
      open={snack.open}
      autoHideDuration={2000}
      onClose={() => setSnack({ ...snack, open: false })}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={() => setSnack({ ...snack, open: false })}
        severity={snack.severity}  variant="filled"
        sx={{ width: "100%" }}
      >
        {snack.message}
      </Alert>
    </Snackbar>
  );
};

export default GlobalSnackbar;
