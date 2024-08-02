"use client"

import { ColumnDef } from "@tanstack/react-table"


// Define the type for the Customer data
export type Inventory = {
    id: string
    fuelType: string
    totalSales: string
    totalLiters: string
}

// Define the columns for the DataTable
export const columns: ColumnDef<Inventory>[] = [
    {
        accessorKey: "fueltype",
        header: "Fuel Type",
    },
    {
        accessorKey: "totalamount",
        header: "Total Sales",
    },
    {
        accessorKey: "litres",
        header: "Total Liters",
    }

]
