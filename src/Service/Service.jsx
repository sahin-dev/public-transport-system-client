import { useQuery } from "@tanstack/react-query";
import busPic from "../../public/Service/1.jpg";
import UsePrivateApi from "../Hooks/UsePrivateApi";

const Service = () => {

   const privateUrl = UsePrivateApi()


   const { isLoading, isError, data: activeBus = [], refetch } = useQuery({
      queryKey: ['activeBus'],
      queryFn: async () => {
         // get data of service Request Status   through the server
         const res = await privateUrl.get("api/admin/vehicles",)
         console.log("activeBus", res);
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

   return (
      <div className="grid grid-cols-3">
         {activeBus.data.data.map((abus) => (
            <div key={abus.key} className="card w-96 bg-base-100 shadow-xl mt-32">
               <figure className="px-10 pt-10">
                  <img src={busPic} alt="Shoes" className="rounded-xl" />
               </figure>
               <div className="card-body items-center text-center">
                  <h2 className="card-title">{abus.name}</h2>
                  {abus.status === "active" && <div className="badge badge-success p-4 gap-2">
                     
                     Active
                  </div>}
                  {abus.status === "pending" && <div className="badge badge-warning p-4 gap-2">
                     
                     Pending
                  </div>}
                  <div className="flex gap-2 mt-2">
                     <p className="" ><span className="font-bold">BRTA_No : </span>{abus.number}</p>
                     <p className=""><span className="font-bold">Route : </span> {abus.route}</p>
                  </div>

               </div>
            </div>
         ))}

      </div>
   );
};

export default Service;
