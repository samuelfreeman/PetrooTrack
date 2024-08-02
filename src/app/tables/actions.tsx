
"use server"
import { sql } from "@vercel/postgres";
import { db } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Fuel } from "./columns";

import dotenv from "dotenv";
dotenv.config();




export async function getData(): Promise<Fuel[]> {

  try {
    const client = await db.connect()
    const response = await client.sql`SELECT * FROM fuelProduct ORDER BY created_at DESC`;
    console.log("fetched data from database")
    return response.rows;

  } catch (error) {
    console.error('Database Error:', error);
  }



} export type State = {
  errors?: {
    fuelType?: string[];
    supplier?: string[];
    pricePerLiter?: string[];
    quantity?: string[];
  };
  message?: any | null;

};


// insert into fuel product
export async function addFuelProduct(payload: State, formData: FormData): Promise<State> {

  try {
    const fuelType = formData.get('fuelType') as string;
    const supplier = formData.get('supplier') as string;
    const pricePerLiter = Number(formData.get('price'));
    const quantityInStock = Number(formData.get('quantity'));


    const response = await sql`INSERT INTO fuelProduct(fuelType ,supplier,quantityInstock,pricePerLiter)  VALUES (${fuelType},${supplier},${quantityInStock},${pricePerLiter});`;

    console.log(response);

  } catch (error) {
    console.error("Database Error:", error); // Log the error for debugging purposes

  }

  revalidatePath('/tables');
  redirect("/tables")
}



export async function updateFuelProduct(
  id: string,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const client = await db.connect()
  const fuelType = formData.get('fuelType') as string;
  const supplier = formData.get('supplier') as string;
  const pricePerLiter = Number(formData.get('price'));
  const quantityInStock = Number(formData.get('quantity'));


  console.log(prevState)
  console.log("id:", id);
  console.log("fuelType:", fuelType);
  console.log("supplier:", supplier);
  console.log("pricePerLiter:", pricePerLiter);
  console.log("quantityInStock:", quantityInStock);
  try {
    const result = await client.sql`
    UPDATE fuelProduct
        SET fuelType = ${fuelType}, supplier =${supplier}, quantityInStock = ${quantityInStock},pricePerLiter=${pricePerLiter}
        WHERE id = ${id}
     `;
    console.log("sql result", result);
    console.log("fuelproduct updated")
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }


  revalidatePath('/tables');
  redirect("/tables")

}

export async function fecthFuelProductById(id: string) {

  try {

    console.log(id)
    const data = await sql<Fuel>`
      SELECT
      id,
        fuelType,
        supplier,
        pricePerLiter,
        quantityInStock
      FROM fuelProduct
      WHERE id = ${id};
    `;
    console.log(data.rows[0])


    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch  Fuel Product.');
  }
}

export async function deleteFuelProduct(id: string) {

  try {
    await sql`DELETE FROM fuelProduct WHERE id = ${id}`;
    revalidatePath('/tables');
  } catch (error) {
    return {
      message: 'Database Error :Failed to delete FuelProduct.'
    }
  }


}