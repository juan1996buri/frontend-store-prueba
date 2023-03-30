import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActionAlerts from "../ActionAlerts/ActionAlerts";
import { postRegisterUser } from "../../services/UserService";
import CircularProgress from "@mui/material/CircularProgress";

const Register = () => {
  const navigation = useNavigate();
  const [alert, setAlert] = useState({
    message: "",
    severity: "",
  });
  const [isActiveAlert, setIsActiveAlert] = useState(false);
  const [register, setRegister] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [activeButton, setIsActiveButton] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      register.email.trim() &&
      register.password.trim() &&
      register.repeatPassword.trim()
    ) {
      try {
        if (register.password.trim() === register.repeatPassword.trim()) {
          const { repeatPassword, ...user } = register;
          await postRegisterUser(user).then((state) => {
            if (state.statusCode === 200) {
              setIsActiveAlert(true);
              setAlert({
                message: state.message,
                severity: "success",
              });

              if (isActiveAlert === false) {
                setIsActiveButton(true);
                setTimeout(() => {
                  navigation("/login");
                }, 5000);
              }
            } else if (state.statusCode === 400) {
              setAlert({
                message: state.message,
                severity: "error",
              });
              setIsActiveAlert(true);
            }
          });
        } else {
          setAlert({
            message: "Las contraseñas no coinciden",
            severity: "error",
          });
          setIsActiveAlert(true);
        }
      } catch (error) {
        if (error.response) {
          setAlert({
            message: error.response.data.message,
            severity: "error",
          });
          setIsActiveAlert(true);
        }
      }
    } else {
      setAlert({
        message: "Debe llenar todos los campos",
        severity: "error",
      });
      setIsActiveAlert(true);
    }
  };
  const changeRegister = (e) => {
    const { id, value } = e.target;
    setRegister({ ...register, [id]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isActiveAlert && (
        <ActionAlerts
          message={alert?.message}
          severity={alert?.severity}
          setIsActiveAlert={setIsActiveAlert}
        />
      )}

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-96 w-full"
        onSubmit={handleRegister}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="example@example.com"
            value={register.email}
            onChange={(e) => changeRegister(e)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={register.password}
            onChange={(e) => changeRegister(e)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="repeatPassword"
          >
            Repetir contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="repeatPassword"
            type="password"
            placeholder="********"
            value={register.repeatPassword}
            onChange={(e) => changeRegister(e)}
          />
        </div>
        <div className="flex items-center gap-2 justify-between  ">
          {isActiveAlert === false ? (
            <button
              className="bg-brightTurquoise hover:bg-deepBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={activeButton}
            >
              REGISTER
            </button>
          ) : (
            <CircularProgress size={20} />
          )}

          <Link
            to={"/login"}
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            ¿Ya tengo cuenta?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
