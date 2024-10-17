import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    GetAllUsers: build.query({
      query: () => ({
        url: "/user",
        method: "GET",
       
      }),
    }),
    createUser: build.mutation({
      query: (data) => ({
        url: "/user/create",
        method: "POST",
        body: data,
      }),
    }),
 
  }),
});

export const {
    useCreateUserMutation,
    useGetAllUsersQuery

} = authApi;
