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
        await client.query(`
            WITH
                diesel_transaction_sum AS (
                    SELECT SUM(totalamount) AS diesel_amount
                    FROM transactions
                    WHERE fueltype = 'Diesel'
                ),
                petrol_transaction_sum AS (
                    SELECT SUM(totalamount) AS petrol_amount
                    FROM transactions
                    WHERE fueltype = 'Petrol'
                ),
                diesel_quantity_sum AS (
                    SELECT SUM(quantityInstock) AS diesel_litres
                    FROM fuelProduct
                    WHERE fueltype = 'Diesel'
                ),
                petrol_quantity_sum AS (
                    SELECT SUM(quantityInstock) AS petrol_litres
                    FROM fuelProduct
                    WHERE fueltype = 'Petrol'
                )
            UPDATE inventory
            SET
                totalamount = CASE 
                    WHEN fueltype = 'Diesel' THEN (SELECT diesel_amount FROM diesel_transaction_sum)
                    WHEN fueltype = 'Petrol' THEN (SELECT petrol_amount FROM petrol_transaction_sum)
                END,
                litres = CASE 
                    WHEN fueltype = 'Diesel' THEN (SELECT diesel_litres FROM diesel_quantity_sum)
                    WHEN fueltype = 'Petrol' THEN (SELECT petrol_litres FROM petrol_quantity_sum)
                END
            WHERE fueltype IN ('Diesel', 'Petrol');
        `);

        // Fetch and return updated inventory
        const result = await client.query('SELECT * FROM inventory ORDER BY created_at DESC;');
        const inventory: Inventory[] = result.rows as Inventory[];
        return inventory;

    } catch (error) {
        console.error(error);
        return [];
    } finally {
        client.release();
    }
}