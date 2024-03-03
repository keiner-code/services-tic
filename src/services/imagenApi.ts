import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateImagen, ImagenType, ResultSetHeader } from "../types";

export const imagenApi = createApi({
  reducerPath: "imagenApi",
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
      headers.set("Access-Control-Allow-Origin", "https://www.keiner-code.com");
      headers.set(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      return headers;
    },
  }),
  tagTypes: ["POST"],
  endpoints: (builder) => ({
    createImagen: builder.mutation<ResultSetHeader, CreateImagen>({
      query(body: CreateImagen) {
        return {
          url: "images",
          method: "POST",
          body: {
            image1: body.image1,
            image2: body.image2,
            image3: body.image3,
            image4: body.image4,
          },
        };
      },
      invalidatesTags: [{ type: "POST" }],
    }),
    getAllImagen: builder.query<ImagenType[], null>({
      query: () => "images",
      providesTags: ["POST"],
    }),
    getByIdImagen: builder.query<ImagenType, number>({
      query: (imageId) => ({ url: `images/${imageId}` }),
    }),
    deleteImagen: builder.mutation<
      { success: boolean; imageId: number },
      number
    >({
      query(imageId) {
        return {
          url: `images/${imageId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, imageId) => [{ type: "POST", imageId }],
    }),
    updateImagen: builder.mutation<CreateImagen, Partial<ImagenType>>({
      query(data) {
        const { image_id, ...body } = data;
        return {
          url: `images/${image_id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, image_id) => [
        { type: "POST", image_id },
      ],
    }),
  }),
});

export const {
  useCreateImagenMutation,
  useDeleteImagenMutation,
  useGetAllImagenQuery,
  useGetByIdImagenQuery,
  useUpdateImagenMutation,
} = imagenApi;
