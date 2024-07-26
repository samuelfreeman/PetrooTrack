import Image from "next/image";
import Page5 from "../components/Page5";
import Footer from "../components/Footer";

const learnMore = () => {
    return (<div className="mt-44   ">
        {/* headings */}
        <div className=" w-full flex flex-col justify-center items-center">

        
        <h1 className="text-4xl">Why Choose Us</h1>
        <p className="text-xl w-[1031px] text-center py-10">Our process is designed to deliver optimal results, ensuring your filling station management needs are met with precision and efficiency. Discover how we can streamline your operations today.</p>

        {/* content */}
        <div className="flex p-5 justify-around gap-x-32">
            {/* left section */}
            <div>

            <p  className="text-sm pl-3 border-l-black border-l-2 mb-3">Specialisation</p>
            <h1 className="text-2xl mb-3">Specializing in seamless petrol station management</h1>
            <h1 className="text-md mb-3">Our values:</h1>
            <div className="flex  text-lg w-full">
                {/* sm left */}
                <div >
                
                    <h1  className="text-2xl"> Efficiency and convenience</h1>
                    <p className="w-[311px]">We strive to deliver efficient and convenient solutions that streamline your operations and enhance your business growth.</p>
                </div>
                {/* sm right */}
                <div><h1 className="text-2xl">Transparency and honesty</h1>
                    <p className="w-[311px] ">We believe in transparency and honesty in all our dealings, providing a clear breakdown of all costs and charges.</p></div>
            </div>
            </div>

            {/* right section */}
            <Image
                src="/laptop2.svg"
                alt="laptop"
                width={700}
                height={100}
                className="w-[676px]"
            />

        </div>
        </div>
        <div>
            <Page5/>
        </div>
        <Footer/>
    </div>);
}

export default learnMore;