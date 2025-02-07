import { getPostBySlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";

// error handeling in static route:
export const dynamicParams = false;

// convert dynamic posts to static post pages :
export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));
  return slugs;
}

// dynamic metadata :
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: `پست ${post.title}`,
  };
}

async function SinglePost({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <div className="text-secondary-600 max-w-screen-sm mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="shadow-xl relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl mb-10">
        <Image
          className="w-full h-auto object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          width={600}
          height={600}
          src={post.coverImageUrl}
          alt={post.title}
        />
      </div>
    </div>
  );
}
export default SinglePost;
