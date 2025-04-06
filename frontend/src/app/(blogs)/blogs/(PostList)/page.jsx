import setCookiesOnReq from "@/utils/setCookieOnReq";
import queryString from "query-string";
import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import { getPosts } from "@/services/postServices";

// export const dynamic = "force-dynamic";

async function Page({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  // set headers:
  const cookieStore = cookies();
  const options = setCookiesOnReq(cookieStore);

  const { posts } = await getPosts(queries, options);

  const { q: searchValue } = searchParams;

  const resultsText = posts.length > 1 ? "نتایج" : "نتیجه";

  return (
    <>
      {searchValue ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد"
            : `نشان دادن ${posts.length} ${resultsText} برای `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}

      {posts.length > 0 ? <PostList posts={posts} /> : null}
    </>
  );
}
export default Page;
