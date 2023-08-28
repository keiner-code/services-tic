import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Product } from '@/types';

export const productApi = createApi({
  reducerPath: 'productApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:3000/api/"
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], null>({
      query: () => "products",
    }),
    getProductById: builder.query<Product,{id: string} >({
      query: ({id}) => `products/${id}`,
    })
  })
})

export const {useGetAllProductsQuery, useGetProductByIdQuery} = productApi;