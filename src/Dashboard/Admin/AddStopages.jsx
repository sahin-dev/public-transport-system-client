import { useFormik } from "formik";
import { Helmet } from "react-helmet-async";
import UsePrivateApi from "../../Hooks/UsePrivateApi";
import Swal from "sweetalert2";


const AddStopages = () => {
    const privateUrl = UsePrivateApi()
    
    const formik = useFormik({
        initialValues: {

           stopage: "",
           
        },
        validate: values => {
            console.log(values);
            const errors = {};
            if (!values.stopage) {
                errors.stopage = 'Required Stopage';
            }
            

            return errors

        },
        onSubmit: async values => {

        
            const addStopage = {name:values.stopage}
           
          privateUrl.post("api/route/stopage", addStopage)
          .then(res=>{
            if(res.data.status==="success"){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Added Stopage !",
                    showConfirmButton: false,
                    timer: 1800
                });
            }

          })
          .catch(error=>{

            console.log(error);
            alert(error)
        })


        }
    })
    return (
        <div>
        <Helmet>
            <title>Add Stopage</title>

        </Helmet>
        <div className=" min-h-screen  ml-[350px] w-full ">
            <div className=" flex-col ">
                <div className="text-center flex items-center justify-center lg:text-left">
                    <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Add Stopages</h1>


                </div>
                <div className="card  mx-auto  shadow-2xl ">
                    <form onSubmit={formik.handleSubmit} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold"> Stopgaes</span>
                                </label>
                                <input type="text" id="stopage" name="stopage" placeholder="stopage" onChange={formik.handleChange}
                                    value={formik.values.stopage} className="input input-bordered" required />
                                {formik.touched.stopage && formik.errors.stopage && <p className='text-red-500'>{formik.errors.stopage}</p>}

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

export default AddStopages;