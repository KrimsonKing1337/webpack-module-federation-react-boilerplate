import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type JsonPlaceholder = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholder',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getJsonPlaceholderById: builder.query<JsonPlaceholder, string>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'GET',
      }),
    }),
  }),
});
