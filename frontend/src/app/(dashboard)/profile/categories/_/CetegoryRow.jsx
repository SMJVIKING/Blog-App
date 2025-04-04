"use client";

import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import { DeleteCategory } from "./Buttons";

function CetegoryRow({ category, index }) {
  
  const {title,description,createdAt}=category;

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td className="flex gap-x-2">
        {/* <upda id={post._id} /> */}
        <DeleteCategory category={category}/>
      </td>
    </Table.Row>
  );
}
export default CetegoryRow;
