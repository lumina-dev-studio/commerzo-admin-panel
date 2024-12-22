import {baseApi} from "../../baseApi";

export const StroreSocialApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        CreateSocial: build.mutation({
            query: (data) => ({
                url: "/theme/storeTheme/social",
                method: "POST",
                body: data,
            }),
        }),
      
        getSocial: build.query({
            query: () => ({
                url: "/theme/storeTheme/social",
                method: "GET",
                
            }),
        }),

    }),
});

export const {
    useCreateSocialMutation,useGetSocialQuery
 
} = StroreSocialApi;
