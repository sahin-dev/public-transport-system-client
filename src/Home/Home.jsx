import { useContext } from "react";
import { BusContextData } from "../Context/BusContext";


const Home = () => {
    const { userLog } = useContext(BusContextData)
    console.log(userLog);
    return (
        <div>
           
        </div>
    );
};

export default Home;