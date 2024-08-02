import { Fuel, columns } from "./columns"
import { DataTable } from "./data-table"
import Link from "next/link";

import { getData } from "@/app/tables/actions";
import { Button } from "@/components/ui/button";

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10 mt-40">

            <Button><Link href="/tables/create">Add</Link> </Button>
            <h1 className="text-3xl  font-bold py-4">Fuel Products</h1>
            <DataTable columns={columns} data={data} />
        </div>
    )
}
