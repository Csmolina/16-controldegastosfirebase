import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
export function ProtectorRuta({ children }) {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to={"/"} />;
  }
  return children;
}
