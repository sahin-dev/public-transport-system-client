import { useFormik } from 'formik';
import { MdOutlineLogin } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import {  useState } from 'react';

const SignIn = () => {
    const [showPassword, setShowpassword] = useState(false)
    const [error,setError] = useState("")
  
    
    const formik = useFormik({
        initialValues: {

            email: "",
            password: "",



        },
        validate: values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required Email';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
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
            setError("")
          
            console.log(values);

        }
    })
    return (
        <div>
            <Helmet>
                <title>Login</title>

            </Helmet>
            <div className=" min-h-screen  mt-44 md:mt-32 lg:mt-36 ">
                <div className=" flex-col ">
                    <div className="text-center flex items-center justify-center lg:text-left">
                        <h1 className="text-5xl text-yellow-600  text-center font-bold p-8">Login</h1>
                        <MdOutlineLogin className="text-5xl text-yellow-600"></MdOutlineLogin>

                    </div>
                    <div className="card w-1/2 mx-auto  shadow-2xl ">
                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Email</span>
                                </label>
                                <input type="email" id="email" name="email" placeholder="email" onChange={formik.handleChange}
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
                                    <p className='btn text-yellow-600 text-lg w-1/3' onClick={() => setShowpassword(!showPassword)}>{showPassword ? "Hidden Password" : "Show Password"}</p>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text text-lg text-blue-600  font-bold link link-hover">Forgot password?</a>
                                </label>
                                {error && <p className='text-red-600'>{error}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-yellow-700 text-2xl font-semibold text-white hover:bg-yellow-800 btn-primary">Login</button>
                            </div>
                            <p className="mt-6 text-center font-semibold"> or, Continue with </p>
                            <div className=" flex items-center justify-center mt-6">
                                <button  className="text-3xl flex items-center justify-center"><FcGoogle></FcGoogle></button>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="divider divider-start"></div>

                            </div>
                            <div className="flex gap-8 flex-col md:flex-row lg:flex-row  mt-4">
                                <p className="text-xl text-red-500">Do not have an account ? </p>
                                <Link to="/register"><button className="text-xl bg-black text-white p-2 rounded-md">Regsiter</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;