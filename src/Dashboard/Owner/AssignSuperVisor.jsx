import { Helmet } from "react-helmet-async";
import { useFormik } from 'formik';



import { useState } from 'react';


import Swal from "sweetalert2";
import UsePrivateApi from "../../Hooks/UsePrivateApi";
import { useParams } from "react-router-dom";

const AssignSuperVisor = () => {

    const [error, setError] = useState("")
    const privateUrl = UsePrivateApi()
    const { vehicleID } = useParams();




    const formik = useFormik({
        initialValues: {

            email: "",





        },
        validate: values => {
            console.log(values);
            const errors = {};
            if (!values.email) {
                errors.email = 'Required Email';
            }




            return errors

        },
        onSubmit: async values => {

            setError("")

            const assignSuperVisor = { email: values.email, vehicle_id: vehicleID }
            console.log(assignSuperVisor);

          privateUrl.post("/api/user/owner/assign_supervisor", assignSuperVisor)
          .then(res=>{
            if (res.data.msg === "Supervisor added successfully") {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "SuperVisor Added SuccessFul",
                    showConfirmButton: false,
                    timer: 1800
                });
            }

          })
          .catch(error=>{
            alert(error.response.data.msg)
            console.log("error",error);
        })
            
          
            


           


        }
    })
    return (
        <div>
            <Helmet>
                <title>Assign SuperVisor</title>

            </Helmet>
            <div className=" min-h-screen  ml-[350px] w-full ">
                <div className=" flex-col ">
                    <div className="text-center flex items-center justify-center lg:text-left">
                        <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Assign SuperVisor</h1>


                    </div>
                    <div className="card  mx-auto  shadow-2xl ">
                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">SuperVisor Email</span>
                                </label>
                                <input type="email" id="email" name="email" placeholder="Driver email" onChange={formik.handleChange}
                                    value={formik.values.email} className="input input-bordered" required />
                                {formik.touched.email && formik.errors.email && <p className='text-red-500'>{formik.errors.email}</p>}

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-blue-700 text-2xl font-semibold text-white hover:bg-blue-800 btn-primary">Assign SuperVisor</button>
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

export default AssignSuperVisor;