'use client'

import { useFormState } from 'react-dom';
import { Button } from '../button';
import Link from 'next/link';
import { addCustomer } from '@/app/customers/actions';

// Adjust the import path to match your structure

// Replace the default values with actual lists if applicable
const paymentMethods = ["Cash", "Credit Card", "Bank Transfer"];

export default function CustomerForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(addCustomer, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 m-11 md:p-6">
        {/* Customer Name */}
        <label htmlFor="name" className="mb-5 block text-xl font-medium">
          Add Customer
        </label>
        <div className="mb-4 grid grid-cols-2 gap-x-14">
          {/* Name */}
          <div>
            <label htmlFor="name" className='mb-2 block text-sm font-medium'>Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className='bg-gray-200 w-[400px] h-[40px] rounded-md' 
              required 
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className='mb-2 block text-sm font-medium'>Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className='bg-gray-200 w-[400px] h-[40px] rounded-md' 
              required 
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className='mb-2 block text-sm font-medium'>Phone Number</label>
            <input 
              type="text" 
              id="phoneNumber" 
              name="phoneNumber" 
              className='bg-gray-200 w-[400px] h-[40px] rounded-md' 
              required 
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className='mb-2 block text-sm font-medium'>Address</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              className='bg-gray-200 w-[400px] h-[40px] rounded-md' 
              required 
            />
          </div>

          {/* Created At */}
          <div>
            <label htmlFor="createdAt" className='mb-2 block text-sm font-medium'>Created At</label>
            <input 
              type="date" 
              id="createdAt" 
              name="createdAt" 
              className='bg-gray-200 w-[400px] h-[40px] rounded-md' 
              required 
            />
          </div>
        </div>

        <div className="mt-6 mr-20 flex justify-end gap-4">
          <Link
            href="/customers"
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
