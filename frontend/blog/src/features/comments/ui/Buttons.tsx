"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "@/ui/Button";
import { PencilIcon, TrashIcon } from "lucide-react";
import Modal from "@/ui/Modal";
import ConfirmDelete from "@/ui/ConfirmDelete";
import RHFSelect from "@/ui/RHFSelect";
import useUpdateComment from "../hook/useUpdateComment";
import useDeleteComment from "../hook/useDeleteComment";

// Types
type CommentStatus = 0 | 1 | 2;

interface FormValues {
  status: CommentStatus;
}

interface DeleteCommentProps {
  id: string;
  title: string;
}

interface UpdateCommentProps {
  id: string;
  currentStatus: CommentStatus;
  onEdit: (newStatus: CommentStatus) => void;
}

// ============== Delete Comment Component ==============
export function DeleteComment({ id, title }: DeleteCommentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isDeleting, deleteComment } = useDeleteComment();
  const router = useRouter();

  return (
    <>
      <Button variant="danger" onClick={() => setIsOpen(true)} size="md">
        <TrashIcon className="w-4 h-4" />
      </Button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={`حذف ${title}`}
      >
        <ConfirmDelete
          disabled={isDeleting}
          resourceName={title}
          onClose={() => setIsOpen(false)}
          onConfirm={(e) => {
            e.preventDefault();
            deleteComment(
              { id },
              {
                onSuccess: () => {
                  setIsOpen(false);
                  router.refresh();
                },
              }
            );
          }}
        />
      </Modal>
    </>
  );
}

// ============== Update Comment Component ==============
export function UpdateComment({
  id,
  currentStatus,
  onEdit,
}: UpdateCommentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: { status: currentStatus }
  });
  
  const { isUpdating, UpdateComment } = useUpdateComment();
  const router = useRouter();

  const options = [
    { label: "رد شده", value: 0 },
    { label: "در انتظار تایید", value: 1 },
    { label: "تایید شده", value: 2 },
  ];

  const onSubmit = (data: FormValues) => {
    UpdateComment(
      { id, options: { status: data.status } },
      {
        onSuccess: () => {
          onEdit(data.status);
          setIsOpen(false);
          router.refresh();
        },
      }
    );
  };

  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)} size="md">
        <PencilIcon className="w-4 h-4" />
      </Button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} title="تغییر وضعیت">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <RHFSelect
            name="status"
            label="وضعیت جدید"
            register={register}
            errors={errors}
            options={options}
          />
          
          <div className="flex justify-end gap-2 mt-6">
            <Button variant="danger" onClick={() => setIsOpen(false)}>
              لغو
            </Button>
            <Button variant="primary" type="submit" disabled={isUpdating}>
              {isUpdating ? "در حال ذخیره..." : "تایید"}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}