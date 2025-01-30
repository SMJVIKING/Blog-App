import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";


function PostInteraction({ post }) {
  return (
    <div className="flex items-center justify-between mt-4">
      <div>
        <ButtonIcon variant="secondary">
          <ChatBubbleOvalLeftEllipsisIcon />
          <span>{toPersianDigits(post.commentsCount)}</span>
        </ButtonIcon>
      </div>

      <div className="flex gap-x-2">
        <ButtonIcon variant="red">
          <HeartIcon />
        </ButtonIcon>
        <ButtonIcon variant="primary">
          <BookmarkIcon />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default PostInteraction;
