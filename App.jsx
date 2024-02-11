import { Outlet } from "react-router-dom";
import Navbar from "./SharedComponnet/Navbar";



const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
