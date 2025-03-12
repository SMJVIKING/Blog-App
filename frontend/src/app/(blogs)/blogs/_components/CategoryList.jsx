import Link from "next/link";

async function CategoryList() {
  // این بخش صرفا جهت اموزش اینجوری نوشته میشه :
  //  وگرنه تو بخش services هم میشد ازش استفاده کرد
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`,{
    cashe:"force-cache",
});

  const {
    // destructure:
    data: { categories },
    // it's an await promise:
    } = await res.json();

  return (
    <ul className="space-y-4">
      <Link href="/blogs">همه</Link>
      {categories.map((category) => {
        // don't forget return or else it's dosen't work :
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default CategoryList;
