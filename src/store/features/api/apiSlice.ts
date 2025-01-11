import { createApi } from "@reduxjs/toolkit/query/react";
import { baseApiQuery } from "./baseApiQuery";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseApiQuery,
  endpoints: () => ({}),
  refetchOnReconnect: true,
  refetchOnFocus: true,
  tagTypes: ["Users", "Tasks"],
  keepUnusedDataFor: 50000,
});
