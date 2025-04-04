
import Image from "next/image";
import RelatedPost from "../_components/RelatedPost";
import PostComment from "../_components/comment/PostComment";
import { getPostBySlug } from "@/services/postServices";
import { notFound } from "next/navigation";

async function PostSlug({ params }) {
  const post = await getPostBySlug(params.postSlug);

  console.log(post.coverImageUrl);

  if (!post) notFound();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative w-full h-96 overflow-hidden rounded-lg mb-10">
          <Image
            className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
            fill
            src={post.coverImageUrl}
            alt={post.title || "Blog image"}
          />
        </div>
      {post.related.length > 0 ? <RelatedPost posts={post.related} /> : null}
      <PostComment post={post} />
    </div>
  );
}
export default PostSlug;
