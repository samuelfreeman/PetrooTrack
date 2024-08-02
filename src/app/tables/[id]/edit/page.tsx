
import Form from '@/components/ui/tables/Edit-From'

import { notFound } from 'next/navigation';
import { fecthFuelProductById } from '../../actions';
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [fuelProduct,] = await Promise.all([
        fecthFuelProductById(id)

    ]);
    if (!fuelProduct) {
        notFound();
    }
    return (

        <main>

            <Form fuelProduct={fuelProduct} />

        </main>
    );
}