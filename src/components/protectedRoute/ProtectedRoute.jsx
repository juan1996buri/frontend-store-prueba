import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAdmin }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  if (isAdmin && user?.role?.name === "ADMIN") {
    return <>{children}</>;
  } else {
    return navigate("/");
  }
};

export default ProtectedRoute;
