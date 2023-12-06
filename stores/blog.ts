import { defineStore } from "pinia";
import { array, mask, number } from "superstruct";
import { BlogSchema, type Blog } from "./structs/blog_struct";
import { DataArraySchema, DataObjectSchema } from "./structs/response_struct";
// import { useAuthStore } from "./auth";
// import { toastStore } from "./toast";

export const useDataBlog = defineStore("Blog", () => {
  const blogs = ref<Blog[]>([]);
  const storeAuth = useAuthStore();
  const authorization = "Bearer " + (storeAuth.getAccesToken ?? "");

  //   function chooseBlog(id: string) {
  //     Blogs.value.forEach((e) => {
  //       if (e.id == id) {
  //         Blog.value = e;
  //         return;
  //       }
  //     });
  // Blog.value = {
  //   id: "fQ5s_2YycIjlke75SIP24",
  //   expiration_time: "2023-12-12T00:00:00.000Z",
  //   code: "NOEL_CHOPPERa",
  //   value: 200000,
  //   type: "%",
  // };
  //   }

  //   function saveBlogs(listBlog: Blog[]) {
  //     Blogs.value = listBlog;
  //   }

  async function editBlog(
    file: File,
    id: string,
    title: string,
    content: string,
    tag: string
  ) {
    try {
      console.log(file);
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const formdata: FormData = new FormData();
      formdata.append("file", file);
      formdata.append(
        "dto",
        JSON.stringify({
          id: "",
          title: title,
          content: content,
          photo: "",
        })
      );
      const { data, error } = await useFetch("/file-upload/blog", {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "PUT",
        headers: {
          //   Authorization: authorization,
        },
        body: formdata,
      });
      //   const { data, error } = await useFetch("/file-upload/blog", {
      //     baseURL: useRuntimeConfig().public.baseURL,
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //       Authorization: authorization,
      //     },
      //     body: formdata,
      //   });

      if (data.value !== null) {
        return;
      } else if (error.value != null) {
        throw "Thêm tim mới không thành công";
      }
    } catch (error) {
      throw error;
    }
  }
  async function getAllBlog() {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";

      const { data, error } = await useFetch("/health-forum/blog", {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });

      if (data.value !== null) {
        const response = mask(data.value, DataArraySchema);

        blogs.value = mask(response.data, array(BlogSchema));
        return;
      } else if (error.value != null) {
        throw "Không thể tải";
      }
    } catch (error) {
      throw error;
    }
  }

  //   async function updateBlog(Blog: Blog) {
  //     try {
  //       if (authorization === "Bearer ") return;
  //       const { data, error } = await useFetch("/consultation/Blog/" + Blog.id, {
  //         baseURL: useRuntimeConfig().public.baseURL,
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: authorization,
  //         },
  //         body: JSON.stringify({
  //           code: Blog.code,
  //           value: Blog.value,
  //           type: Blog.type,
  //           expiration_time: Blog.expiration_time,
  //         }),
  //       });

  //       if (data.value !== null) {
  //         const response = mask(data.value, DataObjectSchema);
  //         return response.response;
  //       } else if (error.value != null) {
  //         throw error;
  //       }
  //     } catch (error) {
  //       throw error;
  //     }
  //   }

  //   async function deleteBlog(id: string) {
  //     try {
  //       if (authorization === "Bearer ") return;
  //       const { data, error } = await useFetch("/consultation/Blog/" + id, {
  //         baseURL: useRuntimeConfig().public.baseURL,
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: authorization,
  //         },
  //       });

  //       if (data.value !== null) {
  //         const response = mask(data.value, DataStringSchema);
  //         return response.response;
  //       } else if (error.value != null) {
  //         throw error;
  //       }
  //     } catch (error) {
  //       throw error;
  //     }
  //   }

  return {
    // Blog,
    // Blogs,
    // saveBlogs,
    // chooseBlog,
    blogs,
    editBlog,
    getAllBlog,
    // updateBlog,
    // deleteBlog,
  };
});
