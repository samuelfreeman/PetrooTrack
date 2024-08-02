
import Form from '@/components/ui/transaction/Edit-From'

import { notFound } from 'next/navigation';
import { fetchTransactionById } from '../../actions';
import { getData } from '@/app/customers/actions';
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [transaction, customer] = await Promise.all([
        
        fetchTransactionById(id),
        getData()

    ]);
    if (!transaction) {
        notFound();
    }
    return (

        <main>

            <Form transaction={transaction} customers={customer} />

        </main>
    );
}