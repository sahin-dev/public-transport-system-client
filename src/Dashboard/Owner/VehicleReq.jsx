import { Helmet } from "react-helmet-async";
import { useFormik } from 'formik';



import { useState } from 'react';

import UsePrivateApi from "../../Hooks/UsePrivateApi";
import Swal from "sweetalert2";

const VehicleReq = () => {

    const [error, setError] = useState("")
    const privateUrl = UsePrivateApi()


    const formik = useFormik({
        initialValues: {

            name: "",
            type: "",
            desc: "",
            number: "",
            route: "",




        },
        validate: values => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Required Business Name';
            }
            if (!values.type) {
                errors.type = 'Required Transport Type';
            }
            if (!values.route) {
                errors.route = 'Required Route';
            }
            if (!values.desc) {
                errors.desc = 'Required description';
            }
            if (!values.number) {
                errors.number = 'Required number';
            }



            return errors

        },
        onSubmit: async values => {
            setError("")

        const vehicleData = {name:values.name,type:values.type,desc:values.desc,number:values.number,route:values.route}

        const res = await privateUrl.post("api/user/owner/add_vehicle",vehicleData);
        if(res.data.msg==="Request submitted successfully"){
            Swal.fire({
                position: "center",
                icon: "success",
                title: `New Vehicle(${values.number}) request has been Sent To Admin Panal  !`,
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
                        <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Vehicle Request Information</h1>


                    </div>
                    <div className="card  mx-auto  shadow-2xl ">
                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Transport Name</span>
                                </label>
                                <input type="text" id="name" name="name" placeholder="Transport Name" onChange={formik.handleChange}
                                    value={formik.values.name} className="input input-bordered" required />
                                {formik.touched.name && formik.errors.name && <p className='text-red-500'>{formik.errors.name}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Transport Type</span>
                                </label>
                                <input type="text" id="type" name="type" placeholder="Transport Type" onChange={formik.handleChange}
                                    value={formik.values.type} className="input input-bordered" required />
                                {formik.touched.type && formik.errors.type && <p className='text-red-500'>{formik.errors.type}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Route</span>
                                </label>
                                <input type="text" id="route" name="route" placeholder="Route" onChange={formik.handleChange}
                                    value={formik.values.route} className="input input-bordered" required />
                                {formik.touched.route && formik.errors.route && <p className='text-red-500'>{formik.errors.route}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">BRTA Number</span>
                                </label>
                                <input type="text" id="number" name="number" placeholder="number" onChange={formik.handleChange}
                                    value={formik.values.number} className="input input-bordered" required />
                                {formik.touched.number && formik.errors.number && <p className='text-red-500'>{formik.errors.number}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Description</span>
                                </label>
                                <input type="text" id="desc" name="desc" placeholder="desc" onChange={formik.handleChange}
                                    value={formik.values.desc} className="input input-bordered" required />
                                {formik.touched.desc && formik.errors.desc && <p className='text-red-500'>{formik.errors.desc}</p>}

                            </div>

                           

                            <div className="form-control mt-6">
                                <button className="btn bg-blue-700 text-2xl font-semibold text-white hover:bg-blue-800 btn-primary">Submit to Admin Panel</button>
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

export default VehicleReq;