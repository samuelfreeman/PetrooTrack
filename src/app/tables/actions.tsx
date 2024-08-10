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
    const fuel: Fuel[] = response.rows as Fuel[];
    return fuel;

  } catch (error) {
    console.error('Database Error:', error);

    return [];
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


    await sql`BEGIN`;


    const initialQuantity = await sql`SELECT litres FROM inventory WHERE fuelType = ${fuelType};`




    const response = await sql`INSERT INTO fuelProduct(fuelType ,supplier,quantityInstock,pricePerLiter)  VALUES (${fuelType},${supplier},${quantityInStock},${pricePerLiter});
    
    `;

    await sql`
UPDATE inventory 
SET litres = litres + ${quantityInStock}
WHERE fueltype = ${fuelType}
`
    const updatedQuantity = await sql`SELECT litres FROM inventory WHERE fuelType = ${fuelType};`



    if (updatedQuantity > initialQuantity) {
      await sql`COMMIT;`
    }
    else {
      await sql`ROLLBACK;`
    }



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

    const litres = await sql`SELECT quantityinstock, fuelType  FROM  fuelProduct
WHERE id = ${id};
`

console.log(" trying to see the columns in the inventory table")

const  results = await sql`SELECT * FROM inventory;`

console.log(results)
    console.log(litres)
    const result = await sql`  UPDATE inventory  
  SET   litres  = litres - ${litres.rows[0].quantityinstock}
  WHERE fuelType = ${litres.rows[0].fueltype};`


    console.log("update result from the database",result);

  const result2 =   await sql`DELETE FROM fuelProduct WHERE id = ${id}`;
console.log("deleted the result from the database");

    revalidatePath('/tables');
  } catch (error) {
    return {
      message: 'Database Error :Failed to delete FuelProduct.'
    }
  }


}