
import Image from "next/image";
import Page5 from "../components/Page5";
import Footer from "../components/Footer";

const contactUs = () => {
    const images: string[] = ['/call.svg', '/mail.svg', '/time.svg'];
    const titles: string[] = ['Talk to our team', 'Email Us', 'Open Hours'];
    const addresses: string[] = ['+233 245000000', 'info@petrotrack.com', 'Everyday - 7AM - 8PM'];


    return (<div className="mt-24 w-full ">

        <div className="w-full h-[665px]">

            {/* contact us */}
            <div className="pt-20 text-center w-full  flex flex-col justify-center items-center">
                <h1 className="text-4xl">Contact Us </h1>
                <p className="w-[1108px] text-xl pt-5">If you have any questions or would like to learn more about our services, please don’t hesitate to contact us. Our team is always standing by and ready to help.</p>
            </div>
            {/* our values */}
            <div className="pt-20 text-center w-full  flex flex-col justify-center items-center">

                <h1 className="border-l-2 border-l-black pl-2 mb-2">Our Core Values</h1>
                <p className="text-4xl w-[1091px]">Reach out to us today to learn more about our services and how we can help you streamline your filling station management.</p>
            </div>
            <div className="flex justify-center pt-14 w-full gap-x-48 pb-9">

                {
                    images.map((images, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center gap-y-2 gap-x-12">
                                <Image
                                    src={images}
                                    alt="contact us"
                                    width={70}
                                    height={100}
                                />
                                <h1 className="text-lg font-bold">{titles[index]}</h1>
                                <p className="text-sm">{addresses[index]}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>



        <div className="w-full h-[704px] bg-page5 flex justify-around mb-11">
            {/* right section  */}
            <div className="pt-20">

                <h1 className="text-sm border-l-black border-l-2 pl-2">Get in touch</h1>
                <h1 className="text-4xl pt-3">Let’s Connect</h1>

                <form action="" className="flex flex-col">
                    <label htmlFor="fullname" className="pt-7 text-xl">Full Name</label>
                    <input type="text" name='fullname' className="w-[565px]  h-[39px] " placeholder="Enter your full name" />
                    <label htmlFor="email" className="pt-7 text-xl">Email</label>
                    <input type="email" name="email" className="w-[565px] h-[39px]" placeholder="Enter your email" />
                    <label htmlFor="message" className="pt-7 text-xl">Message</label>
                    <textarea name="message" id="" className="h-[211px] w-[565px]" placeholder="Write your message or question here..."></textarea>

                    <button className="bg-button p-3 rounded-md text-white">Get Started</button>
                </form>
            </div>


            {/* left section */}

            <Image
                src="/laptop.svg"
                alt="image"
                width={600}
                height={100}
                className="w-[594px]"
            />


        </div>


<div>
    <Image
    src="/map.svg"
    alt="map"
    width={1000}
    height={10000}
    className="w-[1330px]  h-[575px] m-10 ml-52"
    />
</div>
<Page5/>
<Footer/>

    </div>);
}

export default contactUs;