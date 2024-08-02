import { deleteTransaction } from "@/app/transactions/actions";// Update this path to your actions file
import { DeleteIcon } from "./DeleteIcon"; // Ensure DeleteIcon is the correct component for your delete icon

const DeleteTransactionAction = ({ id }: { id: string }) => {
    const deleteTransactionWithId = deleteTransaction.bind(null, id);
    return (
        <div className="mt-3">
            <form action={deleteTransactionWithId}>
                <button className="rounded-md border p-2 hover:bg-gray-100">
                    <span className="sr-only">Delete</span>
                    <DeleteIcon />
                </button>
            </form>
        </div>
    );
}

export default DeleteTransactionAction;
