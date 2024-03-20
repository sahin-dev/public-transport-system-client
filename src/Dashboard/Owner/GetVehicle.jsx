import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { BusContextData } from "../../Context/BusContext";
import UsePrivateApi from "../../Hooks/UsePrivateApi";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";




const ServiceStatus = () => {
    const { userLog } = useContext(BusContextData)
    const PrivateApi = UsePrivateApi()
    // check the owner role here for giving data Access
    const [owner, setOwner] = useState("")
    useEffect(() => {
        if (userLog.role === "owner") {
            setOwner("owner")
        }



    }, [userLog.role])


    // tanstack query is used to provide information from the database in the client side by communicate with server
    const { isLoading, isError, error, data: getVehicle = [], refetch } = useQuery({
        queryKey: ['getVehicle'],
        queryFn: async () => {
            // get data of service Request Status   through the server
            const res = await PrivateApi.get("api/user/owner/vehicles")
            console.log("getVehicles", res);
            return res

        }

    })

    // data is Loading 
    if (isLoading) {

        return <span className="loading loading-infinity   w-[450px] ml-[500px]"></span>
    }
    // if any error has been occour 
    if (isError) {
        return <span className="ml-[300px] text-red-700 text-4xl">Error : {error.message}</span>
    }
    if (getVehicle.length === 0) {
        return <span className="ml-[300px] text-red-700 text-4xl">No vehicles found</span>;
    }
    return (



        <div>
            <Helmet>
                <title>My Vehicle</title>
            </Helmet>
            {/* if isadmin == true (coming from server side response) , then only excute <div>..</div> */}
            {owner &&
                <div className="ml-[300px] min-h-screen">

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-blue-500">
                                    <th className="text-white text-base">Serial No. </th>
                                    <th className="text-white text-base">Name</th>
                                    <th className="text-white text-base">BRTA Number</th>
                                    <th className="text-white text-base">Type</th>
                                    <th className="text-white text-base">Route</th>
                                   
                                    <th className="text-white text-base">Created Time</th>

                                    <th className="text-white text-base">Status</th>
                                    <th className="text-white text-base">Assign Worker</th>
                                </tr>
                            </thead>
                            <tbody>

                                {getVehicle.data.data.map((getV, idx) => (
                                    <tr key={getV._id}>
                                        <td className="font-bold ">{idx + 1}</td>
                                        <td className="font-semibold">{getV.name}</td>
                                        <td className="font-semibold">{getV.number}</td>
                                        <td className="font-semibold">{getV.type}</td>
                                        <td className="font-semibold">{getV.route}</td>
                                        
                                        <td className="font-semibold" >{getV.createdAt}</td>
                                        <td className="font-semibold">
                                        {
                                                getV.status === "pending" &&


                                                <p className=" btn btn-warning btn-sm ">{getV.status}</p>
                                            }
                                            {
                                                getV.status ==="active" &&


                                                <p className=" btn btn-success btn-sm ">{getV.status}</p>
                                            }
                                            {
                                                getV.status === "rejected" &&


                                                <p className=" btn btn-error btn-sm ">{getV.status}</p>
                                            }
                                        </td>
                                        <td className="flex">
                                            <Link to ={`/dashboard/assignDriver/${getV._id}`}><button className="btn btn-sm font-bold text-sm bg-blue-400"> Driver </button></Link>
                                            <Link to ={`/dashboard/assignSuperVisor/${getV._id}`}><button className="btn btn-sm font-bold text-sm bg-blue-400"> SuperVisor</button></Link>
                                        </td>
                                    </tr>
                                ))}
                                




                            </tbody>
                        </table>
                    </div>

                </div>
            }

        </div >

    );
};

export default ServiceStatus;