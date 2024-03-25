import { Helmet } from "react-helmet-async";
import { useFormik } from 'formik';




import { useContext, useState } from 'react';


import Swal from "sweetalert2";


import UsePrivateApi from "../../Hooks/UsePrivateApi";
import { BusContextData } from "../../Context/BusContext";

const AssignSuperVisor = () => {

    const [error, setError] = useState("")
    const privateUrl = UsePrivateApi()
    
    const {userLog} = useContext(BusContextData)
    




    const formik = useFormik({
        initialValues: {

            amount: "",
            phone:""





        },
        validate: values => {
            console.log(values);
            const errors = {};
            if (!values.amount) {
                errors.amount = 'Required amount';
            }
            if (!values.phone) {
                errors.phone = 'Required phone';
            }




            return errors

        },
        onSubmit: async values => {

            setError("")

            const addMoney = { amount: values.amount, c_name:userLog.name,c_email:userLog.email,c_phone:values.phone}
            console.log("addMoney data",addMoney);

          privateUrl.post("api/payment", addMoney)
          .then(res=>{
            window.location.replace(res.data);

          })
          .catch(error=>{
            
            console.log("error",error);
        })
            
          
            


           


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
                        <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Add Money In Wallet</h1>


                    </div>
                    <div className="card  mx-auto  shadow-2xl ">
                        <form onSubmit={formik.handleSubmit} className="card-body">
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
                                    <span className="label-text text-lg font-bold"> Phone</span>
                                </label>
                                <input type="tel" id="phone" name="phone" placeholder="Give a phone number that is registered in the site" onChange={formik.handleChange}
                                    value={formik.values.phone} className="input input-bordered" required />
                                {formik.touched.phone && formik.errors.phone && <p className='text-red-500'>{formik.errors.phone}</p>}

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-blue-700 text-2xl font-semibold text-white hover:bg-blue-800 btn-primary">Add</button>
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