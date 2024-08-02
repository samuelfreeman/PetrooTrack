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
import DeleteAction from "@/components/ui/customer/Deleteaction"

// Define the type for the Customer data
export type Customer = {
    id: string
    name: string
    email: string
    phonenumber: string
    address: string
    created_at: string
}

// Define the columns for the DataTable
export const columns: ColumnDef<Customer>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phonenumber",
        header: "Phone Number",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "created_at",
        header: "Created At",
        cell: ({ getValue }) => new Date(getValue() as string).toLocaleString(), // Format the date
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const customer = row.original

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
                        <Link href={`/customers/${customer.id}/edit`}>
                            Edit
                        </Link>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <DeleteAction id={customer.id} />
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
