import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Pokemon = {
  id: string;
  name: string;
};

export const pokemonApi = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => ({
        url: `pokemon/${name}`,
        method: 'GET',
      }),
    }),
  }),
});
