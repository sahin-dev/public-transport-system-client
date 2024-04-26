
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
import AddMoney from "../Dashboard/Passenger/AddMoney";
import PayMoney from "../Dashboard/Passenger/PayMoney";
import PaymentSuccess from "../Dashboard/Passenger/PaymentSuccess";
import AddStopages from "../Dashboard/Admin/AddStopages";
import AddRoute from "../Dashboard/Admin/AddRoute";
import TicketCheck from "../Dashboard/Supervisor/TicketCheck";
import TransportRequest from "../Dashboard/Admin/TransportRequest";
import Price from "../Price/Price";
import Service from "../Service/Service";
import MailNotify from "../MailNotify/MailNotify";
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
            },
           
            {
                path:"/payment/success",
                element:<PaymentSuccess></PaymentSuccess>
            },
            {
                path:"/price",
                element:<Price></Price>
            },
            {
                path:"/service",
                element:<Service></Service>
            },
            {
                path:"/mailnotify",
                element:<MailNotify></MailNotify>
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
            },
            {
                path:"/dashboard/passenger/addmoney",
                element:<AddMoney></AddMoney>
            },
            {
                path:"/dashboard/passenger/paymoney",
                element:<PayMoney></PayMoney>
            },
            {
                path:"/dashboard/admin/addstopages",
                element:<AddStopages></AddStopages>
            },
            {
                path:"/dashboard/admin/addroute",
                element:<AddRoute></AddRoute>
            },
            {
                path:"/dashboard/admin/isAcceptRequest",
                element:<TransportRequest></TransportRequest>
            },
            {
                path:"/dashboard/supervisor/ticketcheck",
                element:<TicketCheck></TicketCheck>
            }

            
            
        ]
    }
]);

export default Router;
