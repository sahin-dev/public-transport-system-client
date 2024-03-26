import { Helmet } from "react-helmet-async";
import { useFormik } from 'formik';




import { useContext, useState } from 'react';


import Swal from "sweetalert2";


import UsePrivateApi from "../../Hooks/UsePrivateApi";
import { BusContextData } from "../../Context/BusContext";

const PayMoney = () => {

    const [error, setError] = useState("")
    const privateUrl = UsePrivateApi()

    const { userLog } = useContext(BusContextData)





    const formik = useFormik({
        initialValues: {

            src: "",
            des: ""





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




            return errors

        },
        onSubmit: async values => {

            setError("")


            console.log(values);







        }
    })
    return (
        <div>
            <Helmet>
                <title>Add Money</title>

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
                                <select name="src" id="src" onChange={formik.handleChange}>
                                    <option value="">--Please choose role--</option>
                                    <option value="passenger">Passenger</option>
                                    <option value="owner">Owner</option>
                                    <option value="driver">Driver</option>
                                    <option value="supervisor">Supervisor</option>

                                </select>

                                {formik.touched.src && formik.errors.src && <p className='text-red-500'>{formik.errors.src}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Destination</span>
                                </label>
                                <select name="des" id="des" onChange={formik.handleChange}>
                                    <option value="">--Please choose role--</option>
                                    <option value="passenger">Passenger</option>
                                    <option value="owner">Owner</option>
                                    <option value="driver">Driver</option>
                                    <option value="supervisor">Supervisor</option>

                                </select>

                                {formik.touched.des && formik.errors.des && <p className='text-red-500'>{formik.errors.des}</p>}
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-blue-700 text-2xl font-semibold text-white hover:bg-blue-800 btn-primary">Pay</button>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="divider divider-start"></div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayMoney;