import { Helmet } from "react-helmet-async";
import { useFormik } from 'formik';



import { useState } from 'react';


import Swal from "sweetalert2";
import UsePrivateApi from "../../Hooks/UsePrivateApi";

const AssignDriver = () => {

    const [error, setError] = useState("")
    const privateUrl = UsePrivateApi()


    const formik = useFormik({
        initialValues: {

            email: "",
            vehicle_id: "",
          



        },
        validate: values => {
            console.log(values);
            const errors = {};
            if (!values.email) {
                errors.email = 'Required Email';
            }
            if (!values.vehicle_id) {
                errors.vehicle_id = 'Required Transport vehicle_id';
            }
         



            return errors

        },
        onSubmit: async values => {
            setError("")

        const assignDriverData = {email:values.email,vehicle_id:values.vehicle_id}

        const res = await privateUrl.post("api/user/owner/assign_driver",assignDriverData);
        if(res.data.msg==="Driver added successfully"){
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Driver Added!`,
                showConfirmButton: false,
                timer: 1800
            });
        }
        console.log(res);


        }
    })
    return (
        <div>
            <Helmet>
                <title>Vehicle Request</title>

            </Helmet>
            <div className=" min-h-screen  ml-[350px] w-full ">
                <div className=" flex-col ">
                    <div className="text-center flex items-center justify-center lg:text-left">
                        <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Assign Driver</h1>


                    </div>
                    <div className="card  mx-auto  shadow-2xl ">
                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Driver Email</span>
                                </label>
                                <input type="email" id="email" name="email" placeholder="Driver email" onChange={formik.handleChange}
                                    value={formik.values.email} className="input input-bordered" required />
                                {formik.touched.email && formik.errors.email && <p className='text-red-500'>{formik.errors.email}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Transport vehicle_id</span>
                                </label>
                                <input type="text" id="vehicle_id" name="vehicle_id" placeholder="Transport vehicle_id" onChange={formik.handleChange}
                                    value={formik.values.vehicle_id} className="input input-bordered" required />
                                {formik.touched.vehicle_id && formik.errors.vehicle_id && <p className='text-red-500'>{formik.errors.vehicle_id}</p>}

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-blue-700 text-2xl font-semibold text-white hover:bg-blue-800 btn-primary">Assign Driver</button>
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

export default AssignDriver;