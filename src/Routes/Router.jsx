
import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Error from "../Error/Error";
import Registration from "../Authentication/Registartion";
import SignIn from "../Authentication/SignIn";
import Apply from "../Career/Apply";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import VehicleReq from "../Dashboard/Owner/VehicleReq";
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
            {
                path:"/dashboard/owner/vehicleReq",
                element:<VehicleReq></VehicleReq>
            },
            
        ]
    }
]);

export default Router;
