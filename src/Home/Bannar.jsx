
import bannar from "../../public/Bannar/1.jpg"
const Bannar = () => {
    return (
        <div className="flex items-center justify-center mt-20">
            {/* <img className="w-[1500px] h-[890px]" src={bannar}></img> */}
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${bannar})` }}>
                <div className="hero-overlay bg-opacity-55">
                    <div className="hero-content mt-10 p-14 md:p-14 lg:p-20 mx-auto text-center text-neutral-content">
                        <div className="max-w-max ">
                            <p className="mt-4 md:mb-3 lg:mb-5 font-bold text-white text-2xl md:text-3xl lg:text-4xl">Introducing </p>
                            <h1 className="mt-6 md:mb-3 lg:mb-5 text-2xl md:text-3xl lg:text-7xl text-sky-400 font-bold">Fare Well</h1>
                            <p className="text-sm text-slate-50 md:text-xl lg:text-6xl font-bold mb-3 mt-10">We are providing   easy Bus Service from one place to another place, in the City, NonStop.</p>
                           




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;