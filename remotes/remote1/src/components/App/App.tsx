import { lazy } from 'react';

import { useSelector as useHostSelector, selectors } from 'host/storeApi';

const RemoteWrapper = lazy(() => import('remote2/Wrapper'));

import { Counter } from 'components';

export const App = () => {
  const count: number = useHostSelector(selectors.count);

  return (
    <div>
      <RemoteWrapper>
        <h2>
          First remote
        </h2>

        <Counter />
      </RemoteWrapper>

      <RemoteWrapper>
        <h4>
          Value of host counter is {count}
        </h4>
      </RemoteWrapper>
    </div>
  );
};
