import { useFormik } from "formik";
import UsePrivateApi from "../../Hooks/UsePrivateApi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const TicketCheck = () => {
    const privateUrl = UsePrivateApi()

    const formik = useFormik({
        initialValues: {

            tid: "",


        },
        validate: values => {
            console.log(values);
            const errors = {};
            if (!values.tid) {
                errors.tid = 'Required TicketId';
            }



            return errors

        },
        onSubmit: async values => {

            // getTicket

            // check Ticket
            // const ticketId = {ticket_id:values.tid}

            privateUrl.get(`api/supervisor/ticket/${values.tid}`)
                .then(res => {
                    if (res.data.msg === "Ticket found") {
                        Swal.fire({
                            title: "Ticket is Found",
                            text: "",
                            icon: "success",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Check Ticket"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                const ticketId = { ticket_id: res.data.data._id }
                                privateUrl.post("api/supervisor/check", ticketId)
                                    .then(res => {
                                        if (res.data.msg === "Ticket checked") {
                                            Swal.fire({
                                                position: "center",
                                                icon: "success",
                                                title: "Ticket Checked !",
                                                showConfirmButton: false,
                                                timer: 1800
                                            });

                                        }
                                    })
                                    .catch(error => {
                                        console.log(error);
                                        alert(`${error} 
                                    ${error.response.data.msg} `)
                                    })

                            }
                        });
                        // const ticketId = { ticket_id: res.data.data._id }
                        // privateUrl.post("api/supervisor/check", ticketId)
                        // .then(res=>{
                        //     if(res.data.msg==="Ticket checked"){
                        //         Swal.fire({
                        //             position: "center",
                        //             icon: "success",
                        //             title: "Ticket Checked !",
                        //             showConfirmButton: false,
                        //             timer: 1800
                        //         });

                        //     }
                        // })
                        // .catch(error=>{
                        //     console.log(error);
                        //     alert(`${error} 
                        //     ${error.response.data.msg} `)
                        // })




                    }

                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                    alert(`${error}
                     ${error.response.data.msg}`)
                })






        }
    })
    return (
        <div>
            <Helmet>
                <title>Check Ticket</title>

            </Helmet>
            <div className=" min-h-screen  ml-[350px] w-full ">
                <div className=" flex-col ">
                    <div className="text-center flex items-center justify-center lg:text-left">
                        <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Check Ticket</h1>


                    </div>
                    <div className="card  mx-auto  shadow-2xl ">
                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Ticket_Id</span>
                                </label>
                                <input type="text" id="tid" name="tid" placeholder="Ticket Id" onChange={formik.handleChange}
                                    value={formik.values.tid} className="input input-bordered" required />
                                {formik.touched.tid && formik.errors.tid && <p className='text-red-500'>{formik.errors.tid}</p>}

                            </div>



                            <div className="form-control mt-6 w-full">
                                <button className="btn bg-blue-700 text-2xl font-semibold text-white hover:bg-blue-800 btn-primary">Find Ticket</button>

                                {/* <button className="btn bg-blue-700 text-2xl font-semibold text-white hover:bg-blue-800 btn-primary">Checked Ticket</button> */}
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCheck;