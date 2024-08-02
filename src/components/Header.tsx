import Link from "next/link";

const services = '/services'
const aboutUs = '/aboutUs'
const contactUs = '/contactUs'

const Header = () => {
    return (<div>
        <nav className=" w-full h-24 flex text-xl fixed top-0 left-0 right-0 bottom-0 z-50 shadow-md  bg-white  items-center justify-between px-16">
            <div className="">
                <h1 className="text-2xl font-medium">
                    <Link href="/">
                        PetroTrack
                    </Link>
                </h1>
            </div>
            <nav className=" flex">
                <ul className=" flex  items-center justify-around w-96">
                    <li>

                        <Link href={services} >
                            Services
                        </Link>

                    </li>
                    <li>
                        <Link href={aboutUs}>
                            About Us
                        </Link></li>


                    <li>
                        <Link href={contactUs}>
                            Contact Us
                        </Link>

                    </li>

                </ul>
            </nav>
            <Link href={"/services"}>
                <button className="p-2 px-6 text-white rounded-md bg-button">Get Started</button>
            </Link>
        </nav >

    </div>);
}

export default Header;