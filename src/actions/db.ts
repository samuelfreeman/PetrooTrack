// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
    const sql = neon(process.env.DATABASE_URL || 'postgresql://expenseApp_owner:iHDrJc7S0QWB@ep-rapid-resonance-a5xtwzb5.us-east-2.aws.neon.tech/Petroltrack?sslmode=require');
    const data = await sql`SELECT * FROM customer `;
    return data;
}