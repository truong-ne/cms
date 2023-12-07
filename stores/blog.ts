import { defineStore } from "pinia";
import { array, mask, number } from "superstruct";
import { BlogSchema, type Blog } from "./structs/blog_struct";
import { DataArraySchema, DataObjectSchema } from "./structs/response_struct";
// import { useAuthStore } from "./auth";
// import { toastStore } from "./toast";

export const useDataBlog = defineStore("Blog", () => {
  const blogs = ref<Blog[]>([]);
  const blog = ref<Blog>();
  const storeAuth = useAuthStore();
  const authorization = "Bearer " + (storeAuth.getAccesToken ?? "");

  function chooseBlog(id: string) {
    blogs.value.forEach((e) => {
      if (e._id == id) {
        blog.value = e;
        return;
      }
    });
  }
  // Blog.value = {
  //   id: "fQ5s_2YycIjlke75SIP24",
  //   expiration_time: "2023-12-12T00:00:00.000Z",
  //   code: "NOEL_CHOPPERa",
  //   value: 200000,
  //   type: "%",
  // };
  //   }

  function saveBlogs(listBlog: Blog[]) {
    blogs.value = listBlog;
  }

  async function editBlog(
    file: File | undefined,
    id: string,
    title: string,
    content: string,
    tag: string
  ) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const formdata: FormData = new FormData();
      if (file != undefined) formdata.append("file", file);
      formdata.append(
        "dto",
        JSON.stringify({
          id: id,
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

      if (data.value !== null) {
        return;
      } else if (error.value != null) {
        throw "Thành công";
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
  async function getDetail(id: string) {
    try {
      const { data, error } = await useFetch("/health-forum/blog/" + id, {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "GET",
      });

      if (data.value !== null) {
        const response = mask(data.value, DataObjectSchema);

        blog.value = mask(response.data, BlogSchema);
        return;
      } else if (error.value != null) {
        throw "Không thể tải";
      }
    } catch (error) {
      throw error;
    }
  }
  async function deleteBlog(id: string) {
    try {
      const { data, error } = await useFetch("/health-forum/blog/" + id, {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "DELETE",
      });

      if (data.value !== null) {
        const response = mask(data.value, DataObjectSchema);

        blog.value = mask(response.data, BlogSchema);
        return;
      } else if (error.value != null) {
        throw "Không thể tải";
      }
    } catch (error) {
      throw error;
    }
  }

  return {
    saveBlogs,
    chooseBlog,
    blog,
    blogs,
    editBlog,
    getAllBlog,
    getDetail,
    deleteBlog,
  };
});
