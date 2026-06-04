"use client";

import { toPersianDigits } from "@/utils/numberFormatter";
import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { User } from "@/features/auth/types/user";

interface UserRowProps {
  user: User;
  index: number;
}

function UserRow({ user, index }: UserRowProps) {
  const { name, email, createdAt } = user;

  return (
    <Table.Row>
      <td className="py-4 px-3 align-middle">{toPersianDigits(index + 1)}</td>
      <td className="py-4 px-3 align-middle">{name}</td>
      <td className="py-4 px-3 align-middle">{email}</td>
      <td className="py-4 px-3 align-middle">{toLocalDateShort(createdAt)}</td>
    </Table.Row>
  );
}

export default UserRow;