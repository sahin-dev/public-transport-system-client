
import { Link } from "react-router-dom";
import emailPhoto from "../../public/Mail/1.jpg"
const MailNotify = () => {
   return (
      <div className="flex mt-32 justify-center items-center space-y-4">
            <div className="">
                <img width={400} src={emailPhoto}></img>
                <h1 className="text-center mt-4 font-bold text-2xl">An Email has been sent</h1>
                <Link to="/">
                    <button className="btn mt-8  w-full bg-gradient-to-r from-yellow-500 to-orange-400">Go To HomePage</button>
                </Link>
            </div>

        </div>
   );
};

export default MailNotify;