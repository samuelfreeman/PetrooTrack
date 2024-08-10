"use server"
import { sql } from "@vercel/postgres";
import { db } from "@vercel/postgres";
import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";
import dotenv from "dotenv";
import { Inventory } from "./columns";

dotenv.config();

export async function getData(): Promise<Inventory[]> {
    const client = await db.connect()

    unstable_noStore()
    // sum all quantity in stock 
    try {



        const result = await sql`SELECT * FROM inventory  ORDER BY created_at DESC;`;
        const inventory: Inventory[] = result.rows as Inventory[];
        return inventory;



    } catch (error) {
        console.log(error)

        return [];
    }

}