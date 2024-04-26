import { Link } from "react-router-dom";
import mailConfirn from "../../public/Mail/2.jpg"
const MailConfirmed = () => {
   return (
      <div className="flex mt-32 justify-center items-center space-y-4">
            <div className="">
                <img width={300} src={mailConfirn}></img>
                <h1 className="text-center mt-4 font-bold text-2xl">Mail Confirmed</h1>
                <Link to="/">
                    <button className="btn mt-8  w-full bg-gradient-to-r from-yellow-500 to-orange-400">Go To HomePage</button>
                </Link>
            </div>

        </div>
   );
};

export default MailConfirmed;