import Form from "@/components/ui/transaction/Create-Form";
import { getData } from "@/app/customers/actions";
const Page = async () => {
    const data = await getData();

    console.log("customer data", data)

    return (<div className="mt-40">


        <Form customers={data} />

    </div>);
}

export default Page;