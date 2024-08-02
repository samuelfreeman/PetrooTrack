'use client';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import { updateCustomer } from '@/app/customers/actions'; // Update this path to your actions file
import { Customer } from '@/app/customers/columns'; // Update this path to your columns file
import { Button } from '../button';

export default function EditCustomerForm({
  customer,
}: {
  customer: Customer;
}) {
  const initialState = { message: null, errors: {} };
  const updateCustomerWithId = updateCustomer.bind(null, customer.id);
  console.log("checking function binding ", updateCustomerWithId, "customer id", customer.id)

  const [state, dispatch] = useFormState(updateCustomerWithId, initialState);

  return (
    <div className='mt-40'>
      <form action={dispatch}>
        <div className="rounded-md bg-gray-50 m-16 md:p-6">
          {/* Edit Customer */}
          <div className="mb-4">
            <label htmlFor="customer" className="mb-2 block text-sm font-medium">
              Edit Customer
            </label>

            {/* Customer Name */}
            <div className="relative mt-2 rounded-md grid grid-cols-2 gap-y-10">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={customer.name}
                  placeholder="Enter Name"
                  className="peer block w-[400px] rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={customer.email}
                  placeholder="Enter Email"
                  className="peer block w-[400px] rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>

              {/* Phone Number */}
              <div className="relative">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  defaultValue={customer.phonenumber}
                  placeholder="Enter Phone Number"
                  className="peer block w-[400px] rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>

              {/* Address */}
              <div className="relative">
                <input
                  id="address"
                  name="address"
                  type="text"
                  defaultValue={customer.address}
                  placeholder="Enter Address"
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
            <Button type="submit">Edit Customer</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
