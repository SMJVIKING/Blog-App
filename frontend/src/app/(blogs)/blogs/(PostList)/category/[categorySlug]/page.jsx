import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "app/(blogs)/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

async function category({ params, searchParams }) {
  const { categorySlug } = params;

  const queries =
    queryString.stringify(searchParams) +
    "&" +
    `categorySlug=${categorySlug}`;

  const cookieStore =await cookies();
  const options = setCookieOnReq(cookieStore);
  const {posts} =await getPosts(queries,options);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">
          پستی در این دسته بندی پیدا نشد.
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default category;

// ببین تو این بخش باید پست های مربوط ب هر کتگوری جداگونه نمایش داده بشه =>
// پس کامپوننت پست لیست باید ی پراپس  بگیرهو دیتارو از اون پراپس بگیره =>
// و برای همین یسری کوکی و .. ک  داخل خود "پست لیست " هست باید از اون حذف بشه=>
// و بهش پاس داده بشه .
