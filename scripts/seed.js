// const { db } = require("@vercel/postgres");
import { db } from "@vercel/postgres";
import dotenv from "dotenv";
dotenv.config();

// async function fuelProduct(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     // Create the "users" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS fuelProduct (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//        fuelType VARCHAR(255) NOT NULL,
//   supplier VARCHAR(255) NOT NULL,
//   quantityInStock INT NOT NULL,
//   pricePerLiter FLOAT NOT NULL
//       );
//     `;

//   console.log(createTable)
//     console.log(`Created "Fuel" table`);

//     return {
//       createTable,
//     };
//   } catch (error) {
//     console.error("Error creating table:", error);
//     throw error;
//   }

 
//  }



//  async function FetchFuelProduct(client) {
//   try {
  
//     const getData = await client.sql`SELECT * FROM fuelProduct;`


//   console.log(getData)
//     console.log(`Fetched from "Fuel" table`);

//     return {
//       getData,
//     };
//   } catch (error) {
//     console.error("Error fetch from table:", error);
//     throw error;
//   }
//  }
// async function porpulateTable(client) {
//   try {
//     await client.sql`INSERT INTO fuelProduct(fuelType ,supplier,quantityInstock,pricePerLiter) VALUES ('Diesel','ABC',200,2.9);`;
//     console.log(`Inserted into  "Fuel" table`);
    
//   } catch (error) {
//     console.error("Error trying to insert into Fuel table", error);
//     throw error;
//   }
// }


async function main() {
  const client = await db.connect();
await FetchFuelProduct(client)
  // await fuelProduct(client);
  // await porpulateTable(client)
  
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err[errors]
  );
});
