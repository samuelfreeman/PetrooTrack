"use server"
import { sql } from "@vercel/postgres";
import { db } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import dotenv from "dotenv";
import { Customer } from "./columns";
dotenv.config();

export async function getData(): Promise<Customer[]> {
    try {
        const client = await db.connect();
        const response = await client.sql`SELECT * FROM customers ORDER BY created_at DESC`;
        console.log(response.rows);
        return response.rows;
    } catch (error) {
        console.error('Database Error:', error);
        return [];
    }
}

export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        phoneNumber?: string[];
        address?: string[];
    };
    message?: any | null;
};

// Insert into customers table
export async function addCustomer(payload: State, formData: FormData): Promise<State> {
    try {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phoneNumber = formData.get('phoneNumber') as string;
        const address = formData.get('address') as string;
        console.log(phoneNumber)
        const response = await sql`INSERT INTO customers (name, email, phonenumber, address) VALUES (${name}, ${email}, ${phoneNumber}, ${address})`;
        console.log(response.rows);


    } catch (error) {
        console.error("Database Error:", error); // Log the error for debugging purposes
    }
    revalidatePath('/customers');
    redirect("/customers");
}

export async function updateCustomer(
    id: string,
    prevState: State,
    formData: FormData,
): Promise<State> {
    const client = await db.connect();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const address = formData.get('address') as string;

    console.log(prevState);
    console.log("id:", id);
    console.log("name:", name);
    console.log("email:", email);
    console.log("phoneNumber:", phoneNumber);
    console.log("address:", address);

    try {
        const result = await client.sql`
      UPDATE customers
      SET name = ${name}, email = ${email}, phoneNumber = ${phoneNumber}, address = ${address}
      WHERE id = ${id}
    `;
        console.log("sql result", result);
        console.log("customer updated");


    } catch (error) {
        console.error("Database Error:", error); // Log the error for debugging purposes

    }

    revalidatePath('/customers');
    redirect("/customers");
}

export async function fetchCustomerById(id: string): Promise<Customer | null> {
    try {
        console.log(id);
        const data = await sql<Customer>`
      SELECT
        id,
        name,
        email,
        phoneNumber,
        address,
        created_at
      FROM customers
      WHERE id = ${id}
    `;
        console.log(data.rows[0]);
        return data.rows[0] || null;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Customer.');
    }
}

export async function deleteCustomer(id: string): Promise<{ message: string }> {
    try {
        await sql`DELETE FROM customers WHERE id = ${id}`;
        revalidatePath('/tables');
        return { message: 'Customer deleted successfully.' };
    } catch (error) {
        console.error("Database Error:", error); // Log the error for debugging purposes
        return { message: 'Database Error: Failed to Delete Customer.' };
    }
}
