import { Helmet } from "react-helmet-async";
import { useFormik } from 'formik';



import { useState } from 'react';

const Apply = () => {

    const [error, setError] = useState("")


    const formik = useFormik({
        initialValues: {

            busineesName: "",
            transportType: "",
            route: "",
            distance: "",
            fareRate: "",
            brta: "",



        },
        validate: values => {
            const errors = {};
            if (!values.busineesName) {
                errors.busineesName = 'Required Business Name';
            }
            if (!values.transportType) {
                errors.transportType = 'Required Transport Type';
            }
            if (!values.route) {
                errors.route = 'Required Route';
            }
            if (!values.distance) {
                errors.distance = 'Required Distance';
            }
            if (!values.fareRate) {
                errors.fareRate = 'Required FareRate';
            }
            if (!values.brta) {
                errors.brta = 'Required licence';
            }


            return errors

        },
        onSubmit: values => {
            setError("")

            console.log(values);

        }
    })
    return (
        <div>
            <Helmet>
                <title>Apply</title>

            </Helmet>
            <div className=" min-h-screen  ml-[300px] w-full ">
                <div className=" flex-col ">
                    <div className="text-center flex items-center justify-center lg:text-left">
                        <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Transport Owner Information</h1>


                    </div>
                    <div className="card w-1/2 mx-auto  shadow-2xl ">
                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Business Name</span>
                                </label>
                                <input type="text" id="busineesName" name="busineesName" placeholder="Business Name" onChange={formik.handleChange}
                                    value={formik.values.busineesName} className="input input-bordered" required />
                                {formik.touched.busineesName && formik.errors.busineesName && <p className='text-red-500'>{formik.errors.busineesName}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Transport Type</span>
                                </label>
                                <input type="text" id="transportType" name="transportType" placeholder="Transport Type" onChange={formik.handleChange}
                                    value={formik.values.transportType} className="input input-bordered" required />
                                {formik.touched.transportType && formik.errors.transportType && <p className='text-red-500'>{formik.errors.transportType}</p>}

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
                                    <span className="label-text text-lg font-bold">Distance</span>
                                </label>
                                <input type="number" id="distance" name="distance" placeholder="Distance" onChange={formik.handleChange}
                                    value={formik.values.distance} className="input input-bordered" required />
                                {formik.touched.distance && formik.errors.distance && <p className='text-red-500'>{formik.errors.distance}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Fare Rate</span>
                                </label>
                                <input type="number" id="fareRate" name="fareRate" placeholder="fareRate" onChange={formik.handleChange}
                                    value={formik.values.fareRate} className="input input-bordered" required />
                                {formik.touched.fareRate && formik.errors.fareRate && <p className='text-red-500'>{formik.errors.fareRate}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">BRTA Licence Number</span>
                                </label>
                                <input type="number" id="brta" name="brta" placeholder="Licence Number" onChange={formik.handleChange}
                                    value={formik.values.brta} className="input input-bordered" required />
                                {formik.touched.brta && formik.errors.brta && <p className='text-red-500'>{formik.errors.brta}</p>}

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

export default Apply;