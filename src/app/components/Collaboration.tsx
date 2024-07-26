import Image from "next/image";

const images = ['/russel.svg', 'salia.svg', 'sirprince.svg', '/youngrich.svg', '/vicent.svg', '/samuel.svg', '/omar.svg', '/ondem.svg', '/ivy.svg', '/ben.svg'];

const names = ['Russel', 'Salia', 'Sir Prince', 'Youngrich', 'Vicent', 'Samuel', 'Omar', 'Ondem', 'Ivy', 'Ben']

const title = ['Founder & CEO',
    'Senior Manager',
    'Chief Marketing Officer',
    'Senior Developer',
    'Marketing Manager',
    'Developer',
    'Project Manager',
    'UX/UI Designer',
    'QA/Tester',
    'HR/Finance Manager']





const Collaboration = () => {
    return (<div className="mt-10">
        <div className="w-full flex flex-col justify-center items-center pb-16 py-4">
            <p className="p-1 border-l-2 border-l-black m-4">Our Team</p>
            <h1 className="text-4xl">Collaboration for success</h1>

        </div>

        <div className="grid grid-cols-5">
            {
                images.map((image, index) => (
                    <div key={index} className="flex flex-col items-center gap-y-1 ">
                        <Image
                            src={image}
                            alt="team member"
                            width={100}
                            height={100}
                            className="w-[230px] h-[250px]"
                        />
                        <p className="text-2xl ">{names[index]}</p>
                        <p className="text-sm pb-6 ">{title[index]}</p>
                    </div>
                ))

            }

        </div>

    </div>);
}

export default Collaboration;