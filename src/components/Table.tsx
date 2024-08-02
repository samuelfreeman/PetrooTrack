"use server"

import { getData } from "../app/actions/actions.";
import { FuelProductTable } from "./FuelProduct";

export default async function ServerTable() {
  
  return (
    <div>
      <FuelProductTable />
    </div>
  );
}

