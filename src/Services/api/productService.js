// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { baseUrl } from "../../config/config";

// export const productApi = createApi({
//   reducerPath: "productApi",
//   baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

//   tagTypes: [],
//   endpoints: (builder) => ({
//     readProduct: builder.query({
//       query: () => {
//         return {
//           url: "/product",
//           method: "GET",
//         };
//       },
//     }),
//     deleteProduct: builder.mutation({
//       query: (id) => {
//         return {
//           url: `/product/${id}`,
//           method: "DELETE",
//         };
//       },
//     }),
//     readProductById: builder.query({
//       query: (id) => {
//         return {
//           url: `/product/${id}`,
//           method: `GET`,
//         };
//       },
//     }),
//     createProduct: builder.mutation({
//       query: (body) => {
//         return {
//           url: `/product`,
//           method: "POST",
//           body: body,
//         };
//       },
//     }),
//   }),
// });

// // Export hooks for usage in function components, which are
// // auto-generated based on the defined endpoints

// export const {useReadProductQuery}=productApi

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/config";

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["readProduct"],
  endpoints: (builder) => ({
    readProduct: builder.query({
      query: () => {
        return {
          url: "/product",
          method: "GET",
        };
      },
      providesTags: ["readProduct"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["readProduct"],
    }),
    readProductById: builder.query({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
    }),
    createProduct: builder.mutation({
      query: (body) => {
        return {
          url: "/product",
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["readProduct"],
    }),

    updateProduct: builder.mutation({
      query: (info) => {
        return {
          url: `/product/${info.id}`,
          method: "PATCH",
          body: `${info.body}`,
        };
      },
    }),
    invalidatesTags: ["readProduct", "readProductById"],
  }),
});

export const {
  useReadProductQuery,
  useReadProductByIdQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
} = productApi;
