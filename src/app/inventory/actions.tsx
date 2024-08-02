"use server"
import { sql } from "@vercel/postgres";
import { db } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import dotenv from "dotenv";
import { Inventory } from "./columns";

dotenv.config();

export async function getData(): Promise<Inventory[]> {
    const client = await db.connect()


    // sum all quantity in stock 
    try {
        // Sum all transactions
        const dieselAmountResult: any = await sql`SELECT SUM(totalamount) AS amount FROM transactions WHERE fueltype = 'Diesel';`;
        const dieselAmount: number = dieselAmountResult.rows[0]?.amount || 0;
        console.log("diesel amount", dieselAmount)

        const petrolAmountResult: any = await sql`SELECT SUM(totalamount) AS amount FROM transactions WHERE fueltype = 'Petrol';`;
        const petrolAmount = petrolAmountResult.rows[0]?.amount || 0;


        // Sum all quantity in stock
        const petrolLitresResult: any = await sql`SELECT SUM(quantityInstock) AS liters FROM fuelProduct WHERE fueltype = 'Petrol';`;
        const petrolLitres = petrolLitresResult.rows[0]?.liters || 0;


        const dieselLitresResult: any = await client.sql`SELECT SUM(quantityInstock) AS liters FROM fuelProduct WHERE fueltype = 'Diesel';`;
        const dieselLitres = dieselLitresResult.rows[0]?.liters || 0;






        // update amount for the disel


        await sql`
         UPDATE inventory 
         SET  totalamount =${dieselAmount}
         WHERE fueltype = 'Diesel';`;


        await sql`
         UPDATE inventory 
         SET  totalamount =${petrolAmount}
         WHERE fueltype = 'Petrol';`;



        await sql`
         UPDATE inventory 
         SET  litres =${petrolLitres}
         WHERE fueltype = 'Petrol';`;

        await sql`
         UPDATE inventory 
         SET  litres =${dieselLitres}
         WHERE fueltype = 'Diesel';`;


        const result = await sql`SELECT * FROM inventory  ORDER BY created_at DESC;`;

        return result.rows;



    } catch (error) {
        console.log(error)
    }
    revalidatePath("/inventory")

}