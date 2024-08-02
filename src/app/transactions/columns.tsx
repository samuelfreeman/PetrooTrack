"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import DeleteAction from "@/components/ui/transaction/Deleteaction"
import type { Transaction } from "./types"


// Define the columns for the DataTable
export const columns: ColumnDef<Transaction>[] = [
    { 
        accessorKey: "created_at",
        header: "Date",
        cell: ({ getValue }) => new Date(getValue() as string).toLocaleString(), // Format the date
    },
    {
        accessorKey: "fueltype",
        header: "Fuel Type",
    },
    {
        accessorKey: "customer",
        header: "Customer",
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
    },
    {
        accessorKey: "totalamount",
        header: "Total Amount",
    },
    {
        accessorKey: "paymentmethod",
        header: "Payment Method",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const transaction = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <Link href={`/transactions/${transaction.id}/edit`}>
                            Edit
                        </Link>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <DeleteAction id={transaction.id} />
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
