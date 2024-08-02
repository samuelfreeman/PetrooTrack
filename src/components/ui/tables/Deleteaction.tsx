import { deleteFuelProduct } from "@/app/tables/actions";
import { DeleteIcon } from "./DeleteIcon";



const DeleteAction = ({ id }: { id: string }) => {
    const deleteInvoiceWithId = deleteFuelProduct.bind(null, id);
    return (<div className="mt-3">

        <form action={deleteInvoiceWithId}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>

                <DeleteIcon />

            </button>
        </form>


    </div>
    );
}

export default DeleteAction;

