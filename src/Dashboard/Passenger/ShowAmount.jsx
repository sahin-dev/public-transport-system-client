import { useContext } from "react";
import { BusContextData } from "../../Context/BusContext";
import UsePrivateApi from "../../Hooks/UsePrivateApi";
import { useQuery } from "@tanstack/react-query";


const ShowAmount = () => {
    const { userLog } = useContext(BusContextData)
    const PrivateApi = UsePrivateApi()
    const { isLoading, isError, error, data: getProfile = [], refetch } = useQuery({
        queryKey: ['getProfile'],
        queryFn: async () => {
            // get data of service Request Status   through the server
            const res = await PrivateApi.get("/api/users/profile")
            
            console.log("getProfile", res);
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
        <div>
            {
                getProfile.data.wallet.amount>0 && <h2 className="p-2 rounded-sm bg-green-400">Wallet: {getProfile.data.wallet.amount} BDT</h2>
            }
            
            {
                getProfile.data.wallet.amount<=0 && <h2 className="p-2 rounded-sm bg-red-400">Wallet: {getProfile.data.wallet.amount} BDT</h2>
            }
             
        </div>
    );
};

export default ShowAmount;