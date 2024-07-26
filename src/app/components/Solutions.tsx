import Image from "next/image";

const Solution = () => {

    return (
    <div >

    
    <div className="flex w-full mt-10">
        {/* right section   */}
        <div className="w-[50%] pl-28">
            <p className="border-l-2 border-l-black p-1  mt-5 text-sm mb-9 ml-8">Our Core Values</p>
            <h1 className="w-[593px]  text-5xl pl-8">Efficient Solution for Your Fueling Needs</h1>
            <ul className="p-8 w-[617px] text-xl">
                <li className="bg-black text-white w-[425px] text-2xl  p-3 my-3"> 1. Innovative design</li>
                <p>We are committed to delivering innovative designs that meet the unique needs of our clients. Our user-friendly website is designed to streamline your filling station management and provide you with a seamless experience.</p>
                <li  className="bg-black text-white  w-[425px] text-2xl p-3 my-3"> 2. Exceptional Customer Servive</li>
                <p>At PetroTrack, we prioritize exceptional customer service. Our team of experts is dedicated to providing you with the highest level of support and guidance every step of the way.</p>

                <li  className="bg-black text-white  w-[425px] text-2xl p-3" my-3> 3. Continuous Improvement</li>
                <p>We believe in continuous improvement. We are constantly seeking new ways to enhance our services and provide you with the most advanced and effective solutions.</p>
                <li  className="bg-black text-white  w-[425px] text-2xl p-3 my-3"> 4. Transparency and Integrity</li>
                <p>We operate with full transparency and integrity. Our commitment to honesty and ethical business practices is at the core of everything we do.</p>
            </ul>



        </div>


        {/* left section */}
        <div className="pt-10 pl-7">

            <Image

                src="/Rectangle 18.svg"
                alt="image"
                width={500}
                height={100}
                className="h-[791px] w-[689px]"
            />
        </div>
    </div>
    <hr />
    </div>
    );
}

export default Solution;