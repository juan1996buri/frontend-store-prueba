import * as React from "react";
import Alert from "@mui/material/Alert";
import { Collapse } from "@mui/material";

export default function ActionAlerts({ message, severity, setIsActiveAlert }) {
  const [open, setOpen] = React.useState(false);

  const handleAlert = (duration, callback) => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      callback(); // llamamos al callback después de que se cierre la alerta
    }, duration);
  };

  React.useEffect(() => {
    handleAlert(3500, () => {
      setIsActiveAlert(false); // ejecutamos setIsActiveAlert en el callback
    });
  }, []);

  const handleClose = () => {
    setOpen(false);
    setIsActiveAlert(false);
  };

  return (
    <div className="fixed  top-0 z-50 right-0">
      <Collapse in={open}>
        <Alert severity={severity} onClose={handleClose}>
          {message}
        </Alert>
      </Collapse>
    </div>
  );
}
