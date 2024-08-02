'use client'

import { useFormState } from 'react-dom';
import { Button } from '../button';
import Link from 'next/link';
import { addTransaction } from '@/app/transactions/actions';
import { Customer } from '@/app/transactions/types';


const fuelType = ["Diesel", "Petrol"]
// Adjust the import path to match your structure

// Replace the default values with actual lists if applicable
const paymentMethods = ["Cash", "Credit Card", "Bank Transfer"];

export default function TransactionForm({ customers }: { customers: Customer[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(addTransaction, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 m-11 md:p-6">
        <label htmlFor="name" className="mb-5 block text-xl font-medium">
          Record Transaction

        </label>
        {/* date */}
        <div className="mb-4 grid grid-cols-2 gap-x-14">


          {/* fuel type */}
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



          {/* customer */}
          <select
            id="customer"
            name="customer"
            className="peer block w-[400px] h-10 cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            aria-placeholder='Select a Customer'
            aria-describedby="customer-error"
          >
            <option value="" disabled>
              Select a Customer
            </option>
            {customers.map((customers: any) => (
              <option key={customers.id} value={customers.id}>
                {customers.name}
              </option>
            ))}
          </select>

          {/* payment method */}
          <div>

            <label htmlFor="fuelType" className='mb-2 block text-sm font-medium'>Payment Method</label>
            <select
              id="paymentmethod"
              name="paymentmethod"
              className="peer block w-[400px] cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue="paymentmethod"
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Select a payment method
              </option>
              {paymentMethods.map((pay) => (
                <option key={pay} value={pay}>
                  {pay}
                </option>
              ))}
            </select>
          </div>


          {/* quantityInStock */}

          <div>
            <label htmlFor="quantity" className='mb-5 block text-sm font-medium'>Quantity In stock</label>
            <input type="number" name='quantity' step="0.01" className=' bg-gray-200 w-[400px] h-[40px] rounded-md' />
          </div>


          {/* Total Amount  */}

          <div>
            <label htmlFor="totalAmount" className='mb-5 block text-sm font-medium'>Total Amount</label>
            <input type="number" name='totalamount' step="0.01" className=' bg-gray-200 w-[400px] h-[40px] rounded-md' />
          </div>


        </div>

        <div className="mt-6 mr-20 flex justify-end gap-4">
          <Link
            href="/transactions"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Create Record</Button>
        </div>
      </div>
    </form>
  );
}
