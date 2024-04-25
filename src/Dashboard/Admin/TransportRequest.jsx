import { useContext, useEffect, useState } from "react";
import { BusContextData } from "../../Context/BusContext";
import UsePrivateApi from "../../Hooks/UsePrivateApi";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const TransportRequest = () => {
    const { userLog } = useContext(BusContextData)
    const PrivateApi = UsePrivateApi()
    // check the owner role here for giving data Access
    const [admin, setAdmin] = useState("")
    useEffect(() => {
        if (userLog.role === "admin") {
            setAdmin("admin")
        }



    }, [userLog.role])


    // tanstack query is used to provide information from the database in the client side by communicate with server
    const { isLoading, isError, error, data: getVehicle = [], refetch } = useQuery({
        queryKey: ['getVehicle'],
        queryFn: async () => {
            // get data of service Request Status   through the server
            const res = await PrivateApi.get("api/admin/vehicles")
            console.log("getVehiclesAdmin", res);
            return res

        }

    })

    //    Make Active Function

    const makeActive = (vId) => {
        const vehicleActiveId= {vehicle_id:vId}
        console.log(vehicleActiveId);
        PrivateApi.post("api/admin/vehicle/approve", vehicleActiveId)
            .then(res => {
                console.log("accept request",res);
                if (res.data.msg === "Vehicle activate successfully") {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Vehicle activated !`,
                        showConfirmButton: false,
                        timer: 1800
                    });


                    refetch()
                }
            })
            .catch(error => {
                alert(error.response.data.msg)
                console.log("error", error);
            })

    }

    // data is Loading 
    if (isLoading) {

        return <span className="loading loading-infinity   w-[450px] ml-[500px]"></span>
    }
    // if any error has been occour 
    if (isError) {
        return <span className="ml-[300px] text-red-700 text-4xl">Error : {error.message}</span>
    }

    return (
        <div>
            <Helmet>
                <title>Trsnport Request</title>
            </Helmet>
            {/* if isadmin == true (coming from server side response) , then only excute <div>..</div> */}
            {admin &&
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
                                    <th className="text-white text-base">Owner Id </th>


                                    <th className="text-white text-base">Status</th>
                                    <th className="text-white text-base">Approve Request</th>

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
                                        <td className="font-semibold">{getV.owner}</td>
                                        <td className="font-semibold">
                                            {
                                                getV.status === "pending" &&


                                                <p className=" btn btn-warning btn-sm ">{getV.status}</p>
                                            }
                                            {
                                                getV.status === "active" &&


                                                <p className=" btn btn-success btn-sm ">{getV.status}</p>
                                            }
                                            {
                                                getV.status === "rejected" &&


                                                <p className=" btn btn-error btn-sm ">{getV.status}</p>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={()=>makeActive(getV._id)} disabled={getV.status === "active"} className="btn  bg-blue-300 hover:bg-blue-400">Make Active</button>
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

export default TransportRequest;