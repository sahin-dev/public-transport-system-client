
import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Error from "../Error/Error";
import Registration from "../Authentication/Registartion";
import SignIn from "../Authentication/SignIn";
import Apply from "../Career/Apply";
import Home from "../Home/Home";
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
                path:"/career",
                element:<Apply></Apply>
            },
          

        ]
        
    },
]);

export default Router;
