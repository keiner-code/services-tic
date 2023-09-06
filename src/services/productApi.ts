import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Product } from '@/types';

export const productApi = createApi({
  reducerPath: 'productApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NODE_ENV === 'production' ? "https://services-tic.vercel.app/api/" : "http://localhost:3000/api/",
    credentials: "same-origin", 
    prepareHeaders: (headers) => {
            headers.set('Access-Control-Allow-Origin', 'https://services-tic.vercel.app');
            headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        return headers;
    },
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