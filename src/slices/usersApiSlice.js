import { apiSlice } from "./apiSlice";
import BASE_URL from "../config";
const USER_URL = `${BASE_URL}/api/users`;

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/auth`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  usersApiSlice;
