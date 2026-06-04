"use client";

import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/truncateText";
import { DeletePost, UpdatePost } from "../ui/Buttons";
import { PostRowProps } from "../types/post";

function PostRow({ post, index }: PostRowProps) {
  const typeStyle = {
    free: {
      label: "رایگان",
      className: "badge--success",
    },
    premium: {
      label: "پولی",
      className: "badge--secondary",
    },
  };

  const { title, text, createdAt, type } = post;
  
  const postType = type || "free";
  const style = typeStyle[postType as keyof typeof typeStyle] || typeStyle.free;

  return (
    <Table.Row>
      <td className="py-4 px-3 align-middle">{toPersianDigits(index + 1)}</td>
      <td className="py-4 px-3 align-middle">{truncateText(title, 30)}</td>
      <td className="py-4 px-3 align-middle">{truncateText(text, 30)}</td>
      <td className="py-4 px-3 align-middle">{toLocalDateShort(createdAt)}</td>
      <td className="py-4 px-3 align-middle">
        <span className={`badge ${style.className}`}>
          {style.label}
        </span>
      </td>
      <td className="py-4 px-3 align-middle">
        <div className="flex items-center gap-x-2">
          <UpdatePost id={post._id} />
          <DeletePost post={post} />
        </div>
      </td>
    </Table.Row>
  );
}

export default PostRow;