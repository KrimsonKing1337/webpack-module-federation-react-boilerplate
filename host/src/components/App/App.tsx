import { lazy, Suspense } from 'react';

const Remote1Root = lazy(() => import('remote1/Root'));
const Remote2Root = lazy(() => import('remote2/Root'));

const RemoteButton = lazy(() => import('remote1/Button'));
const RemoteWrapper = lazy(() => import('remote2/Wrapper'));

export const App = () => {

  return (
    <div>
      <RemoteWrapper>
        <h4>
          Host
        </h4>
      </RemoteWrapper>

      <RemoteWrapper>
        <RemoteButton>
          Remote Button
        </RemoteButton>
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
