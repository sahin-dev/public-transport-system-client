import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../src/SharedComponnet/Navbar"
import { useContext, useEffect, useState } from "react";
import profilePhoto from "../../public/Profile/profilephoto.png"


import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { BusContextData } from "../Context/BusContext";
import Profile from "../../Profile";
import ShowAmount from "./Passenger/ShowAmount";



const DashBoard = () => {
    const { userLog } = useContext(BusContextData)
    console.log("dashboard", userLog);
    // specific role based hooks are imported here to give access the dashbord and dashbord activity.
    // isOwner is comming here as a true /false 
    const [owner, setOwner] = useState("")
    const [driver, setDriver] = useState("")
    const [admin, setAdmin] = useState("")
    const [supervisor, setSupervisor] = useState("")
    const [passenger, setPassenger] = useState("")

    useEffect(() => {
        if (userLog.role === "owner") {
            setOwner("owner")
        }
        if (userLog.role === "driver") {
            setDriver("driver")
        }
        if (userLog.role === "supervisor") {
            setSupervisor("supervisor")
        }
        if (userLog.role === "admin") {
            setAdmin("admin")
        }
        if (userLog.role === "passenger") {
            setPassenger("passenger")
        }


    }, [userLog.role])

    console.log(owner);

    return (
        <div>
            <Navbar></Navbar>
           


            <div className="flex">
                <div className="w-[280px] fixed min-h-screen border-4 rounded-lg bg-slate-200 border-blue-400">
                    <div className=" flex mt-32 avatar justify-center p-4 ">
                        <div className="w-4 md:w-11 lg:w-11 rounded-full">
                            {
                                userLog?.photo ? <img className="flex-1" src={userLog.photoURL} /> :
                                    <img className="flex-1" src={profilePhoto} />

                            }
                        </div>

                    </div>
                    <div>
                        {/* check the role and if is owner is true  and excute h1 class as it is a and oparation  */}
                        {
                            owner && <h1 className=" w-full text-right flex  bg-green-300 rounded-md font-bold items-center text-lg justify-center">Role : Owner </h1>
                        }
                        {/* check the role and if is admin is true  and excute h1 class as it is a and oparation  */}
                        {
                            admin && <h1 className=" w-full text-right flex  bg-red-300 rounded-md font-bold items-center text-lg justify-center">Role : Admin </h1>
                        }
                        {
                            driver && <h1 className=" w-full text-right flex  bg-cyan-300 rounded-md font-bold items-center text-lg justify-center">Role : Driver </h1>
                        }
                        {
                            passenger && <h1 className=" w-full text-right flex  bg-blue-300 rounded-md font-bold items-center text-lg justify-center">Role : Passenger </h1>
                        }
                        {
                            passenger && <h1 className=" w-full text-right flex  mt-4  font-bold items-center text-base justify-center"><ShowAmount></ShowAmount> </h1>
                        }
                    
                    </div>

                    {/* if is owner is true  and excute div class as it is a and oparation */}
                    {/* owner Dashboard */}
                    {
                        owner && <div className="mt-8 flex flex-col space-y-4">



                            <NavLink
                                to="/dashboard/owner/vehicleReq"
                                style={({ isActive, isPending, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        background: isActive ? " rgb(30,144,255)" : "",
                                        padding: isActive ? "5px" : "",
                                        color: isPending ? "red" : "black",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                            >
                                <p className=" text-center w-full p-2   ">Vehicle Request</p>
                            </NavLink>

                        </div>
                    }
                    {/* Get Vehicle Information */}
                    {
                        owner && <div className="mt-8 flex flex-col space-y-4">



                            <NavLink
                                to="/dashboard/owner/getVehicle"
                                style={({ isActive, isPending, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        background: isActive ? " rgb(30,144,255)" : "",
                                        padding: isActive ? "5px" : "",
                                        color: isPending ? "red" : "black",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                            >
                                <p className=" text-center w-full  p-2">My Vehicle</p>
                            </NavLink>

                        </div>
                    }


                    {/* passenger Dashboard */}
                    {
                        passenger && <div className="mt-8 flex flex-col space-y-4">
                            <NavLink
                                to="/dashboard/passenger/addmoney"
                                style={({ isActive, isPending, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        background: isActive ? " rgb(30,144,255)" : "",
                                        padding: isActive ? "5px" : "",
                                        color: isPending ? "red" : "black",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                            >   
                                
                                <p className=" text-center w-full  p-2 border border-blue-300 rounded-md " ><FaMoneyCheckAlt className="text-center w-full"></FaMoneyCheckAlt>Add Money</p>
                             
                                
                               
                            </NavLink>
                           
                            <NavLink
                                to="/dashboard/passenger/paymoney"
                                style={({ isActive, isPending, isTransitioning }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        background: isActive ? " rgb(30,144,255)" : "",
                                        padding: isActive ? "5px" : "",
                                        color: isPending ? "red" : "black",
                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                            >   
                                
                                <p className=" text-center w-full  p-2 border border-blue-300 rounded-md " ><GiPayMoney className="text-center w-full"></GiPayMoney>Pay Money</p>
                             
                                
                               
                            </NavLink>
                           
                        </div>
                    }



                   


                    {/* admin Dashboard */}

                    {/* driver DashBoard */}

                </div>


                <div className="mt-36">
                    <Outlet></Outlet>
                </div>
            </div>

            {userLog.name}
        </div>
         
    );
};

export default DashBoard;