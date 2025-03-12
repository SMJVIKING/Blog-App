import Search from "@/ui/Search";
import Spinner from "@/ui/Spinner";
import CategoryList from "../_components/CategoryList";
import { Suspense } from "react";

export const metadata = {
  title: "بلاگ ها",
};

export default function Layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>
        <Search />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <div className="col-span-1 sm:col-span-4 lg:col-span-3 text-secondary-500 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>

        <div className="col-span-1 sm:col-span-8 lg:col-span-9">{children}</div>
      </div>
    </div>
  );
}
