import { Wrapper, Counter } from 'components';

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
      <Wrapper>
        <h4>
          First remote
        </h4>
      </Wrapper>

      <Wrapper>
        <h1>
          Counter
        </h1>

        <Counter />
      </Wrapper>

      <Wrapper>
        <h4>
          Example of using RTK query (see sources)
        </h4>
      </Wrapper>

      <Wrapper>
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
      </Wrapper>

      <Wrapper>
        <h4>
          Another one example of using RTK query (see sources)
        </h4>
      </Wrapper>

      <Wrapper>
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
      </Wrapper>
    </div>
  );
};
