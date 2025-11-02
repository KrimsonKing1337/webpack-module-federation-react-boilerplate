import { lazy, Suspense } from 'react';

const RemoteButton = lazy(() => import('remote1/Button'));
const RemoteWrapper = lazy(() => import('remote2/Wrapper'));

import { Counter } from 'components';

import { pokemonApi, jsonPlaceholderApi } from 'api';

export const App = () => {
  const {
    data: pokemonData,
    error: pokemonError,
    isLoading: pokemonIsLoading,
  } = pokemonApi.useGetPokemonByNameQuery('bulbasaur');

  const {
    data: jsonPlaceholderData,
    error: jsonPlaceholderError,
    isLoading: jsonPlaceholderIsLoading,
  } = jsonPlaceholderApi.useGetJsonPlaceholderByIdQuery('1');

  return (
    <div>
      <RemoteWrapper>
        <h4>
          Host
        </h4>
      </RemoteWrapper>

      <RemoteWrapper>
        <Suspense fallback="Загрузка…">
          <RemoteButton>
            Remote Button
          </RemoteButton>
        </Suspense>
      </RemoteWrapper>

      <RemoteWrapper>
        <h1>
          Counter
        </h1>

        <Counter />
      </RemoteWrapper>

      <RemoteWrapper>
        <h4>
          Example of using RTK query (see sources)
        </h4>
      </RemoteWrapper>

      <RemoteWrapper>
        {pokemonIsLoading && (
          <div>
            Pokemon is loading...
          </div>
        )}

        {pokemonError && (
          <div>
            Oh no, there was an error in pokemon
          </div>
        )}

        {pokemonData && (
          <h3>
            Pokemon: {pokemonData.name}
          </h3>
        )}
      </RemoteWrapper>

      <RemoteWrapper>
        <h4>
          Another one example of using RTK query (see sources)
        </h4>
      </RemoteWrapper>

      <RemoteWrapper>
        {jsonPlaceholderIsLoading && (
          <div>
            Json placeholder is loading...
          </div>
        )}

        {jsonPlaceholderError && (
          <div>
            Oh no, there was an error in json placeholder
          </div>
        )}

        {jsonPlaceholderData && (
          <h3>
            {jsonPlaceholderData.title}
          </h3>
        )}
      </RemoteWrapper>
    </div>
  );
};
