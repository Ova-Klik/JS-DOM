import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl= import.meta.env.VITE_API_URL

const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl}),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body

      })
    }),

    getProducts : builder.query({
        query:()=>"/products"
    })
  })
})



export const { useLoginMutation, useGetProductsQuery } = productApi;
export default productApi;