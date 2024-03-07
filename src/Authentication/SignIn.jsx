import { useFormik } from 'formik';
import { MdOutlineLogin } from "react-icons/md";

import { Link,  useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import UsePublicApi from '../Hooks/UsePublicApi';
import Swal from 'sweetalert2';




const SignIn = () => {
    const [showPassword, setShowpassword] = useState(false)
    // const [userName, setUserName] = useState(null)
    const [userinfo, setUserInfo] = useState(null)
    const [error, setError] = useState("")
    const public_url = UsePublicApi()
    const navigate = useNavigate()


    useEffect(() => {
        console.log("userName updated:", userinfo);
        setUserInfo(userinfo)
        if (userinfo) {

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Successful",
                showConfirmButton: false,
                timer: 1500
            });
            // userInformation is set to the localStorage for context Data
            localStorage.setItem("userinfo", JSON.stringify(userinfo))
            navigate("/")
            window.location.reload()
            



        }
    }, [userinfo, navigate]);


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
        onSubmit: async values => {
            setError("")
            const data = { email: values.email, password: values.password }

            console.log(data);
            try {

                const response = await public_url.post("api/users/login", data)
                const userData = {
                    name: response.data.name,
                    email: response.data.email,
                    id: response.data.id,
                    token: response.data.token,
                    role: response.data.role
                }

                if (response?.data) {
                    // setUserName(response?.data.name)
                    setUserInfo(userData)

                }
            }
            catch (error) {
                setError(error.message)
            }
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
                        <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Login</h1>
                        <MdOutlineLogin className="text-5xl text-blue-600"></MdOutlineLogin>

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
                                    <p className='btn text-blue-600 text-lg w-1/3' onClick={() => setShowpassword(!showPassword)}>{showPassword ? "Hidden Password" : "Show Password"}</p>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text text-lg text-blue-600  font-bold link link-hover">Forgot password?</a>
                                </label>
                                {error && <p className='text-red-600'>{error}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-700 text-2xl font-semibold text-white hover:bg-blue-800 btn-primary">Login</button>

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