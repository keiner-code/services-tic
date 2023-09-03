import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Contact } from "../types/index";
import type {ResultSetHeader} from "@/types";

export const contactApi = createApi({
  reducerPath: "contactApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    createContact: builder.mutation<ResultSetHeader, Contact>({
      query(body: Contact) {
        return {
          url: "contact",
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const { useCreateContactMutation } = contactApi;
