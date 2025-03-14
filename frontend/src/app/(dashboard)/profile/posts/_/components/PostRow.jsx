"use client";

import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/trancateText";
import { DeletePost, UpdatePost } from "./Buttons";

function PostRow({post,index}) {
const typeStyle={
    free:{
        label:"رایگان",
        className:"badge--success",
    },
    premium:{
        label:"پولی",
        className:"badge--secondary",
    },
}

const {title,category,author,createdAt,type}=post;

    return (
     <Table.Row>
        <td>{toPersianDigits(index +1)}</td>
        <td>{truncateText(title,30)}</td>
        <td>{category}</td>
        <td>{author.name}</td>
        <td>{toLocalDateShort(createdAt)}</td>
        <td>
        <span className={`badge ${typeStyle[type].className}`}>
            {typeStyle[type].label}
        </span>
        </td>
        <td>
            <DeletePost id={post._id}/> 
            <UpdatePost id={post._id}/>
        </td>
     </Table.Row>
    )
}
export default PostRow;