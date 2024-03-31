import { useFormik } from "formik";
import UsePrivateApi from "../../Hooks/UsePrivateApi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AddRoute = () => {
    const privateUrl = UsePrivateApi()

    const formik = useFormik({
        initialValues: {

           src: "",
           des:"",
           len:""

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
            if (!values.len) {
                errors.len = 'Required Length';
            }


            return errors

        },
        onSubmit: async values => {


            const addRoute = { source:values.src,destination:values.des,length:values.len }

            privateUrl.post("api/route", addRoute)
                .then(res => {
                    console.log(res);
                    if (res.data.status === "success") {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Added Route !",
                            showConfirmButton: false,
                            timer: 1800
                        });
                    }

                })
                .catch(error => {

                    console.log(error);
                    alert(error)
                })


        }
    })
    return (
        <div>
            <Helmet>
                <title>Add Route</title>

            </Helmet>
            <div className=" min-h-screen  ml-[350px] w-full ">
                <div className=" flex-col ">
                    <div className="text-center flex items-center justify-center lg:text-left">
                        <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Add Routes</h1>


                    </div>
                    <div className="card  mx-auto  shadow-2xl ">
                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Source</span>
                                </label>
                                <input type="text" id="src" name="src" placeholder="source" onChange={formik.handleChange}
                                    value={formik.values.src} className="input input-bordered" required />
                                {formik.touched.src && formik.errors.src && <p className='text-red-500'>{formik.errors.src}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Destination</span>
                                </label>
                                <input type="text" id="des" name="des" placeholder="destination" onChange={formik.handleChange}
                                    value={formik.values.des} className="input input-bordered" required />
                                {formik.touched.des && formik.errors.des && <p className='text-red-500'>{formik.errors.des}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Length</span>
                                </label>
                                <input type="number" id="len" name="len" placeholder="len" onChange={formik.handleChange}
                                    value={formik.values.len} className="input input-bordered" required />
                                {formik.touched.len && formik.errors.len && <p className='text-red-500'>{formik.errors.len}</p>}

                            </div>



                            <div className="form-control mt-6">
                                <button className="btn bg-blue-700 text-2xl font-semibold text-white hover:bg-blue-800 btn-primary">Add</button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRoute;