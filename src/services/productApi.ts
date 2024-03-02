import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductDetail, CreateProduct, ListProduct } from "@/types";
import { ResultSetHeader } from "mysql2";

export const productApi = createApi({
  reducerPath: "productApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "https://services-tic.vercel.app/api/"
        : "http://localhost:3000/api/",
    credentials: "same-origin",
    prepareHeaders: (headers) => {
      headers.set(
        "Access-Control-Allow-Origin",
        "https://services-tic.vercel.app"
      );
      headers.set(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      return headers;
    },
  }),
  tagTypes: ["POST"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[] | ListProduct[], null>({
      query: () => "products",
      providesTags: ["POST"]
    }),
    getProductById: builder.query<ProductDetail, { id: string }>({
      query: ({ id }) => `products/${id}`,
    }),
    createProduct: builder.mutation<ResultSetHeader, CreateProduct>({
      query(body: Product) {
        return {
          url: "products",
          method: "POST",
          body: {
            name: body.name,
            maker: body.maker,
            amount: body.amount,
            price: body.price,
            discount: body.discount,
            description: body.description,
            state: body.state,
            image_id: body.image_id,
          },
        };
      },
      invalidatesTags: [{ type: "POST" }],
    }),
    updateProduct: builder.mutation<Product, Partial<Product>>({
      query(data) {
        const { product_id, ...body } = data;
        return {
          url: `products/${product_id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, product_id) => [
        { type: "POST", product_id },
      ],
    }),
    deleteProduct: builder.mutation<
      { success: boolean; productId: number },
      number
    >({
      query(productId) {
        return {
          url: `products/${productId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, productId) => [
        { type: "POST", productId },
      ],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation
} = productApi;
