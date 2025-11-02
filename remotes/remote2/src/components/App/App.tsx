import { Wrapper, Counter } from 'components';

export const App = () => {
  return (
    <div>
      <Wrapper>
        <h4>
          Second remote
        </h4>
      </Wrapper>

      <Wrapper>
        <h1>
          Counter
        </h1>

        <Counter />
      </Wrapper>
    </div>
  );
};

export default App;
