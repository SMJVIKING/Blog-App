import http from "./httpService";

export async function getCategoryApi(options) {
  return http.get("/category/list", options).then(({ data }) => data.data);
}

export async function deleteCategoryApi({id,options}) {
  return http
  .delete(`/category/remove/${id}`, options)
  .then(({ data }) => data.data);
}

// export async function updateCategoryApi({ id, options }) {
//   return http
//     .patch(`/category/update/${id}`, options)
//     .then(({ data }) => data.data);
// }
