import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  userAuthentification,
  userAuthentificationDelete,
} from "../../features/authSlice";
import { deleteUserAuthentification } from "../../services/AuthService";
import ActionAlerts from "../ActionAlerts/ActionAlerts";

export default function BasicMenu() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [alert, setAlert] = React.useState({
    message: "",
    severity: "",
  });
  const [isActiveAlert, setIsActiveAlert] = React.useState(false);

  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    setAnchorEl(null);
    navigate("/login");
  };
  const handleAdmin = () => {
    setAnchorEl(null);
    navigate("/product-form");
  };
  const handleLogout = () => {
    setAnchorEl(null);
    deleteUserAuthentification().then((state) => {
      setIsActiveAlert(true);
      setAlert({
        message: state.message,
        severity: "success",
      });
    });
    dispatch(userAuthentificationDelete());
  };

  return (
    <div>
      {isActiveAlert && (
        <ActionAlerts
          message={alert?.message}
          severity={alert?.severity}
          setIsActiveAlert={setIsActiveAlert}
        />
      )}
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {token ? (
          <MenuItem onClick={handleLogout}>Salir</MenuItem>
        ) : (
          <MenuItem onClick={handleLogin}>Login</MenuItem>
        )}

        {token && user?.role?.name === "ADMIN" && (
          <MenuItem onClick={handleAdmin}>Administrador</MenuItem>
        )}
      </Menu>
    </div>
  );
}
