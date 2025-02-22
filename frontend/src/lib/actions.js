"use server";

import { createCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// export async function createComment(postId, parentId, formData) {
// prevState : مسیج و ارور قبلی


export async function createComment(prevState, {formData , postId, parentId}) {
  const cookiesStore = cookies();


  const rawFormData = {
    text: formData.get("text"),
    postId,
    parentId
  };

  try {  
    const options = setCookieOnReq(cookiesStore);
    const { message } = await createCommentApi(rawFormData, options);
    // const { message } = await createCommentApi(rawFormData, options);
      // update page:
    // revalidatePath("/blogs/[slug]", "page");
    revalidatePath("/blogs/[postSlug]");
    return{
      message,
    };
    
  } catch (error) {
    const errMsg=error?.response?.data?.message;
    return {
      errMsg,
    }
  }
}

// 1. create API for adding comment
// 2.text - postId - parent