import { Suspense } from "react";
import PostList from "../_components/PostList";
import Spinner from "@/ui/Spinner";

function blogPage() {
  return (
    <div>
      <p className="text-secondary-500 mb-4">
        "جایی برای کشف، یادگیری و الهام گرفتن! در این بلاگ، جدیدترین مقالات،
        راهنماهای کاربردی و نکات تخصصی را در زمینه‌های متنوع پیدا کنید. از
        تکنولوژی و طراحی گرفته تا سبک زندگی و رشد فردی – همراه ما باشید و هر روز
        چیزی جدید یاد بگیرید!"
      </p>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}
export default blogPage;
