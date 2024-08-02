"use server"
import { sql } from "@vercel/postgres";
import { db } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import dotenv from "dotenv";
import { Inventory } from "./columns";

dotenv.config();

export async function getData(): Promise<Inventory[]> {
    const client = await db.connect();

    try {
        // Perform all sum queries in parallel
        const [
            dieselAmountResult,
            petrolAmountResult,
            petrolLitresResult,
            dieselLitresResult
        ] = await Promise.all([
            sql`SELECT SUM(totalamount) AS amount FROM transactions WHERE fueltype = 'Diesel';`,
            sql`SELECT SUM(totalamount) AS amount FROM transactions WHERE fueltype = 'Petrol';`,
            sql`SELECT SUM(quantityInstock) AS liters FROM fuelProduct WHERE fueltype = 'Petrol';`,
            sql`SELECT SUM(quantityInstock) AS liters FROM fuelProduct WHERE fueltype = 'Diesel';`
        ]);

        // Extract results with null checks
        const dieselAmount: number = dieselAmountResult.rows[0]?.amount || 0;
        const petrolAmount: number = petrolAmountResult.rows[0]?.amount || 0;
        const petrolLitres: number = petrolLitresResult.rows[0]?.liters || 0;
        const dieselLitres: number = dieselLitresResult.rows[0]?.liters || 0;

        // Perform all updates in parallel
        await Promise.all([
            sql`UPDATE inventory SET totalamount = ${dieselAmount} WHERE fueltype = 'Diesel';`,
            sql`UPDATE inventory SET totalamount = ${petrolAmount} WHERE fueltype = 'Petrol';`,
            sql`UPDATE inventory SET litres = ${petrolLitres} WHERE fueltype = 'Petrol';`,
            sql`UPDATE inventory SET litres = ${dieselLitres} WHERE fueltype = 'Diesel';`
        ]);

        // Fetch and return updated inventory
        const result = await sql`SELECT * FROM inventory ORDER BY created_at DESC;`;
        const inventory: Inventory[] = result.rows as Inventory[];
        return inventory;

    } catch (error) {
        console.error(error);
        return [];
    } finally {
        client.release(); // Ensure the client is released after all operations
    }
}