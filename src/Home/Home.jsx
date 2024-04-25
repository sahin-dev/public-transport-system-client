import { useContext } from "react";
import { BusContextData } from "../Context/BusContext";
import Bannar from "./Bannar";
import BeMerchant from "./BeMarchant";
import Feedback from "./Feedback";
import Footer from "./Footer";


const Home = () => {
    const { userLog } = useContext(BusContextData)
    console.log(userLog);
    return (
        <div>
            
           <Bannar></Bannar>
           <BeMerchant></BeMerchant>
           <Feedback></Feedback>
           <Footer></Footer>
        </div>
    );
};

export default Home;