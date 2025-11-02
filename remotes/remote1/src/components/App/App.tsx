import { lazy } from 'react';

const RemoteWrapper = lazy(() => import('remote2/Wrapper'));

import { Counter } from 'components';

export const App = () => {
  return (
    <div>
      <RemoteWrapper>
        <h2>
          First remote
        </h2>

        <Counter />
      </RemoteWrapper>
    </div>
  );
};

export default App;
