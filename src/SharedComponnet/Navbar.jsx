
import { Link, NavLink } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import logo from "../../public/logo/logo.png"

const Navbar = () => {


    const navComponents = <>
    
       <li> <NavLink to="/" className="font-bold hover:text-blue-600 hover:font-bold hover:text-2xl text-lg mr-4">Home</NavLink></li>
       <li> <NavLink to="/track" className="font-bold hover:text-blue-600 hover:font-bold hover:text-2xl text-lg mr-4">Tracking</NavLink></li>
        
        <li><NavLink to="/about" className="font-bold hover:text-blue-600 hover:font-bold hover:text-2xl text-lg mr-4">About</NavLink></li>
        <li><NavLink to="/price" className="font-bold hover:text-blue-600 hover:font-bold hover:text-2xl text-lg mr-4">Pricing</NavLink></li>
        <li><NavLink to ="/contact" className="font-bold hover:text-blue-600 hover:font-bold hover:text-2xl text-lg mr-4">Contact</NavLink></li>
        <li><NavLink to="/career" className="font-bold hover:text-blue-600 hover:font-bold hover:text-2xl text-lg mr-4">Career</NavLink></li>
        <li><NavLink to="/dashbord" className="font-bold hover:text-blue-500 hover:font-bold hover:text-2xl text-lg mr-4">DASHBORD</NavLink></li>


    </>
    return (
        <div className="fixed top-0 z-10 w-full" >
            <div className="navbar flex-col md:flex-row lg:flex-row bg-blue-200 text-neutral-content">
                <Link to="/"><button className="btn btn-ghost text-xl text-blue-800 font-sans font-semibold">
                    <span ><img className="w-[25px] h-[25px]" src={logo}></img></span>Fare Well</button></Link>
                <div className="text-black font-extrabold  mx-auto"><IoCallSharp className="mr-2" /> Call us  :   <span className="text-blue-600 ml-2">  +88 0170000000</span></div>

                <Link to="/login"><button className="bg-blue-700 hover:bg-blue-900 text-white btn  font-bold">Sign In</button></Link>



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
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navComponents}
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;