import { useContext } from "react";
import { BusContextData } from "./src/Context/BusContext";
import UsePrivateApi from "./src/Hooks/UsePrivateApi";
import { useQuery } from "@tanstack/react-query";
import profilePhoto from "./public/Profile/profilephoto.png"
import { Helmet } from "react-helmet-async";

const Profile = () => {
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
        <div className="min-h-screen  mt-44">
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className="card w-96  ">
                <figure><img src={profilePhoto} width={100} height={100}></img></figure>
                
                <div className="card-body  flex items-center justify-center">
                <h2 className="card-title font-bold">Role: {getProfile.data.role}</h2>
                    <h2 className="card-title">Name: {getProfile.data.name}</h2>
                    <h2 className="card-title">Email: {getProfile.data.email}</h2>
                    <h2 className="card-title">Phone: {getProfile.data.phone}</h2>
                    <h2 className="card-title">NID: {getProfile.data.nid}</h2>
                    <h2 className="card-title">Occupation: {getProfile.data.occupation}</h2>
                    <h2 className="card-title">Wallet: {getProfile.data.wallet.amount} BDT</h2>
                    


                </div>
            </div>
        </div>
    );
};

export default Profile;