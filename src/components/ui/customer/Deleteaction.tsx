import { deleteCustomer } from "@/app/customers/actions"; // Update this path to your actions file
import { DeleteIcon } from "./DeleteIcon"; // Ensure DeleteIcon is the correct component for your delete icon

const DeleteCustomerAction = ({ id }: { id: string }) => {
    const deleteCustomerWithId = deleteCustomer.bind(null, id);
    return (
        <div className="mt-3">
            <form action={deleteCustomerWithId}>
                <button className="rounded-md border p-2 hover:bg-gray-100">
                    <span className="sr-only">Delete</span>
                    <DeleteIcon />
                </button>
            </form>
        </div>
    );
}

export default DeleteCustomerAction;
