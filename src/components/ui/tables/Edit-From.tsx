'use client';
import { useFormState } from 'react-dom';


import Link from 'next/link';

import { updateFuelProduct } from '@/app/tables/actions';
import { Fuel } from '@/app/tables/columns';
import { Button } from '../button';
export default function EditFuelForm({
  fuelProduct,

}: {
  fuelProduct: Fuel;

}) {

  const initialState = { message: null, errors: {} };
  const updateFuelWithId = updateFuelProduct.bind(null, fuelProduct.id);
  console.log("checking function binding ", updateFuelWithId, "fuel id", fuelProduct.id)

  const [state, dispatch] = useFormState(updateFuelWithId, initialState);

  return (
    <div className='mt-40'>
      <form action={dispatch}>
        <div className="rounded-md bg-gray-50 m-16 md:p-6">
          {/* Customer Name */}
          <div className="mb-4">
            <label htmlFor="customer" className="mb-2 block text-sm font-medium">
              Edit Fuel Product
            </label>

            {/* Invoice Amount */}


            <div className="relative mt-2 rounded-md grid grid-cols-2 gap-y-10">


              <div className="relative">
                <input
                  id="fueltype"
                  name="fuelType"
                  type="text"
                  defaultValue={fuelProduct.fueltype}
                  placeholder="Enter FuelType"
                  className="peer block w-[400px] rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />

              </div>
              <div className="relative">
                <input
                  id="supplier"
                  name="supplier"
                  type="text"
                  defaultValue={fuelProduct.supplier}
                  placeholder="Enter supplier"
                  className="peer block w-[400px] rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />

              </div>
              <div className="relative">
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  step="0.01"
                  defaultValue={fuelProduct.quantityinstock}
                  placeholder="Enter quantityIn Stock"
                  className="peer block w-[400px] rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />

              </div>
              <div className="relative">
                <input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  defaultValue={fuelProduct.priceperliter}
                  placeholder="Enter priceperliter"
                  className="peer block w-[400px] rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />

              </div>
            </div>
          </div>
          <div className="mt-6 mr-20 flex justify-end gap-4">
            <Link
              href="/tables"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>
            <Button type="submit">Edit FuelProduct</Button>
          </div>
        </div>


      </form>


    </div>
  );
}
