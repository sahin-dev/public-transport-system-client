import { useContext } from "react";
import { BusContextData } from "../Context/BusContext";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {userLog} = useContext(BusContextData)
  

    if(userLog){
        return children
    }
    return <Navigate to = "/login"></Navigate>
};

export default PrivateRoutes;