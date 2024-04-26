import { Helmet } from "react-helmet-async";
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import Swal from "sweetalert2";
import UsePrivateApi from "../../Hooks/UsePrivateApi";
import { BusContextData } from "../../Context/BusContext";
import { useQuery } from "@tanstack/react-query";
const PayMoney = () => {

    const [error, setError] = useState("")
    const privateUrl = UsePrivateApi()

    const { userLog } = useContext(BusContextData)
    const formik = useFormik({
        initialValues: {

            src: "",
            des: "",
            amount:"",
            vId:""
        },
        validate: values => {
            console.log(values);
            const errors = {};
            if (!values.src) {
                errors.src = 'Required Source';
            }
            if (!values.des) {
                errors.des = 'Required Destination';
            }
            if (!values.amount) {
                errors.amount = 'Required amount';
            }
            if (!values.vId) {
                errors.vId = 'Required Vehicle Id';
            }

            return errors

        },
        onSubmit: async values => {

            setError("")
            console.log("PayMoneyValues",values)
            const paymoney = {source:values.src,destination:values.des,amount:values.amount,vehicleuid:values.vId}
            console.log(paymoney);
            privateUrl.post("api/users/purchase", paymoney)
            .then(res=>{
               console.log("Ticket",res);
              })
              .catch(error=>{
                
                console.log("error",error);
            })

            


        }
    })
    const { isLoading, isError, data: getStopage = [], refetch } = useQuery({
        queryKey: ['getStopage'],
        queryFn: async () => {
            // get data of service Request Status   through the server
            const res = await privateUrl.get("api/route/stopages")
            console.log("getStopages", res);
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


    // 
    return (
        <div>
            <Helmet>
                <title>Pay Money</title>

            </Helmet>
            <div className=" min-h-screen  ml-[350px] w-full ">
                <div className=" flex-col ">
                    <div className="text-center flex items-center justify-center lg:text-left">
                        <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Pay Money</h1>


                    </div>
                    <div className="card  mx-auto  shadow-2xl ">
                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Source</span>
                                </label>
                                <select name="src"  id="src" onChange={formik.handleChange}>
                                    <option value="">-- choose Source--</option>
                                    {getStopage.data.data.stopages.map((gs, idx) => (
                                        <option key={idx} value={gs._id}>{gs.name}</option>
                                    ))}



                                </select>

                                {formik.touched.src && formik.errors.src && <p className='text-red-500'>{formik.errors.src}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Destination</span>
                                </label>
                                <select name="des"  id="des" onChange={formik.handleChange}>
                                    <option value="">-- choose Destination--</option>
                                    {getStopage.data.data.stopages.map((gsd, idx) => (
                                        <option key={idx} value={gsd._id}>{gsd.name}</option>
                                    ))}
                                </select>

                                {formik.touched.des && formik.errors.des && <p className='text-red-500'>{formik.errors.des}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold"> Amount</span>
                                </label>
                                <input type="number" id="amount" name="amount" placeholder=" amount" onChange={formik.handleChange}
                                    value={formik.values.amount} className="input input-bordered" required />
                                {formik.touched.amount && formik.errors.amount && <p className='text-red-500'>{formik.errors.amount}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">BRTA Number</span>
                                </label>
                                <input type="text" id="vId" name="vId" placeholder="vId" onChange={formik.handleChange}
                                    value={formik.values.vId} className="input input-bordered" required />
                                {formik.touched.vId && formik.errors.vId && <p className='text-red-500'>{formik.errors.vId}</p>}

                            </div>



                            <div className="form-control mt-6">
                                <button className="btn bg-blue-700 text-2xl font-semibold text-white hover:bg-blue-800 btn-primary">Pay</button>
                            </div>

                           

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayMoney;