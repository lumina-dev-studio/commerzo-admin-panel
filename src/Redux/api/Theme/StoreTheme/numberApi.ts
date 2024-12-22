import {baseApi} from "../../baseApi";

export const StrorethemeNumberApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        CreateNumber: build.mutation({
            query: (data) => ({
                url: "/theme/storeTheme/number",
                method: "POST",
                body: data,
            }),
        }),
      
        getNumber: build.query({
            query: () => ({
                url: "/theme/storeTheme/number",
                method: "GET",
                
            }),
        }),

    }),
});

export const {
    useCreateNumberMutation,useGetNumberQuery
 
} = StrorethemeNumberApi;
