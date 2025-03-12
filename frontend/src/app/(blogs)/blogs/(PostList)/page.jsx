import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import queryString from "query-string";

async function blogPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);

  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const {posts} = await getPosts(queries, options);

  const { search } = searchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد."
            : `نشان دادن نتیجه برای ${posts.length}`}
          <span className="font-bold"> " {search} "</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </>
  );
}

export default blogPage;

// import PostList from "../_components/PostList";
// import { getPosts } from "@/services/postServices";
// import { cookies } from "next/headers";
// import setCookieOnReq from "@/utils/setCookieOnReq";
// import queryString from "query-string";

// // in next v14 :
// // export const revalidate = 10;
// // after 10 => re-build =>
// //  1.pass time interval =>
// //  2.new incoming request to rebuild this page =>
// // update data will be shown to the next user !! => ISR => incremental static re-generation

// // export const exprimental_ppr = true;
// // اینجا نمیتونه ی صفحه داینامیک و استاتیک باشه =>
// // و پست لیست داخل ساسپنس قرار بگیره =>
// // چون عمل فچ کردن دیتارو اینجا انجام میدیم و ب پست لیست دیتا پاس میدیم:

// async function blogPage({ searchParams }) {
//   // console.log(searchParams);
//   // اینجا سرچ پارامز رو ک از کامپوننت سرچ میگیریم ب صورت ابجکته دیتاش ولی =>
//   // این کوئری استرینگ هایی ک ما ب یوارال میدیم  نمیخایم ب صورت ابجکت باشه =>
//   //  پس از این پکیج استفاده میکنیم : query-string
//   const queries = queryString.stringify(searchParams);

//   const cookieStore = await cookies();
//   const options = setCookieOnReq(cookieStore);
//   // send cookis with posts data:
//   const posts = await getPosts(queries,options);

//   return (
//     <div>
//       {/* static : */}
//       {/* <div className="text-secondary-500 mb-8 space-y-2">
//         "جایی برای کشف، یادگیری و الهام گرفتن!" در این بلاگ، جدیدترین مقالات،
//         راهنماهای کاربردی و نکات تخصصی را در زمینه‌های متنوع پیدا کنید. از
//         تکنولوژی و طراحی گرفته تا سبک زندگی و رشد فردی همراه ما باشید و هر روز
//         چیزی جدید یاد بگیرید.
//       </div> */}
//       {/* dynamic : */}
//       {/* <Suspense fallback={<Spinner />}> */}
//       <PostList posts={posts} />
//       {/* </Suspense> */}
//     </div>
//   );
// }
// export default blogPage;
