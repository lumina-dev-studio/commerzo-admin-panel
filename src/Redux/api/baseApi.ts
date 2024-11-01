// import { getUserInfo } from "@/Services/Action/auth.services";
import { getUserInfo } from "@/Services/Action/auth.service";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.API_URL,
    // baseUrl: "https://sass-project-server-side.vercel.app/api",
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = getUserInfo();
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  });
  
  export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQuery,
    tagTypes: ["Category"],
    refetchOnMountOrArgChange: 30,
    endpoints: () => ({}),
  });
  