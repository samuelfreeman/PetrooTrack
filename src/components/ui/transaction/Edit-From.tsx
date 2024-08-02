'use client';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import { updateTransaction } from '@/app/transactions/actions'; // Update this path to your actions file
import type { Transaction } from '@/app/transactions/types';
import { Button } from '../button';
import { Customer } from '@/app/transactions/types';
const paymentMethods = ["Cash", "Credit Card", "Bank Transfer"];
const fuelType = ["Diesel", "Petrol"]

export default function EditTransactionForm({
  transaction, customers
}: {
  transaction: Transaction,
  customers: Customer[]
}) {
  const initialState = { message: null, errors: {} };
  const updateTransactionWithId = updateTransaction.bind(null, transaction.id);
  console.log("checking function binding ", updateTransactionWithId, "customer id", transaction.id)

  const [state, dispatch] = useFormState(updateTransactionWithId, initialState);

  return (
    <div className='mt-40'>
      <form action={dispatch}>
        <div className="rounded-md bg-gray-50 m-16 md:p-6">
          {/* Edit Transaction */}
          <div className="mb-4">
            <label htmlFor="customer" className="mb-2 block text-sm font-medium">
              Edit Transaction
            </label>

            {/* Customer Name */}
            <div className="relative mt-2 rounded-md grid grid-cols-2 gap-y-10">
              <select
                id="customer"
                name="customer"
                className="peer block w-[400px] cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-placeholder='Select a Customer'
                aria-describedby="customer-error"
                defaultValue={"Mr. Freeman"}
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

              {/* fueltype */}
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
              {/* Phone Number */}
              <div className="relative">
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  step={"0.01"}
                  defaultValue={transaction.quantity}
                  placeholder="Enter Quantity In Stock"
                  className="peer block w-[400px] rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>


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



              {/* Address */}
              <div className="relative">
                <input
                  id="totalamount"
                  name="totalamount"
                  type="number"
                  step={"0.01"}
                  defaultValue={transaction.totalamount}
                  placeholder="Enter Total Number"
                  className="peer block w-[400px] rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 mr-20 flex justify-end gap-4">
            <Link
              href="/customers"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>
            <Button type="submit">Edit Transaction</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
