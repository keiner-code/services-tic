import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateUser, ResultSetHeader } from "../types";
import {User} from "../types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "https://www.keiner-code.com/api/"
        : "http://localhost:3000/api/",
    credentials: "same-origin",
    prepareHeaders: (headers) => {
      headers.set(
        "Access-Control-Allow-Origin",
        "https://services-tic.vercel.app"
      );
      headers.set('Access-Control-Allow-Origin','https://www.keiner-code.com');
      headers.set(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      return headers;
    },
  }),
  tagTypes: ["POST"],
  endpoints: (builder) => ({
    createUser: builder.mutation<ResultSetHeader, CreateUser>({
      query(body: User) {
        return {
          url: "users",
          method: "POST",
          body: {
            name: body.name,
            identification: body.identification,
            image: body.image,
            rol: body.rol,
            email: body.email,
            password: body.password,
            state: body.state,
          },
        };
      },
      invalidatesTags: [{ type: "POST" }],
    }),
    getAllUser: builder.query<User[], null>({
      query: () => "users",
      providesTags: ["POST"],
    }),
    getByIdUser: builder.query<User, number>({
      query: (idUser) => ({ url: `users/${idUser}` }),
    }),
    deleteUser: builder.mutation<{ success: boolean; userId: number }, number>({
      query(userId) {
        return {
          url: `users/${userId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, userId) => [{ type: "POST", userId }],
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query(data){
        const {user_id, ...body} = data
        return {
          url: `users/${user_id}`,
          method: 'PUT',
          body
        }
      },
      invalidatesTags: (result, error, user_id) => [{type: "POST",user_id}]
    })
  }),
});
export const {
  useCreateUserMutation,
  useGetAllUserQuery,
  useDeleteUserMutation,
  useGetByIdUserQuery,
  useUpdateUserMutation
} = usersApi;
