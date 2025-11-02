import { lazy, Suspense } from 'react';

import { Counter } from 'components/Counter';

const Remote1Root = lazy(() => import('remote1/Root'));
const Remote2Root = lazy(() => import('remote2/Root'));

const RemoteWrapper = lazy(() => import('remote2/Wrapper'));

export const App = () => {

  return (
    <div>
      <RemoteWrapper>
        <h2>
          Host
        </h2>

        <Counter />
      </RemoteWrapper>

      <RemoteWrapper>
        <Suspense fallback="Loading...">
          <Remote1Root />
        </Suspense>
      </RemoteWrapper>

      <RemoteWrapper>
        <Suspense fallback="Loading...">
          <Remote2Root />
        </Suspense>
      </RemoteWrapper>
    </div>
  );
};
