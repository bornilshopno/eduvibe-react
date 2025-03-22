import { useContext } from "react";
import { AuthContext } from "../auths/AuthProvider";




const useAuth = () => {
  const auth=useContext(AuthContext);
  return auth;
};

export default useAuth;