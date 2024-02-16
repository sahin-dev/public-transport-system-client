
import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Error from "../Error/Error";
import Registration from "../Authentication/Registartion";
import SignIn from "../Authentication/SignIn";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/register",
                element:<Registration></Registration>
            },
            {
                path:"/login",
                element:<SignIn></SignIn>
            }
        ]
        
    },
]);

export default Router;
