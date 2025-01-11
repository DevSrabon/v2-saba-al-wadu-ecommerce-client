import { HTTPResponse, ISearchProduct } from "@/types/commonTypes";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseApiQuery } from "./baseApiQuery";

export const commonApiSlice = createApi({
  reducerPath: "commonApi",
  baseQuery: baseApiQuery,
  tagTypes: ["ProductSearch"],
  endpoints: (builder) => ({
    getProductSearch: builder.query<
      HTTPResponse<ISearchProduct[]>,
      { name: string }
    >({
      query: ({ name }) => `/ecomm/product/search?searchParams=${name}`,
      providesTags: ["ProductSearch"],
    }),
  }),
});

export const { useGetProductSearchQuery } = commonApiSlice;
