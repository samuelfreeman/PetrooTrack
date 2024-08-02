'use client'
import { useFormState } from 'react-dom';
const fuelType = ["Diesel", "Petrol"]
const supplier = ["ABC-Fuels", "XYZ-Fuels"]
import { Button } from '../button';
import Link from 'next/link';
import { addFuelProduct } from '@/app/tables/actions';
export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(addFuelProduct, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 m-11   md:p-6">
        {/* Customer Name */}
        <label htmlFor="fuelType" className="mb-5 block text-xl font-medium">
          Add Fuel Product
        </label>
        <div className="mb-4 grid grid-cols-2 gap-x-14">
          {/* Fuel type */}
          <div>

            <label htmlFor="fuelType" className='mb-2 block text-sm font-medium'>FuelType</label>
            <select
              id="fuelType"
              name="fuelType"
              className="peer block w-[400px] cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue="Diesel"
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Select a fuel type
              </option>
              {fuelType.map((fuel) => (
                <option key={fuel} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>
          </div>


          {/* supplier */}


          <div>

            <label htmlFor="supplier" className='mb-2 block text-sm font-medium'>Supplier</label>
            <select
              id="supplier"
              name="supplier"
              className="peer block w-[400px] cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue="Diesel"
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Select a supplier
              </option>
              {supplier.map((supplier) => (
                <option key={supplier} value={supplier}>
                  {supplier}
                </option>
              ))}
            </select>
          </div>


          {/* quantityInStock */}

          <div>
            <label htmlFor="quantity" className='mb-5 block text-sm font-medium'>Quantity In stock</label>
            <input type="number" name='quantity' step="0.01" className=' bg-gray-200 w-[400px] h-[40px] rounded-md' />
          </div>
          {/* price */}
          <div>
            <label htmlFor="price" className='mb-5 mt-3 block text-sm font-medium'>Price Per Liter</label>
            <input type="number" name='price' step="0.01" className=' bg-gray-200 w-[400px] h-[40px] rounded-md' />
          </div>
        </div>



        <div className="mt-6 mr-20 flex justify-end gap-4">
          <Link
            href="/tables"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit" >Create Record</Button>
        </div>

      </div>
    </form>
  );
}
