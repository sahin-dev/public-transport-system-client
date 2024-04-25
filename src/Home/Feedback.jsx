
import { IoMdPerson } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


const Feedback = () => {
    return (
        <div>
            <h1 className="text-lg md:text-xl lg:text-3xl  text-center p-4 mt-12 font-bold mb-3 uppercase">  Customer's Feedback</h1>
            {/* Main dev */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-72  md:max-w-fit lg:max-w-4xl gap-12 py-8  mx-auto">
                <div className="card bg-[#97b4e9]   w-72 border-4 border-yellow-600 shadow-2xl">
                    <div className="card-body ">
                        <div className="avatar items-center justify-center">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>

                        </div>
                        <div className="flex items-center justify-center gap-12 p-4">
                            <div className="flex items-center justify-center">
                                <IoMdPerson className="font-bold mr-2"></IoMdPerson><span className="block">Business</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <FaLocationDot className="mr-2"></FaLocationDot><span className="block">Dhaka</span>
                            </div>
                        </div>
                        <div className="rating items-center justify-center">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-wrap py-4"> satisfied goodsatisfied goodsatisfied goodsatisfied goodsatisfied goodsatisfied good </p>

                    </div>
                </div>
                <div className="card bg-[#97b4e9]   w-72 border-4 border-yellow-600 shadow-2xl">
                    <div className="card-body ">
                        <div className="avatar items-center justify-center">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>

                        </div>
                        <div className="flex items-center justify-center gap-12 p-4">
                            <div className="flex items-center justify-center">
                                <IoMdPerson className="font-bold mr-2"></IoMdPerson><span className="block">Business</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <FaLocationDot className="mr-2"></FaLocationDot><span className="block">Dhaka</span>
                            </div>
                        </div>
                        <div className="rating items-center justify-center">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-wrap py-4"> satisfied goodsatisfied goodsatisfied goodsatisfied goodsatisfied goodsatisfied good </p>

                    </div>
                </div>
                <div className="card bg-[#97b4e9]   w-72 border-4 border-yellow-600 shadow-2xl">
                    <div className="card-body ">
                        <div className="avatar items-center justify-center">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>

                        </div>
                        <div className="flex items-center justify-center gap-12 p-4">
                            <div className="flex items-center justify-center">
                                <IoMdPerson className="font-bold mr-2"></IoMdPerson><span className="block">Business</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <FaLocationDot className="mr-2"></FaLocationDot><span className="block">Dhaka</span>
                            </div>
                        </div>
                        <div className="rating items-center justify-center">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-wrap py-4"> satisfied goodsatisfied goodsatisfied goodsatisfied goodsatisfied goodsatisfied good </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;