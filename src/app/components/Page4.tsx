import Image from "next/image";
const person1 = '/person1.png';
const person2 = '/person2.png';
const person3 = '/person3.png';
const person4 = '/person4.png';


const Page4 = () => {
    return (<div className="h-[925px] bg-page3 w-full p-16 pl-32 text-white">
        <h1 className=" text-5xl pb-10">The ultimate solution for filling station management</h1>
        <h1 className="text-2xl">Testimonials</h1>
        <hr className="w-16 py-16" />

        {/* divs with their images  */}
        <div className="grid grid-cols-2 gap-32 text-lg w-full">


            {/* div1 */}
            <div>
                <p className="w-[491px] h-[88px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
                <div className=" flex w-[324px] h-[86px] py-10">

                    <div className=" rounded-full  w-20 h-20 overflow-hidden mr-7">

                        <Image src={person1} alt="person1" width={100} height={100} className="" />
                    </div>
                    <div>

                        <h1 className="py-2 text-lg">Mustapha Diyaol Haqq</h1>
                        <p className="text-sm">Founder, Okuafo Foundation</p>
                    </div>
                </div>
            </div>
            {/* div 2 */}
            <div>
                <p className="w-[491px] h-[88px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
                <div className=" flex w-[324px] h-[86px]   py-10">

                    <div className=" rounded-full  w-20 h-20 overflow-hidden mr-7">

                        <Image src={person2} alt="person1" width={100} height={100} className="" />
                    </div>
                    <div>

                        <h1 className="py-2 text-lg">Mustapha Diyaol Haqq</h1>
                        <p className="text-sm">Founder, Okuafo Foundation</p>
                    </div>
                </div>
            </div>
            {/* div 3 */}
            <div>
                <p className="w-[491px] h-[88px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
                <div className=" flex w-[324px] h-[86px]  py-10">

                    <div className=" rounded-full  w-20 h-20 overflow-hidden mr-7">

                        <Image src={person3} alt="person1" width={100} height={100} className="" />
                    </div>
                    <div>

                        <h1 className="py-2 text-lg">Mustapha Diyaol Haqq</h1>
                        <p className="text-sm">Founder, Okuafo Foundation</p>
                    </div>
                </div>
            </div>
            {/* div 4  */}
            <div>
                <p className="w-[491px] h-[88px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
                <div className=" flex w-[324px] h-[86px]  py-10">

                    <div className=" rounded-full  w-20 h-20 overflow-hidden mr-7">

                        <Image src={person4} alt="person1" width={100} height={100} className="" />
                    </div>
                    <div>

                        <h1 className="py-2 text-lg">Mustapha Diyaol Haqq</h1>
                        <p className="text-sm">Founder, Okuafo Foundation</p>
                    </div>
                </div>
            </div>

        </div>
    </div>);
}

export default Page4;