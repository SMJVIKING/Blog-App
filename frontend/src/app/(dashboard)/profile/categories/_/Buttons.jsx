"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonIcon from "@/ui/ButtonIcon";
import { TrashIcon } from "@heroicons/react/24/outline";
import Modal from "@/ui/Modal";
import ConfirmDelete from "@/ui/ConfirmDelete";
import useDeleteCategory from "./useDeleteCategory";

// delete :
export function DeleteCategory({ category: { _id: id, title } }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDeleting, deleteCategory } = useDeleteCategory();
  const router = useRouter();

  return (
    <>
      <ButtonIcon variant="danger" onClick={() => setIsOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={`حذف  ${title}`}
      >
        <ConfirmDelete
          disabled={isDeleting}
          resourceName={title}
          onClose={() => setIsOpen(false)}
          onConfirm={(e) => {
            e.preventDefault();
            deleteCategory(
              { id },
              {
                onSuccess: () => {
                  setIsOpen(false);
                  router.refresh("/profile/categories");
                },
              }
            );
          }}
        />
      </Modal>
    </>
  );
}