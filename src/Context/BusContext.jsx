

//create a context for getting data and use Data for overall Application

import { createContext, useEffect, useState } from "react";


// use export for accessing the context itself 
export const BusContextData = createContext(null)






const BusContext = ({ children }) => {
    const [userLog, setUserLog] = useState("")
   
    useEffect(() => {
        
        const getUserLogData= localStorage.getItem("userinfo")
        const parsedData = JSON.parse(getUserLogData)
        setUserLog(parsedData)

        

    }, [])
    


    const logOut=()=>{
        localStorage.removeItem("userinfo")
        setUserLog("")
       
    }
   

    let value = { userLog,logOut }
    
   

    return (
        <BusContextData.Provider value={value}>
            {children}
        </BusContextData.Provider>
    );
};

export default BusContext;