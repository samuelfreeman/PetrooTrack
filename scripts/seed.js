import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";

// Load environment variables
dotenv.config();

// Log the database URL
console.log(
  "Database URL:",
  process.env.DATABASE_URL ||
    "postgresql://expenseApp_owner:iHDrJc7S0QWB@ep-rapid-resonance-a5xtwzb5.us-east-2.aws.neon.tech/Petroltrack?sslmode=require"
);

// Create a Neon connection instance
const sql = neon(process.env.DATABASE_URL || "postgresql://expenseApp_owner:iHDrJc7S0QWB@ep-rapid-resonance-a5xtwzb5.us-east-2.aws.neon.tech/Petroltrack?sslmode=require");

// Sample data to insert
const data = {
  name: "Samuel",
  telephone: "+233541383756",
  email: "samueltest@gmail.com",
  address: "Kumasi-Krofrom",
};

// Function to execute queries
const query = async (text, params) => {
  try {
    return await sql(text, params);
  } catch (err) {
    console.error("Error executing query:", err.stack);
  }
};

// Function to insert customer data
const insertCustomerData = async () => {
  const text =
    "INSERT INTO customer(name, telephone, email, address) VALUES($1, $2, $3, $4) RETURNING *";
  const values = [data.name, data.telephone, data.email, data.address];

  try {
    const res = await query(text, values);
    console.log("Inserted row:", res[0]);
  } catch (err) {
    console.error("Error inserting data:", err.stack);
  }
};

// Run the data insertion function
insertCustomerData();



//  Create tables 
/*
 await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

*/

 