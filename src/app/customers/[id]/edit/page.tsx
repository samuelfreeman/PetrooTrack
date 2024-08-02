
import Form from '@/components/ui/customer/Edit-From'

import { notFound } from 'next/navigation';
import { fetchCustomerById } from '../../actions';
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [customer,] = await Promise.all([
        fetchCustomerById(id)

    ]);
    if (!customer) {
        notFound();
    }
    return (

        <main>

            <Form customer={customer} />

        </main>
    );
}