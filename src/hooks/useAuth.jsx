import { useContext } from "react";
import { Context } from "../contexts/mainContext";

const useAuth = () => {
    return useContext(Context);
}

export default useAuth;