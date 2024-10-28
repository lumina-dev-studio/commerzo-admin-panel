import { baseApi } from "../../baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    GetAllCategory: build.query({
      query: () => ({
        url: "/productCategory",
        method: "GET",
       
      }),
      providesTags: ["Category"],
    }),
    GetSingleCategory: build.query({
      query: (id) => ({
        url: `/productCategory/${id}`,
        method: "GET",
       
      }),
    }),
    createCategory: build.mutation({
      query: (data) => ({
        url: "/productCategory",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
 
  }),
});

export const {

useCreateCategoryMutation,
useGetAllCategoryQuery,
useGetSingleCategoryQuery
  

} = categoryApi;
