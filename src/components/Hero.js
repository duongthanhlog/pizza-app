import Image from "next/image";
import { FaRegArrowAltCircleRight   } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

function Hero() {
    return ( 
        <>
            <section style={{gridTemplateColumns : '.4fr .6fr'}} className="grid max-w-5xl mx-auto">
                <div className="py-20">
                    <h1 className="text-5xl font-bold leading-tight">
                        Everything 
                        <br/>is better
                        <br/>with a {' '}
                        <span className="text-primary">Pizza</span>
                    </h1>
                    <p className="my-6 text-gray-500 text-2xl">
                        Pizza is a missing piece place 
                        that makes everyday complete, a simple yet delicious joy in life.
                    </p>
                    <div className="flex gap-4 text-md">
                        <button className="uppercase flex gap-3 items-center justify-center py-3 px-6  bg-primary rounded-full text-white">
                            Order now
                            <FaRegArrowAltCircleRight />
                        </button>
                        <button className="flex gap-3 items-center px-6 py-3 font-bold text-gray-600 ">
                            Learn more
                            <FaAngleRight/>
                        </button>
                    </div>
                </div>
                <Image className="ml-auto" src={'/pizza.png'} width={550} height={550} alt={'pizza'}/>
            </section>
        </>
    );
}

export default Hero;