import { baseApi } from "../baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    GetUserAllProduct: build.query({
      query: () => ({
        url: "/userProduct",
        method: "GET",
       
      }),
    }),
    GetUserSingleProduct: build.query({
      query: () => ({
        url: "/userProduct/allProduct",
        method: "GET",
       
      }),
    }),
    createProduct: build.mutation({
      query: (data) => ({
        url: "/userProduct",
        method: "POST",
        body: data,
      }),
    }),
 
  }),
});

export const {

    useCreateProductMutation,
useGetUserAllProductQuery,
useGetUserSingleProductQuery
  

} = productApi;
