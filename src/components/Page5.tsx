const Page5 = () => {
    return (<div className="h-[638px] w-full   bg-page5">
        <div className="w-full text-center">

            <h1 className="text-3xl py-16">Efficient filling station management solutions, <br />designed for your success</h1>
            <input type="email" placeholder="Email" className="mb-5 h-[39px] w-[500px]" /> <br />
            <button className=" bg-button  w-[500px] py-4 px-40 rounded-md text-white">Subscribe</button>
        </div>
        <div className="py-9 px-20 mt-10 flex justify-between">
            <ul className=" text-lg py-7">
                <li className="text-xl">PetroTrack</li>
                <li className="text-gray-800 py-2">Our Team</li>
                <li className="text-gray-800 py-2">Our Process</li>
                <li className="text-gray-800 py-2">Our Services</li>
            </ul>
            <div>
                <h1 className="text-2xl py-7">Operational work hours</h1>
                <table className="w-full text-left border-collapse">
                    <tbody>
                        <tr className="border-b border-black text-xl">
                            <td className="py-2 px-4">Mon - Wed</td>
                            <td className="py-2 px-4">: 7AM - 8PM</td>
                        </tr>
                        <tr className="border-b border-black text-xl">
                            <td className="py-2 px-4">Thur - Sun</td>
                            <td className="py-2 px-4">: 7AM - 7PM</td>
                        </tr>
                        <tr className="text-gray-600 text-sm">
                            <td className="py-2 px-4">Weekend</td>
                            <td className="py-2 px-4">Closed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


    </div>);
}

export default Page5;   