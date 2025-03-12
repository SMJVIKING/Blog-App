"uses client";

import ButtonIcon from "@/ui/ButtonIcon";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-2 py-3 items-center rounded-xl bg-primary-900 px-4 text-sm font-medium text-secondary-0 
      transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block">ایجاد پست</span>{" "}
      <PlusIcon className="w-6 font-bold" />
    </Link>
  );
}

export function DeletePost({id}) {
    return (
        <ButtonIcon variant="outline" onClick={()=> console.log(id)}>
            <TrashIcon className="text-error"/>
        </ButtonIcon>
    )
}

export function UpdatePost({id}) {
    return (
      <Link href={`profile/posts/${id}/edit`}>
         <ButtonIcon variant="outline">
            <PencilIcon/>
         </ButtonIcon>
      </Link>
    )
}
