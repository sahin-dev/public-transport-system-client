
import { Link } from "react-router-dom";
import merchant from "../../public/merchant/1.jpg"
const BeMerchant = () => {
    return (
        <div className="mb-12 mt-12 p-12  ">
            {/* Main div */}
            <div className="flex p-2  flex-col-reverse md:flex-row lg:flex-row justify-evenly items-center gap-0">
                {/* TextContent */}
                <div className="space-y-2">
                    <h1 className=" text-3xl md:text-4xl lg:text-5xl ml-4  font-sans font-bold uppercase">Join Our Business Plan</h1>
                    <p className="mr-2 p-4 text-wrap text-gray-600 text-xl">Dear Bus Ownwers,
                    Get Registered with our business plan to get Non-Stop <br></br>services from us and Grow Your Business !
                    </p>
                    {/* <btn className="btn text-2xl bg-sky-600  w-3/4   text-center  font-bold">Register</btn> */}
                    <Link to ="/register">
                      <btn className="btn text-2xl bg-sky-500 hover:bg-sky-600 w-3/4   text-center  font-bold">Register</btn>
                    </Link>
                </div>
                {/* image content */}
                <div className=" w-[250px] h-[250px]  md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]">
                    <img src={merchant}></img>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;
