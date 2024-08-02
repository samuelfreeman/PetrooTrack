

import Image from "next/image";
import Link from "next/link";
const Page3 = () => {
    return (<div className="h-[750px] w-full p-16">
        <div className="flex justify-between">


            {/* text and image in one div */}
            <div className="  ">
                {/* heading  */}
                <h1 className="text-5xl w-[587px] h-[94px] mb-10">Specializing in seamless filling station management</h1>
                {/* text */}
                <div className="flex w-[1000px] justify-between">
                    {/* fisrt text */}
                    <div className=" w-[471px]  p-3"><h1 className="text-3xl">Our Values</h1>
                        <h3 className="text-2xl p-2">Efficiency and convenience</h3>
                        <p className="text-xl text-gray-700 p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
                    </div>
                    <div>
                        {/* second text */}
                        <div className="w-[471px] p-3 mt-10" >
                            <h3 className="text-2xl p-2">Transparency and honesty</h3>
                            <p className="text-xl text-gray-700 p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* image */}
            <div className="">

                <Image src="/car.jpeg" alt="carimage" width={400} height={100} className="rounded-md w-[530px] h-[400px]" />
            </div>
        </div>
        <div className="mt-10">
            <h1 className=" text-3xl w-full  text-center py-4">Efficient solutions for your filling station <br /> management needs</h1>
            <div className=" w-full flex justify-center py-4">


                <h1 className="bg-button py-3 px-6 text-xl text-white rounded-md">
                    <Link href="/learnMore">Learn More</Link></h1>
            </div>
        </div>


    </div>

    );
}

export default Page3;
