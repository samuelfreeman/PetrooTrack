import Image from "next/image";

const Page2 = () => {
    return (<div className="w-full h-[1150px] bg-page2 flex justify-between ">
        {/* left section  */}
        <div className="p-10 pl -9 mt-14">
            {/* image  */}
            <Image
                src="/image2.jpeg"
                alt="Page2 image"
                width={500}
                height={400}

                className="rounded-lg bg-cover w-[700px] h-[620px]"
            />

            {/* our vision  */}
            <div className=" text-white p-10 text-xl">
                <h1 className="py-4 text-2xl ">Our Vision </h1>
                <p className="py-4 ">Our vision is to be the leading provider of petrol <br />station management solutions, empowering <br /> businesses to achieve their full  potential and drive <br />growth.</p>
                <button className="bg-button rounded-md p-4">Learn More</button>
            </div>

        </div>

        {/* right section */}
        <div className="p-10 pr-9 mt-14 w-[50%]">
            {/* about us  */}
            <div className="text-white text-xl  text-left ">
                <h2 className="py-4 text-xl">About Us</h2>
                <h1 className="py-4 text-5xl">About PetroTrack</h1>
                <div className="py-4">
                    <h5 className="py-4">Seamless product inventory management</h5>
                    <div className="bg-white w-[605px] height-[15px]"><div className=" bg-button w-[450px] h-[15px] "></div></div>
                    <h5 className="py-4">Efficiency and accurate sales tracking</h5>
                    <div className="bg-white w-[605px] height-[15px]"><div className=" bg-button w-[568px] h-[15px] "></div></div>
                    <h5 className="py-4" >User-friendly interface</h5>
                    <div className="bg-white w-[605px] height-[15px]"><div className=" bg-button w-[527px] h-[15px] "></div></div>
                    <h5 className="py-4" >Dedicated support team</h5>
                    <div className="bg-white w-[605px] height-[15px]"><div className=" bg-button w-[586px] h-[15px] "></div></div>
                </div>
            </div >


            <div className=" text-white mt-11 text-xl">
                {/* our mission */}

                <h1 className="text-3xl py-8 ml-7">Our Mission</h1>
                <div className="flex py-4">
                    <div className="w-[358px]">
                        <Image
                            src="/diagram.png"
                            alt="diagram"
                            width={70}
                            height={100}
                            className="py-3 ml-8"
                        />
                        <p className=" text-lg px-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae quidem, ab consequuntur voluptatum dolores nulla,  quo quos tempore perspiciatis excepturi libero dicta nisi, incidunt quaerat.  Nostrum voluptatibus cupiditate dolorum?</p>
                    </div>
                    <div className="w-[358px] ">
                        <Image
                            src="/database.png"
                            alt="database"
                            width={70}
                            height={200}
                            className="py-3 ml-8"
                        />
                        <p className=" text-lg px-10 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit recusandae quidem, ab consequuntur voluptatum dolores nulla,  quo quos tempore perspiciatis excepturi libero dicta nisi, incidunt quaerat.  Nostrum voluptatibus cupiditate dolorum?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Page2;