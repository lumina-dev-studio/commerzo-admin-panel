import {baseApi} from "../baseApi";

export const settingApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        GetSingle: build.query({
            query: () => ({
                url: "/setting/singleUser",
                method: "GET",
            }),
        }),
      
        UpdateProfile: build.mutation({
            query: (data) => ({
                url: "/setting/profile",
                method: "PUT",
                body: data,
            }),
        }),

    }),
});

export const {
  useGetSingleQuery,
  useUpdateProfileMutation
} = settingApi;
