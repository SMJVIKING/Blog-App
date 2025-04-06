"use client";

import { bookmarkPostApi, likePostApi } from "@/services/postServices";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  HeartIcon as SolidHeartIcon,
  BookmarkIcon as SolideBookmarkIcon,
} from "@heroicons/react/24/solid";

function PostInteraction({ post }) {
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
  const router = useRouter();

  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      router.refresh();
      toast.success(message);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const bookmarkHandler = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      router.refresh();
      toast.success(message);
    } catch (error) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <ButtonIcon variant="secondary">
          <ChatBubbleOvalLeftEllipsisIcon />
          <span>{toPersianDigits(post.commentsCount)}</span>
        </ButtonIcon>
        <ButtonIcon onClick={() => likeHandler(post._id)} variant="red">
          {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
          <span>{toPersianDigits(post.likesCount)}</span>
        </ButtonIcon>
      </div>

      <div>
        <ButtonIcon onClick={() => bookmarkHandler(post._id)} variant="primary">
          {post.isBookmarked ? <SolideBookmarkIcon /> : <BookmarkIcon />}
        </ButtonIcon>
      </div>
    </div>
  );
}

export default PostInteraction;
