import { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Fallback from "@/ui/Fallback";
import Search from "@/ui/Search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";
import { getPosts } from "@/services/postServices";
import Pagination from "@/ui/Pagination";

function page({ searchParams }) {
  const queries = queryString.stringify(searchParams);

  const { totalPages } = getPosts(queries);

  // we get this data from backend : totalPages
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-600 mb-12 items-center">
        <h1 className="text-xl font-bold">لیست پست ها</h1>
        <Search />
        <CreatePost />
      </div>

      <Suspense fallback={<Fallback />} key={queries}>
        <PostsTable query={queries} />
      </Suspense>

      <div className="mt-4 w-full flex justify-center">
        <Pagination totalPages={totalPages}/>
      </div>

    </div>
  );
}

export default page;



// what is pagination?
// you have 100 data how you cat get this data from backend?

// 1. 100 => get all 100 data and => map

// 2.100 => get this 100 data 10 by 10 in deferent pages= >
// 100 % 10 => 10 page with limit 10 => each page get 10 data from backend => not all 100 data
// page1 : 10 data
// page 2 : 10 data
// page3 : ....

// the way 2  => is the pagination and it's can handeled by backend => the better way
// the way 1 => need a lot of codes in frontend