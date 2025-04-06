import Header from "@/components/Header";
import { getPosts } from "@/services/postServices";
import Pagination from "@/ui/Pagination";
import queryString from "query-string";

export default function layout({ children, searchParams }) {
  const queries = queryString.stringify(searchParams);

  const { totalPages } = getPosts(queries);

  console.log(totalPages);
  
  return (
    <>
      <Header />
      <div className="container xl:max-w-screen-xl">{children}</div>
      <div className="mt-5 flex w-full justify-center mb-6">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
