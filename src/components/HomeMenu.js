import Image from "next/image";
import MenuItem from "./MenuItem";
import SectionHeader from "./SectionHeader";

function HomeMenu() {
    return (  
        <section className="flex justify-between relative mx-auto w-full">
            <div className="order-1 absolute left-0 -top-[166px] -z-10">
                <Image src={'/sallad1.png'} width={200}  height={190}  objectFit={"contain"} alt={'sallad'} />
            </div>
            <div className="order-3 absolute right-0 -top-[190px] -z-10">
                <Image src={'/sallad2.png'} width={200} height={190}  objectFit={"contain"} alt={'sallad'} />
            </div>
            <div className="flex-1 text-center leading-6 order-2">
                <SectionHeader mainHeader='Menu' subHeader='Check out'/>
                <ul className="grid grid-cols-4 gap-8 py-8 max-w-5xl mx-auto ">
                    <MenuItem/>                   
                    <MenuItem/>                   
                    <MenuItem/>                   
                    <MenuItem/>                   
                </ul>
            </div>
        </section>
    );
}

export default HomeMenu;