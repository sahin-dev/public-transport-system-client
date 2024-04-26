
import ten from "../../public/Price/2.png"
import { Link } from "react-router-dom";

import book from "../../public/Price/1.jpg"
const Price = () => {
   return (
      <div>
      
      {/* Main dev */}

      {/* 10%off */}

      <div className="mb-12 mt-20 p-12  ">
            {/* Main div */}
            <div className="flex p-2  flex-col-reverse md:flex-row lg:flex-row justify-evenly items-center gap-0">
                {/* TextContent */}
                <div className="space-y-2">
                    <h1 className=" text-3xl md:text-4xl lg:text-5xl ml-4  font-sans font-bold uppercase">Enjoy 10% off per Trip </h1>
                    <p className="mr-2 p-4 text-wrap text-gray-600 text-xl">
                    Unlock a smoother ride and bigger savings! Enjoy an exclusive 10% discount on every journey<br></br> you book with us. special trip, save more with our reliable bus service.
                     Book your ride today and travel smart. <br></br>Don’t miss out—your next adventure is just a click away!
                    </p>
                    {/* <btn className="btn text-2xl bg-sky-600  w-3/4   text-center  font-bold">Register</btn> */}
                   
                </div>
                {/* image content */}
                <div className=" w-[250px] h-[250px]  md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]">
                    <img src={ten}></img>
                </div>
            </div>
        </div>
      {/*  */}
      <h1 className="text-lg md:text-xl lg:text-3xl   text-center p-4 mt-12 font-bold mb-3 uppercase">Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-72  md:max-w-fit lg:max-w-4xl gap-0 py-8  mx-auto">
         
          <div className="card bg-[#97b4e9]   w-44 border-4 border-blue-600 shadow-2xl">
              <div className="card-body ">
                
                  <h1 className="text-center font-bold">Single Trip</h1>
                  <p className="text-center py-4 text-2xl">1 K.M/2.45 Taka </p>

              </div>
          </div>
          <div className="card bg-[#97b4e9]   w-44 border-4 border-blue-600 shadow-2xl">
              <div className="card-body ">
                
                  <h1 className="text-center font-bold">Minimum Price </h1>
                  <p className="text-center py-4 text-2xl">10 Taka</p>

              </div>
          </div>

          <div className="card bg-[#97b4e9]   w-44 border-4 border-blue-600 shadow-2xl">
              <div className="card-body ">
                
                  <h1 className="text-center font-bold">No Charge will be applicable for children </h1>
                  

              </div>
          </div>
         
      </div>

      {/* Price  */}
      <div className="mb-12 mt-12 p-12  ">
            {/* Main div */}
            <div className="flex p-2  flex-col-reverse md:flex-row lg:flex-row-reverse justify-evenly items-center gap-0">
                {/* TextContent */}
                <div className="space-y-2">
                    <h1 className=" text-3xl md:text-4xl lg:text-5xl ml-4  font-sans font-bold uppercase">Book Your Seat!</h1>
                    <p className="mr-2 p-4 text-wrap text-gray-600 text-xl">
                    Book your seat now and take advantage of a 10% discount on every ride! <br></br>Whether you're heading to work,<br></br> school, or on an adventure, travel more for less with our dependable bus service.<br></br>Don't wait—secure your spot and save today!
                    </p>
                    {/* <btn className="btn text-2xl bg-sky-600  w-3/4   text-center  font-bold">Register</btn> */}
                    <Link to ="/service">
                      <btn className="btn text-2xl bg-sky-500 hover:bg-sky-600 w-3/4   text-center  font-bold">Book Seat</btn>
                    </Link>
                </div>
                {/* image content */}
                <div className=" w-[500px] h-[500px]  md:w-[200px] md:h-[200px] lg:w-[500px] lg:h-[500px]">
                    <img src={book}></img>
                </div>
            </div>
        </div>


  </div>
   );
};

export default Price;