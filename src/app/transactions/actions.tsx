


"use server"
import { sql } from "@vercel/postgres";
import { db } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import dotenv from "dotenv";
dotenv.config();


import type { Transaction } from "./types";

// Fetch data from transactions table
export async function getData(): Promise<Transaction[]> {
    try {
        const client = await db.connect();
        const response = await client.sql`SELECT
    transactions.id,
    transactions.created_at,
    transactions.totalamount,
    transactions.quantity,
    transactions.fueltype,
    transactions.paymentmethod,
    customers.name as customer
FROM transactions
JOIN customers ON transactions.customer = customers.id

ORDER BY created_at DESC`;
const transactions: Transaction[] = response.rows as Transaction[];
return transactions;
    } catch (error) {
        console.error('Database Error:', error);
        return [];
    }
}

export type State = {
    errors?: {
        fueltype?: string[];
        customer?: string[];
        quantity?: string[];
        paymentmethod?: string[];
        totalamount?: string[];
    };
    message?: any | null;
};

// Insert into transactions table
export async function addTransaction(payload: State, formData: FormData): Promise<State> {
    try {
        const fueltype = formData.get('fuelType') as string;
        const customer = formData.get('customer') as string
        const quantity = Number(formData.get('quantity') as string);
        const paymentmethod = formData.get('paymentmethod') as string;
        const totalamount = Number(formData.get('totalamount') as string);
        console.log(fueltype)
        console.log(customer)
        console.log(quantity)
        console.log(paymentmethod)
        console.log(totalamount)
        const response = await sql`
          INSERT INTO transactions ( totalamount, customer, quantity, fueltype, paymentmethod) 
          VALUES ( ${totalamount}, ${customer}, ${quantity}, ${fueltype}, ${paymentmethod})
        `;
        console.log(response.rows);

    } catch (error) {
        console.error("Database Error:", error); // Log the error for debugging purposes
    }
    revalidatePath('/transactions');
    redirect("/transactions");
}

// Update a transaction
export async function updateTransaction(
    id: string,
    prevState: State,
    formData: FormData,
): Promise<State> {
    const client = await db.connect();
    const fueltype = formData.get('fuelType') as string;
    const customer = formData.get('customer') as string;
    const quantity = Number(formData.get('quantity') as string);
    const paymentmethod = formData.get('paymentmethod') as string;
    const totalamount = Number(formData.get('totalamount') as string);

    
    console.log("id:", id);
    console.log("fueltype:", fueltype);
    console.log("customer:", customer);
    console.log("quantity:", quantity);
    console.log("paymentmethod:", paymentmethod);
    console.log("totalamount:", totalamount);

    try {
        const result = await client.sql`
          UPDATE transactions
          SET fueltype = ${fueltype}, customer = ${customer}, quantity = ${quantity}, paymentmethod = ${paymentmethod}, totalamount = ${totalamount}
          WHERE id = ${id}
        `;
        console.log("sql result", result);
        console.log("transaction updated");

    } catch (error) {
        console.error("Database Error:", error); // Log the error for debugging purposes
    }

    revalidatePath('/transactions');
    redirect("/transactions");
}

// Fetch a transaction by ID
export async function fetchTransactionById(id: string): Promise<Transaction | null> {
    try {
        console.log(id);
        const data = await sql<Transaction>`
          SELECT
            
            totalamount,
            id,
            customer,
            quantity,
            fueltype,
            paymentmethod
          FROM transactions
          WHERE id = ${id}
        `;
        console.log(data.rows[0]);
        return data.rows[0] || null;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Transaction.');
    }
}

// Delete a transaction
export async function deleteTransaction(id: string): Promise<{ message: string }> {
    try {
        await sql`DELETE FROM transactions WHERE id = ${id}`;
        revalidatePath('/transactions');
        return { message: 'Transaction deleted successfully.' };
    } catch (error) {
        console.error("Database Error:", error); // Log the error for debugging purposes
        return { message: 'Database Error: Failed to Delete Transaction.' };
    }
}
