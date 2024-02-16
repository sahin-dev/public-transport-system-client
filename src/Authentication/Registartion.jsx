


import { useFormik } from 'formik';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import PublicApi from '../Hooks/PublicApi';




const Registration = () => {
    const [showPassword, setShowpassword] = useState(false)
    const [error, setError] = useState(false)
    const public_url= PublicApi()


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            occupation: "",
            phonenumber: "",
            dob: "",
            nid: "",


        },
        validate: values => {
            const errors = {}
            if (!values.name) {
                errors.name = 'Required Name';
            }

            if (!values.email) {
                errors.email = 'Required Email';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.occupation) {
                errors.occupation = 'Required Occupation';
            }
            if (!values.phonenumber) {
                errors.phonenumber = 'Required Phone Number';
            }
            if (!values.dob) {
                errors.dob = 'Required Date of Birth';
            }
            if (!values.nid) {
                errors.nid = 'Required NID number';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/.test(values.password)
            ) {
                errors.password =
                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
            } else if (values.password.length < 6) {
                errors.password = 'Password should be at least 6 characters';
            }
            return errors
        },

        onSubmit: values => {
            console.log(values);
            const userData = { name: values.name, email: values.email, password: values.password, nid: values.nid, dob: values.dob }
            public_url.post("/api/users", userData)
                .then(response => {
                    // Handle successful registration response
                    console.log(response.data);
                })
                .catch(error => {
                    // Handle registration error
                    console.error('Registration failed:', error);
                });
            setError("")


        }
    })
    return (
        <div>
            <Helmet>
                <title>Registration</title>

            </Helmet>
            <div className=" min-h-screen  mt-44 md:mt-32 lg:mt-36 ">
                <div className=" flex-col ">
                    <div className="text-center flex items-center justify-center lg:text-left">
                        <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Registartion</h1>


                    </div>
                    <div className="card w-1/2 mx-auto  shadow-2xl ">

                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Name</span>
                                </label>
                                <input type="text" id="name" name="name" placeholder="Name" onChange={formik.handleChange}
                                    value={formik.values.name} onBlur={formik.handleBlur} className="input input-bordered" required />
                                {formik.touched.name && formik.errors.name && <p className='text-red-500'>{formik.errors.name}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Email</span>
                                </label>
                                <input type='email' id="email" name="email" placeholder="email" onChange={formik.handleChange}
                                    value={formik.values.email} className="input input-bordered" required />
                                {formik.touched.email && formik.errors.email && <p className='text-red-500'>{formik.errors.email}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Password</span>
                                </label>
                                <div className='flex flex-col md:flex-row lg:flex-row gap-2'>
                                    <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="password" onChange={formik.handleChange}
                                        value={formik.values.password} className="  w-3/4 input input-bordered" required />

                                    {formik.touched.password && formik.errors.password && <p className='text-red-500'>{formik.errors.password}</p>}
                                    <p className='btn text-blue-600 text-lg w-1/3' onClick={() => setShowpassword(!showPassword)}>{showPassword ? "Hide Password" : "Show Password"}</p>

                                </div>
                                <p className='text-gray-800 text-wrap'>Your password length should be atleast 6 including uppercase letter,lowercase letter, number,special symbol.</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">occupation</span>
                                </label>
                                <input type="text" id="occupation" name='occupation' placeholder="occupation" onChange={formik.handleChange}
                                    value={formik.values.occupation} className="input input-bordered" required />
                                {formik.touched.occupation && formik.errors.occupation && <p className='text-red-500'>{formik.errors.occupation}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Phone</span>
                                </label>
                                <input type="tel" id="phonenumber" name='phonenumber' placeholder="Phone Number (start +88)" onChange={formik.handleChange}
                                    value={formik.values.phonenumber} className="input input-bordered" required />
                                {formik.touched.phonenumber && formik.errors.phonenumber && <p className='text-red-500'>{formik.errors.phonenumber}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">NID Number</span>
                                </label>
                                <input type="number" id="nid" name='nid' placeholder="NID Number" onChange={formik.handleChange}
                                    value={formik.values.nid} className="input input-bordered" required />
                                {formik.touched.nid && formik.errors.nid && <p className='text-red-500'>{formik.errors.nid}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Date of Birth</span>
                                </label>
                                <input type="date" id="dob" name='dob' placeholder="Date of Birth" onChange={formik.handleChange}
                                    value={formik.values.dob} className="input input-bordered" required />
                                {formik.touched.dob && formik.errors.dob && <p className='text-red-500'>{formik.errors.dob}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-blue-700 text-2xl font-semibold text-white hover:bg-blue-800 btn-primary">Register</button>
                            </div>
                            {
                                error && <p className='text-red-700'>{error}</p>
                            }

                            <div className="flex flex-col w-full">
                                <div className="divider divider-start"></div>

                            </div>
                            <div className="flex gap-8 flex-col md:flex-row lg:flex-row  mt-4">
                                <p className="text-xl text-green-700 font-bold">Already have an account ? </p>
                                <Link to="/login"><button className="text-xl bg-black text-white p-2 rounded-md">Login</button></Link>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;



