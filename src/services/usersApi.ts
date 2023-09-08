import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResultSetHeader, User } from "../types";

export const usersApi = createApi({
  reducerPath: "usersApi",
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
    createUser: builder.mutation<ResultSetHeader, User>({
      query(body: User) {
        return {
          url: "users",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {useCreateUserMutation} = usersApi;