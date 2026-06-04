"use client";

import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/truncateText";
import { DeleteCategory, EditCategory } from "../ui/Buttons";
import { CetegoryRowProps } from "../types/category";

function CetegoryRow({ category, index }: CetegoryRowProps) {
  const { title, description, createdAt } = category;

  return (
    <Table.Row>
      <td className="py-4 px-3 align-middle">{toPersianDigits(index)}</td>
      <td className="py-4 px-3 align-middle">{title}</td>
      <td className="py-4 px-3 align-middle">
        {truncateText(description, 30)}
      </td>
      <td className="py-4 px-3 align-middle">{toLocalDateShort(createdAt)}</td>
      <td className="flex gap-x-2 py-4 px-3 align-middle">
        <EditCategory id={category._id} />
        <DeleteCategory category={category} />
      </td>
    </Table.Row>
  );
}

export default CetegoryRow;
