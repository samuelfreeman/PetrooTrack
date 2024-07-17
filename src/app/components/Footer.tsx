const Footer = () => {
    return (<div className="w-full h-[430px] bg-page3 text-white">
        <div className="w-full p-12  flex justify-between ">


            <h1 className="text-4xl  pl-10">Petrol Track</h1>
            <div className=" grid grid-cols-3 gap-32 text-xl mr-20">
                <ul>
                    <li className=" font-extrabold">Explore</li>
                    <li className="py-2">Services</li>
                    <li className="py-2">Contact Us</li>
                    <li className="py-2">Terms of Services</li>
                </ul>
                <ul>
                    <li className=" font-extrabold">Legal</li>
                    <li className="py-2">Privacy policy</li>
                    <li className="py-2">Cookies policy</li>
                    <li className="py-2">Accessibility</li>
                    <li className="py-2">Sitemap</li>
                </ul>
                <ul>
                    <li className=" font-extrabold">Connect Us</li>
                    <li className="py-2">Facebook</li>
                    <li className="py-2">Instagram</li>
                    <li className="py-2">X</li>
                    <li className="py-2">Linkedin</li>
                    <li className="py-2">Youtube</li>
                </ul>
            </div>

        </div>
        <hr />
        <h1 className="py-7 w-full text-center text-xl">
            Copyright@2024. PetroTrack website. All Right Reserved.
        </h1>
    </div>);
}

export default Footer;