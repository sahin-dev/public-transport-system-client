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
        <div className="flex items-center justify-center mt-44">
            <Helmet>
                <title>Profile</title>
            </Helmet>
            {/* <div className="card w-96  ">
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
            </div> */}
            <div className=" bg-base-300">
                <div className=" flex flex-row-reverse gap-8">
                    <div>
                        <img src={profilePhoto} className=" rounded-sm shadow-2xl" />
                        <h2 className="card-title font-bold text-2xl mt-3">Role: {getProfile.data.role}</h2>
                    </div>
                    <div className="">
                        <p className="text-5xl font-bold">Profile Information</p>
                        
                        <p className="card-title mt-8 text-2xl">Name: {getProfile.data.name}</p>
                        <p className="card-title mt-4 text-2xl">Email: {getProfile.data.email}</p>
                        <p className="card-title mt-4 text-2xl">Phone: {getProfile.data.phone}</p>
                        <p className="card-title mt-4 text-2xl">NID: {getProfile.data.nid}</p>
                        <p className="card-title mt-4 text-2xl">Occupation: {getProfile.data.occupation}</p>
                        {/* <p className="card-title mt-4 text-2xl">Wallet: {getProfile.data.wallet.amount} BDT</p> */}



                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;