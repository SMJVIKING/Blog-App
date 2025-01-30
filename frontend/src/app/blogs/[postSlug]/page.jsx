import Image from "next/image";

async function BlogDetail({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${params.postSlug}`
  );
  const {
    data: { post },
  } = await res.json();

  console.log(post.coverImageUrl);

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
export default BlogDetail;
