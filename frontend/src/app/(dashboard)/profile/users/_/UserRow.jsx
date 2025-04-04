"use client";

import { toPersianDigits } from "@/utils/numberFormatter";
import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { DeleteUser } from "./Buttons";

function UserRow({ user, index }) {
  const { _id, name, email, likedPosts, bookmarkedPosts, createdAt } = user;

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>{likedPosts.length}</td>
      <td>{bookmarkedPosts.length}</td>
      <td>
        <DeleteUser id={_id} name={name} />
      </td>
    </Table.Row>
  );
}

export default UserRow;
