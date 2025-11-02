import { lazy } from 'react';

const RemoteWrapper = lazy(() => import('remote2/Wrapper'));

import { Counter } from 'components';

export const App = () => {
  return (
    <div>
      <RemoteWrapper>
        <h4>
          First remote
        </h4>
      </RemoteWrapper>

      <RemoteWrapper>
        <h1>
          Counter
        </h1>

        <Counter />
      </RemoteWrapper>
    </div>
  );
};

export default App;
