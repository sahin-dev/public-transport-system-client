
import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Error from "../Error/Error";
import Registration from "../Authentication/Registartion";
import SignIn from "../Authentication/SignIn";

import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import VehicleReq from "../Dashboard/Owner/VehicleReq";
import GetVehicle from "../Dashboard/Owner/GetVehicle";
import AssignDriver from "../Dashboard/Owner/AssignDriver";
import AssignSuperVisor from "../Dashboard/Owner/AssignSuperVisor";
import Profile from "../../Profile";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>

            },
            {
                path:"/register",
                element:<Registration></Registration>
            },
            {
                path:"/login",
                element:<SignIn></SignIn>
            },
            {
                path:"/profile",
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
            
            
          

        ]
        
    },
    {
        path:"/dashboard",
        errorElement:<Error></Error>,
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            // ownerRoutes
            {
                path:"/dashboard/owner/vehicleReq",
                element:<VehicleReq></VehicleReq>
            },
            {
                path:"/dashboard/owner/getVehicle",
                element:<GetVehicle></GetVehicle>
            },
            {
                path:"/dashboard/assignDriver/:vehicleID",
                element:<AssignDriver></AssignDriver>
            },
            {
                path:"/dashboard/assignSuperVisor/:vehicleID",
                element:<AssignSuperVisor></AssignSuperVisor>
            }
            
        ]
    }
]);

export default Router;
