
import { Link, NavLink } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import logo from "../../public/logo/logo.png"
import { useContext } from "react";
import { BusContextData } from "../Context/BusContext";
import profilePhoto from "../../public/Profile/profilephoto.png"
import Swal from "sweetalert2";

const Navbar = () => {
    const{userLog,logOut} = useContext(BusContextData)
    const logOutFromProfile=()=>{
        logOut()
        Swal.fire({
            position: "center",
            icon: "success",
            title: "LogOut Successful",
            showConfirmButton: false,
            timer: 1500
        });
    }

    





    const navComponents = <>
    
       <li> <NavLink to="/" className="font-bold hover:text-blue-600 hover:font-bold text-base hover:text-xl  mr-4">Home</NavLink></li>
      
    
        <li><NavLink to="/price" className="font-bold hover:text-blue-600 hover:font-bold text-base hover:text-xl  mr-4">Pricing</NavLink></li>
       
    
        <li><NavLink to="/service" className="font-bold hover:text-blue-600 hover:font-bold text-base hover:text-xl  mr-4">Service</NavLink></li>
       
        
        <li><NavLink to="/dashboard" className="font-bold hover:text-blue-500 hover:font-bold text-base hover:text-xl  mr-4">DASHBORD</NavLink></li>


    </>
    return (
        <div className="fixed top-0 z-10 w-full" >
            <div className="navbar flex-col md:flex-row lg:flex-row bg-blue-200 text-neutral-content">
                <Link to="/"><button className="btn btn-ghost text-xl text-blue-800 font-sans font-semibold">
                    <span ><img className="w-[25px] h-[25px]" src={logo}></img></span>Fare Well</button></Link>
                <div className="text-black font-extrabold  mx-auto"><IoCallSharp className="mr-2" /> Call us  :   <span className="text-blue-600 ml-2">  +88 0170000000</span></div>

                {
                    userLog ? <div className=" flex gap-4 ml-[200px]">
                        <div>
                            <p className="text-black">{userLog?.name}</p>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn flex btn-ghost btn-circle avatar">

                                <div className="w-10  rounded-full">
                                    {
                                        userLog?.photo? <img className="flex-1" src={userLog.photoURL} />:
                                        <img className="flex-1" src={profilePhoto} />

                                    }
                                    


                                </div>
                            </div>
                            
                           
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                               <Link to ="/profile"><li className="text-black" ><button>Profile</button></li></Link> 
                                <li><button onClick={logOutFromProfile}  className="text-black">LogOut</button></li>

                            </ul>
                        </div>
                    </div>
                        : <Link to="/login"><button className="bg-yellow-600 text-white btn ml-[900px]  font-bold">Sign In</button></Link>
                }

            </div>

            <div className="navbar  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navComponents}
                        </ul>
                    </div>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navComponents}
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;