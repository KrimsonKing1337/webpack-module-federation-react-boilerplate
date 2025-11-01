import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'store';

import { App } from './App';

describe('<App/>', () => {
  it('Should render', () => {
    const getComponent = () => {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    };

    expect(() => render(getComponent())).not.toThrow();
  });
});
