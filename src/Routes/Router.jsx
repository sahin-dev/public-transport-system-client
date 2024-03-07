
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
            // {
            //     path:"/career",
            //     element:<Apply></Apply>
            // },
          

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
                path:"/dashboard/owner/assignDriver",
                element:<AssignDriver></AssignDriver>
            }
            
        ]
    }
]);

export default Router;
