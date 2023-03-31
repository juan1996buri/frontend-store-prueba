import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAdmin }) => {
  //const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  console.log(user?.role?.name);

  if (isAdmin && user?.role?.name === "ADMIN") {
    return <>{children}</>;
  } else {
    return navigate("/");
  }
};

export default ProtectedRoute;
