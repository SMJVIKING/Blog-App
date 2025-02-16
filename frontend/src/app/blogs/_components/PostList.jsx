import CoverImage from "./CoverImage";
import { ClockIcon } from "@heroicons/react/24/outline";
import Author from "./Author";
import PostInteraction from "./PostInteraction";
import Link from "next/link";

async function PostList({posts}) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  // const {
  //   // destructure:
  //   data: { posts },
  //   // it's an await promise:
  // } = await res.json();

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          key={post._id}
          className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-200 p-4 rounded-xl shadow-md"
        >
          {/* post image: */}
          <CoverImage {...post} />

          {/* post title: */}
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700">
                {post.title}
              </h2>
            </Link>

            {/* post author: */}
            <div className="flex items-center justify-between">
              <Author {...post.author} />

              <div className="flex items-center text-[10px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                <span className="ml-1">خواندن :</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
                <span> دقیقه</span>
              </div>
            </div>

            <PostInteraction post={post} />
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
export default PostList;
