import Search from "@/ui/Search";
import { Suspense } from "react";
import CategoryList from "../_components/CategoryList";
import Spinner from "@/ui/Spinner";
import PostSort from "../_components/PostSort";

function Layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>
        <Suspense>
          <Search />
        </Suspense>
        <Suspense>
          <PostSort />
        </Suspense>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 lg:pl-8 text-secondary-500 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <main className="col-span-12 lg:col-span-8 xl:col-span-9">
          <h1 className="mb-10 text-secondary-700 text-xl">
            بلاگ یک نوع وب‌سایت است که برای انتشار مقالات،
            نوشته‌ها و محتواهای متنی استفاده می‌شود. بلاگ‌ها می‌توانند شخصی،
            تخصصی یا تجاری باشند و موضوعاتی مانند فناوری، سبک زندگی، آموزش،
            اخبار و بسیاری حوزه‌های دیگر را پوشش دهند. برخی بلاگ‌ها توسط افراد
            مستقل مدیریت می‌شوند، درحالی‌که برخی دیگر متعلق به شرکت‌ها و برندها
            هستند و به‌عنوان بخشی از استراتژی بازاریابی محتوا مورد استفاده قرار
            می‌گیرند. امروزه بلاگ‌نویسی نه‌تنها یک راه ارتباطی مؤثر، بلکه یک
            ابزار قدرتمند برای بهبود سئو و جذب مخاطبان هدف است.
          </h1>
          {children}
        </main>
      </div>
    </div>
  );
}
export default Layout;
