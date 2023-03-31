import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActionAlerts from "../ActionAlerts/ActionAlerts";
import { postAuthLogin } from "../../services/AuthService";
import { useDispatch } from "react-redux";
import { userAuthentification } from "../../features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [alert, setAlert] = useState({
    message: "",
    severity: "",
  });
  const [isActiveAlert, setIsActiveAlert] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const changeRegister = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (user.email.trim() && user.password.trim()) {
      try {
        await postAuthLogin(user).then((state) => {
          if (state.statusCode === 200) {
            dispatch(
              userAuthentification({
                user: state.data.user,
                token: state.data.token,
              })
            );
            setIsActiveAlert(true);
            setAlert({
              message: "El usuario se encuentra logeado con exito",
              severity: "success",
            });

            setTimeout(() => {
              navigation("/");
            }, 3500);
          }
        });
      } catch (error) {
        if (error.response.data.statusCode === 401) {
          setIsActiveAlert(true);
          setAlert({
            message: "El usuario o contraseña es incorrecto",
            severity: "error",
          });
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
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-96 w-full"
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
            onChange={(e) => changeRegister(e)}
            value={user?.email}
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
            onChange={(e) => changeRegister(e)}
            value={user?.password}
          />
        </div>
        <div className="flex items-center justify-between ">
          <button
            className="bg-brightTurquoise hover:bg-deepBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar sesión
          </button>
          <Link
            to={"/register"}
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            ¿Registrarse?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
