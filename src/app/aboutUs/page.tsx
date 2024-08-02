import Collaboration from "../../components/Collaboration";
import Footer from "../../components/Footer";
import Page2 from "../../components/Page2";
import Solution from "../../components/Solutions";

const aboutUs = () => {

    return (
        <div>

            <div className=" mt-40  text-center flex justify-center flex-col w-full items-center">
                <h1 className="text-5xl">About Us</h1>
                <p className="w-[1108px] text-xl font-light pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel orci ac velit fermentum gravida vel in felis. Sed vel velit vel sem consectetur finibus. Proin vel velit vel felis cursus malesuada vel in justo. Sed euismod dolor a risus bibendum, vel sagittis felis malesuada. Nulla facilisi. Sed ut metus vel nisi eleifend suscipit vel et justo.</p>
            </div>
            <div className="mt-14">

                <  Page2 />


            </div>

            <div>
                <Solution />
            </div>

            <Collaboration />
            <div className="mt-10">
                <Footer />
            </div >
        </div>);
}

export default aboutUs;