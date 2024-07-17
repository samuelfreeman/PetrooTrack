
import Image from "next/image";
import Link from "next/link";
const Service = () => {
    return (<div>
        <div className="h-[1260px] w-full  pt-10  border-b border-gray-300">
            <div className="flex flex-col w-full items-center ">
                <h1 className="text-4xl py-6">Services</h1>
                <p className="w-[1308px] text-2xl text-center text-gray-800  ">At PetroTrack, we provide intuitive solutions for your filling station management needs. Our seamless website and sales calculation system will streamline your operations and help you achieve your business goals.</p>
            </div>

            <div className=" flex w-full  p-10 pt-16">
                {/* the left section image */}
                <Image
                    src="/fill.svg"
                    alt="Services image"
                    width={600}
                    height={500} 
                    className="w-[700px] h-[620px] ml-28"
                    />


                {/* right section info */}
                <div className="pl-32">
<div className="border-l border-black">
    
                    <h1 className="pl-2">  Our Solutions</h1>
</div>
                    <h1 className="text-3xl py-4">Simplifying Filling Station Management</h1>
                    <p className="w-[530px] text-xl py-5">Our complete filling station management solution includes a user-friendly website and a sales calculation system. With seamless integration and a user-focused design, our solution will elevate your business to the next level.</p>
                    {/* socials  */}
                    <div className=" grid grid-cols-2 gap-7">

                        <div className=" flex">
                            {/* image */}
                            <Image src="/Facebook.svg" alt="facebook " width={70} height={200} />
                            <div className="pt-3 pl-2">
                                <h1 className="py-1 ">9723</h1>
                                <h1>Account boosted</h1>
                            </div>
                        </div>
                        <div className="flex">
                            {/* image */}
                            <Image src="/insta.svg" alt="insta " width={70} height={200} />
                            <div className="pt-3 pl-2">
                                <h1 className="py-1 ">9723</h1>
                                <h1>Account boosted</h1>
                            </div>
                        </div>
                        <div className=" flex">
                            {/* image */}
                            <Image src="/tiktok.svg" alt="tiktok " width={70} height={200} />
                            <div className="pt-3 pl-2">
                                <h1 className="py-1 ">9723</h1>
                                <h1>Account boosted</h1>
                            </div>
                        </div>
                        <div className="flex">
                            {/* image */}
                            <Image src="/x.svg" alt="x " width={70} height={200} />
                            <div className="pt-3 pl-2">
                                <h1 className="py-1 ">9723</h1>
                                <h1>Account boosted</h1>
                            </div>
                        </div>
                        <div className="flex">
                            {/* image */}
                            <Image src="/youtube.svg" alt="youtube " width={70} height={200} />
                            <div className="pt-3 pl-2">
                                <h1 className="py-1 ">9723</h1>
                                <h1>Account boosted</h1>
                            </div>
                        </div>
                        <div className="flex">
                            {/* image */}
                            <Image src="/linkedin.svg" alt="linkedin " width={70} height={200} />
                            <div className="pt-3 pl-2">
                                <h1 className="py-1 ">9723</h1>
                                <h1>Account boosted</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
 <div className="w-full  flex flex-col items-center text-center">
    <h1  className="text-2xl py-16 w-[742px]">Click on the button below to record day and night sales, manage transaction and enter other details.</h1>
  <Link href="/record">
  <button className="py-4 text-lg rounded-md px-10 bg-button text-white">Record Sales</button>
  </Link>
 </div>

        </div>

    </div>);
}

export default Service;