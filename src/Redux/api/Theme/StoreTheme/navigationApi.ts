import {baseApi} from "../../baseApi";

export const StrorethemeNavigationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        CreateNavigation: build.mutation({
            query: (data) => ({
                url: "/theme/storeTheme/navigation",
                method: "POST",
                body: data,
            }),
        }),
      
        getNavigation: build.query({
            query: () => ({
                url: "/theme/storeTheme/navigation",
                method: "GET",
                
            }),
        }),

    }),
});

export const {
    useCreateNavigationMutation,
    useGetNavigationQuery
 
} = StrorethemeNavigationApi;
