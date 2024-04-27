import { useContext, useEffect, useState } from "react";
import { BusContextData } from "../../Context/BusContext";
import UsePrivateApi from "../../Hooks/UsePrivateApi";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
const AdminWithdrawRequest = () => {
   const { userLog } = useContext(BusContextData)
   const PrivateApi = UsePrivateApi()
   // check the owner role here for giving data Access
   const [admin, setAdmin] = useState("")
   useEffect(() => {
      if (userLog.role === "admin") {
         setAdmin("admin")
      }



   }, [userLog.role])

   const { isLoading, isError, error, data: getVehicle = [], refetch } = useQuery({
      queryKey: ['getVehicle'],
      queryFn: async () => {
         // get data of service Request Status   through the server
         const res = await PrivateApi.get("api/admin/requests/100")
         console.log("AdminWithdrawRequest", res);
         return res

      }

   })

   const adminWithdrawMoneyRequest = (vId) => {
      const withdrawRequestData = {req_id: vId,status:"accepted" }
      // console.log(vehicleActiveId);
      PrivateApi.put("api/admin/request", withdrawRequestData)
         .then(res => {
            console.log("withdrawrequestAdminMoney", res);
            if (res.data.msg) {
               Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `Permission Granted !`,
                  showConfirmButton: true,
                  
               });


               refetch()
            }
         })
         .catch(error => {
            alert(error.response.data.msg)
            console.log("error", error);
         })
   }

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
            <title>Admin Withdraw Request</title>
         </Helmet>

         {admin &&
            <div className="ml-[300px] min-h-screen">

               <div className="overflow-x-auto">
                  <table className="table">
                     {/* head */}
                     <thead>
                        <tr className="bg-blue-500">
                           <th className="text-white text-base">Serial No. </th>
                           <th className="text-white text-base">Amount</th>
                           <th className="text-white text-base">Bank Name</th>
                           <th className="text-white text-base">Bank Branch</th>
                           <th className="text-white text-base">Bank ACC</th>



                           <th className="text-white text-base">Status</th>
                           <th className="text-white text-base">Action</th>

                        </tr>
                     </thead>
                     <tbody>

                        {getVehicle.data.data.map((getV, idx) => (
                           <tr key={getV._id}>
                              <td className="font-bold ">{idx + 1}</td>
                              <td className="font-semibold">{getV.body.amount}</td>
                              <td className="font-semibold">{getV.body.bank_name}</td>
                              <td className="font-semibold">{getV.body.bank_branch}</td>
                              <td className="font-semibold">{getV.body.bank_acc}</td>
                              {/* <td className="font-semibold">{getV._id}</td> */}


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
                                 <button onClick={() => adminWithdrawMoneyRequest(getV._id)} disabled={getV.status === "active"} className="btn  bg-blue-300 hover:bg-blue-400">WithDraw</button>
                              </td>


                           </tr>
                        ))}





                     </tbody>
                  </table>
               </div>

            </div>
         }
      </div>
   );
};

export default AdminWithdrawRequest;