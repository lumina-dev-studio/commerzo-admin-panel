import {baseApi} from "../../baseApi";

export const StrorethemeLogoApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        CreateLogo: build.mutation({
            query: (data) => ({
                url: "/theme/storeTheme/logo",
                method: "POST",
                body: data,
            }),
        }),
      
        getLogo: build.query({
            query: () => ({
                url: "/theme/storeTheme/logo",
                method: "GET",
                
            }),
        }),

    }),
});

export const {
    useCreateLogoMutation,useGetLogoQuery
 
} = StrorethemeLogoApi;
