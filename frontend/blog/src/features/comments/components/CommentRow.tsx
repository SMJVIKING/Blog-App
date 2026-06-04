"use client";

import { useState } from "react";
import { toPersianDigits } from "@/utils/numberFormatter";
import { toLocalDateShort } from "@/utils/dateFormatter";
import Table from "@/ui/Table";
import truncateText from "@/utils/truncateText";
import { DeleteComment, UpdateComment } from "../ui/Buttons";
import { CommentRowProps } from "../types/comment";


function CommentRow({ comment, index }: CommentRowProps) {
  const { _id, content, user, createdAt, status } = comment;

  const [commentStatus, setCommentStatus] = useState<0 | 1 | 2>(status);

  const typeStyle: Record<0 | 1 | 2, { label: string; className: string }> = {
    0: { label: "رد شده", className: "badge--danger" },
    1: { label: "در انتظار تایید", className: "badge--secondary" },
    2: { label: "تایید شده", className: "badge--success" },
  };

  const handleEdit = (newStatus: 0 | 1 | 2) => {
    setCommentStatus(newStatus);
  };

  return (
    <Table.Row>
      <td className="py-4 px-3 align-middle">{toPersianDigits(index + 1)}</td>
      <td className="py-4 px-3 align-middle">{truncateText(content.text, 30)}</td>
      <td className="py-4 px-3 align-middle">{user?.name || "کاربر حذف‌شده"}</td>
      <td className="py-4 px-3 align-middle">{toLocalDateShort(createdAt)}</td>
      <td className="py-4 px-3 align-middle">
        <span
          className={`badge ${typeStyle[commentStatus]?.className || "نامشخص"}`}
        >
          {typeStyle[commentStatus]?.label || "نامشخص"}
        </span>
      </td>
      <td className="flex gap-x-2 py-4 px-3 align-middle">
        <UpdateComment
          id={_id}
          currentStatus={commentStatus}
          onEdit={handleEdit}
        />
        <DeleteComment id={_id} title={content.text} />
      </td>
    </Table.Row>
  );
}

export default CommentRow;