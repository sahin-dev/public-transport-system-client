import { Helmet } from "react-helmet-async";
import { useFormik } from 'formik';



import { useState } from 'react';

import UsePrivateApi from "../../Hooks/UsePrivateApi";
import Swal from "sweetalert2";

const RequestWithdrow = () => {
   const [error, setError] = useState("")
   const privateUrl = UsePrivateApi()


   const formik = useFormik({
      initialValues: {


         amount: "",
         bank_name: "",
         bank_branch: "",
         bank_acc: ""




      },
      validate: values => {
         const errors = {};
         if (!values. amount) {
            errors.amount = 'Required Amount';
         }
         if (!values.bank_name) {
            errors.bank_name = 'Required Bank Name';
         }
         if (!values.bank_branch) {
            errors.bank_branch = 'Required Bank Branch';
         }
         if (!values.bank_acc) {
            errors.bank_acc = 'Required Bank Acc';
         }
        
         return errors

      },
      onSubmit: async values => {
         setError("")

         const withdrawMoneyRequest = {amount:values.amount,bank_name:values.bank_name,bank_branch:values.bank_branch,bank_acc:values.bank_acc}

         const res = await privateUrl.post("/api/user/owner/withdraw",withdrawMoneyRequest);
         if (res.data.msg === "Request submitted successfully") {
            Swal.fire({
               position: "center",
               icon: "success",
               title: `Withdraw money request has been Sent To Admin Panal  !`,
               showConfirmButton: false,
               timer: 1600
            });
         }
         console.log("withdrawMoney",res);


      }
   })
   return (
      <div>
         <Helmet>
            <title>Withdraw Request</title>

         </Helmet>
         <div className=" min-h-screen  ml-[350px] w-full ">
            <div className=" flex-col ">
               <div className="text-center flex items-center justify-center lg:text-left">
                  <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Withdraw Money Request Form</h1>


               </div>
               <div className="card  mx-auto  shadow-2xl ">
                  <form onSubmit={formik.handleSubmit} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-lg font-bold">Amount</span>
                        </label>
                        <input type="number" id=" amount" name="amount" placeholder="Amount" onChange={formik.handleChange}
                           value={formik.values.amount} className="input input-bordered" required />
                        {formik.touched.amount && formik.errors.amount && <p className='text-red-500'>{formik.errors.amount}</p>}

                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-lg font-bold">Bank Name</span>
                        </label>
                        <input type="text" id="bank_name" name="bank_name" placeholder="bank_name" onChange={formik.handleChange}
                           value={formik.values.bank_name} className="input input-bordered" required />
                        {formik.touched.bank_name && formik.errors.bank_name && <p className='text-red-500'>{formik.errors.bank_name}</p>}

                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-lg font-bold">Bank Branch</span>
                        </label>
                        <input type="text" id="bank_branch" name="bank_branch" placeholder="bank_branch" onChange={formik.handleChange}
                           value={formik.values.bank_branch} className="input input-bordered" required />
                        {formik.touched.bank_branch && formik.errors.bank_branch && <p className='text-red-500'>{formik.errors.bank_branch}</p>}

                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text text-lg font-bold">Bank ACC</span>
                        </label>
                        <input type="text" id="bank_acc" name="bank_acc" placeholder="bank_acc" onChange={formik.handleChange}
                           value={formik.values.bank_acc} className="input input-bordered" required />
                        {formik.touched.bank_acc && formik.errors.bank_acc && <p className='text-red-500'>{formik.errors.bank_acc}</p>}

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

export default RequestWithdrow;