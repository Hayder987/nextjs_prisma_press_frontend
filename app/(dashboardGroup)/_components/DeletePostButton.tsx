"use client"

import { Trash2 } from "lucide-react"
import ConfirmDialog from "./ConfirmDialog";
import { deletePostById } from "../_actions/myPostsActions";
import { toast } from "sonner";




const DeletePostButton = ({id} : {id:string}) => {
 const handleDelete = async () => {
    console.log("Deleted");
    await deletePostById({id});
     toast.info("Post Deleted SuccessFully!")
  };

  return (
    <ConfirmDialog
      title="Delete Post"
      description="Are you sure you want to delete this post? This action cannot be undone."
      confirmText="Delete"
      cancelText="Cancel"
      onConfirm={handleDelete}
      trigger={
        <button className="rounded-md p-2 hover:bg-red-100">
          <Trash2 className="size-5 text-red-500" />
        </button>
      }
    />
  );
}

export default DeletePostButton