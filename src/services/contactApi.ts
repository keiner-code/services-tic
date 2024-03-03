import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Contact } from "../types/index";
import type {ResultSetHeader} from "@/types";

export const contactApi = createApi({
  reducerPath: "contactApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
     baseUrl: process.env.NODE_ENV === 'production' ? "https://www.keiner-code.com/api/" : "http://localhost:3000/api/",
     credentials: "same-origin", 
    prepareHeaders: (headers) => {
            headers.set('Access-Control-Allow-Origin', 'https://services-tic.vercel.app');
            headers.set('Access-Control-Allow-Origin','https://www.keiner-code.com');
            headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        return headers;
    },
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
