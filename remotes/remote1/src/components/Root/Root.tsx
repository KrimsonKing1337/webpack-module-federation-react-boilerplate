import { Provider } from 'react-redux';

import { App } from 'components';

import { store } from 'store';

export const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
