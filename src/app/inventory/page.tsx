import { columns } from "./columns"  // Adjust the path to your columns file
import { DataTable } from "./data-table"
import Link from "next/link";

import { getData } from "./actions";
// Adjust the import path to match your structure
import { Button } from "@/components/ui/button";

export default async function CustomerPage() {
    // Fetch customer data from the server
    const data = await getData();

    return (
        <div className="container mx-auto py-10 mt-40">
            {/* Add customer button */}

            <h1 className="text-3xl font-bold py-4">Inventory</h1>
            {/* Render data table with customer data */}
            <DataTable columns={columns} data={data} />
        </div>
    )
}
