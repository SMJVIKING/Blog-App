"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonIcon from "@/ui/ButtonIcon";
import { TrashIcon } from "@heroicons/react/24/outline";
import Modal from "@/ui/Modal";
import ConfirmDelete from "@/ui/ConfirmDelete";
import useDeleteUser from "./useDeleteUser";

// delete :
export function DeleteUser({ id, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDeleting, DeleteUser } = useDeleteUser();
  const router = useRouter();

  return (
    <>
      <ButtonIcon variant="danger" onClick={() => setIsOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        name={`حذف  ${name}`}
      >
        <ConfirmDelete
          disabled={isDeleting}
          resourceName={name}
          onClose={() => setIsOpen(false)}
          onConfirm={(e) => {
            e.preventDefault();
            DeleteUser(
              { id },
              {
                onSuccess: () => {
                  setIsOpen(false);
                  router.refresh("/profile/users");
                },
              }
            );
          }}
        />
      </Modal>
    </>
  );
}