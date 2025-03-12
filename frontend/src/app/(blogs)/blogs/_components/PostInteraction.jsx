"use client";

import { likePostApi } from "@/services/postServices";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";

function PostInteraction({ post }) {
  // refresh :
  const router = useRouter();

  // ما نیاز داریم اینجا همراه با لایک کردن پست اطلاعات یوزر رو بفرستیم(توکن ها رو) بک اند ک
  // سایت بفهمه کدوم یوزر کدوم پست رو لایک کرده و
  // اگه تو قسمت service پست بیایم  اینو بزاریم بازم مشکل رفع نمیشه :
  // credentials:"include",
  // پس راه حل چیه ؟تو بخش service ها ی فایل دیگه میسازیم و مراحلو اونجا پیاده میکنیم :
  // اسم فایل : setCookieOnReq.js
  // اینجوری کوکی هارو میگیریم میفرستیم سمت بک اند => مشخص میشه کی چیو لایک کرده

  // const likeHandler = async (postId) => {
  //   try {
  //     const { message } = await likePostApi(postId);
  //     toast.success(message);
  //     // refresh liked post outomaticly:
  //     router.replace(router.asPath);
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message);
  //   }
  // };

  const likeHandler = async (postId) => {
    try {
      const response = await likePostApi(postId);
      toast.success(response.message);
      router.replace(router.asPath); // مقدار جدید رو فورس کن
    } catch (error) {
      console.error("Error in likeHandler:", error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <div>
        <ButtonIcon variant="secondary">
          <ChatBubbleOvalLeftEllipsisIcon />
          <span>{toPersianDigits(post.commentsCount)}</span>
        </ButtonIcon>
      </div>

      <div className="flex gap-x-2">
        <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
          {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
        </ButtonIcon>

        <ButtonIcon variant="primary">
          <BookmarkIcon />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default PostInteraction;
