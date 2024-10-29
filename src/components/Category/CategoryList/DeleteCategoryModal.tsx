import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useDeleteCategoryMutation } from "@/Redux/api/Product/Category/categoryApi";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "sonner";

const DeleteCategoryModal = ({ id,categoryRefetch }:any) => {
  const [open, setOpen] = useState(false); // Dialog open state
  const [deleteFunction] = useDeleteCategoryMutation();

  const deleteHandler = async () => {
    try {
      const res = await deleteFunction(id).unwrap();
      if (res?.success === true) {
        toast.success(res.message);
        categoryRefetch()
      } else {
        toast.error(res.message);
      }
      setOpen(false); // Close dialog after success or failure
    } catch (error: any) {
      toast.error(error?.data?.message);
      setOpen(false); // Close dialog after error
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <RiDeleteBinLine
          className="text-red-500 text-[20px] cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-red-500 my-5">
            Are you sure you want to delete the category?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={deleteHandler}>Yes</Button>
          <Button onClick={() => setOpen(false)}>No</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCategoryModal;
