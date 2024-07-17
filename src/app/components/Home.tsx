import Image from "next/image";
// import star from '@/app/assests/star.png'
// import image1 from '@/app/assests/image1.png'
const list = ["GOIL", "ALLIED", "SHELL", "UNITY"]
const customer = '/image1.png'
import Rating from "./Start";
const Page1 = () => {
    return (<div className="w-full h-[ 644px] pb-16 bg-home px-5 pt-24">
        <div className="flex justify-between">
            <div>
                <h1 className="text-5xl py-10 px-16 pt-12">Revolutionalizing filling <br />station management</h1>
                <p className="text-2xl w-[770px] pl-16 text-gray-700 pb-28 font-light">Welcome to PetroTrack, the seamless filling station management solution for your business needs, designed with your convenience  <br /> in mind.</p>
                <div className="w-[650px] flex justify-between  pl-20">
                    {/* review */}
                    <div>

                        <Rating rating={5} />
                        <h1 className="font-extrabold text-2xl py-4">4.8 <span className="font-light text-xl text-gray-500">/50</span></h1>
                    </div>
                    {/* customer review  */}
                    <div className="flex">

                        <div className="w-24 h-24 flex items-center justify-center rounded-full overflow-hidden">
                            <Image
                                src={customer}
                                alt="Customer picture"
                                width={100}
                                height={100}
                                className="rounded-full"
                            />
                        </div>
                        <div className="p-4">
                            <h1 className="text-xl font-black pb-3">24k</h1>
                            <p className="text-gray-600">Happy Customer</p>
                        </div>
                    </div>

                </div>
            </div>
            <form action="" method="post" className=" flex  flex-col  w-[40%] p-14  text-xl   h-[60vh]  ">
                <div className=" flex flex-col h-[73px] mb-14">

                    <label htmlFor="text">Name</label>
                    <input type="text" name="name" placeholder="   Enter your name" required className="my-2 p-3 rounded-md" />
                </div>
                <div className=" flex flex-col h-[73px] mb-14">

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="   Enter your email" required className="my-2 p-3 rounded-md" />
                </div>
                <div className=" flex flex-col h-[73px] mb-14">

                    <label htmlFor="telephone">Phone Number</label>
                    <input type="telephone" name="telephone" placeholder="   Enter your phone" required className="my-2 p-3 rounded-md" />
                </div>
                <button type="submit" className="bg-button text-white rounded-md py-2">Get Started</button>
            </form>


        </div>
        <div className="flex pt-16 pl-16">
            <h1 className="text-xl pt-7 pr-16">
                Trusted by <br />global companies
            </h1>
            <ul className="flex">
                {list.map((item) => (
                    <li className="border-2 border-gray-700 rounded-md py-6 px-16  text-gray-700 mx-10 text-2xl" key={item}>{item}</li>
                ))}
            </ul>

        </div>
    </div>);
}

export default Page1;