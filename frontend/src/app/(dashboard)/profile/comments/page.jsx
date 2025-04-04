import { Suspense } from "react";
import Fallback from "@/ui/Fallback";
import Pagination from "@/ui/Pagination";
import { getPosts } from "@/services/postServices";
import CommentsTable from "./_/CommentsTable";

function page() {
  const { totalPages } = getPosts();

  return (
    <div>
      <h1 className="text-secondary-600 mb-12 text-2xl font-bold">
        لیست نظرات
      </h1>

      <Suspense fallback={<Fallback />}>
        <CommentsTable />
      </Suspense>

      <div className="mt-4 w-full flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default page;
