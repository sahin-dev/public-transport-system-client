import { Link } from "react-router-dom";
import paymentSuccess from "../../../public/payment/green-double-circle-check-mark/green_double_circle_check_mark.jpg"

const PaymentSuccess = () => {


    return (
        <div className="flex mt-36  ml-4 justify-center items-center space-y-4">
            <div className="">
                <img width={300} src={paymentSuccess}></img>

                <h1 className=" ml-20 text-2xl font-semibold text-green-600">Congratulations!</h1>
                <h1 className=" text-2xl text-green-600">Your Payment has been successful!</h1>

                <Link to="/">
                    <button className="btn ml-16 mt-8  bg-gradient-to-r from-blue-500 to-blue-400">Go To HomePage</button>
                </Link>

            </div>

        </div>
    );
};

export default PaymentSuccess;