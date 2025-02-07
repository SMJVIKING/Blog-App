import { Suspense } from "react";
import PostList from "../_components/PostList";
import Spinner from "@/ui/Spinner";
import { getPosts } from "@/services/postServices";

// in next v14 :
export const revalidate = 10;
// after 10 => re-build =>
//  1.pass time interval =>
//  2.new incoming request to rebuild this page =>
// update data will be shown to the next user !! => ISR => incremental static re-generation

// export const exprimental_ppr = true;

async function blogPage() {
  await getPosts();

  return (
    <div>
      {/* static : */}
      <div className="text-secondary-500 mb-8 space-y-2">
        <p>"جایی برای کشف، یادگیری و الهام گرفتن!"</p>
        <p>
          در این بلاگ، جدیدترین مقالات، راهنماهای کاربردی و نکات تخصصی را در
          زمینه‌های متنوع پیدا کنید.
        </p>
        <p>
          از تکنولوژی و طراحی گرفته تا سبک زندگی و رشد فردی همراه ما باشید و هر
          روز چیزی جدید یاد بگیرید.
        </p>
      </div>
      {/* dynamic : */}
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}
export default blogPage;
