import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { pokemonApi, jsonPlaceholderApi } from 'api';

import { counterReducer, watchCounterActions } from './counter';

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  counter: counterReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
};

const middlewares = [
  sagaMiddleware,
  pokemonApi.middleware,
  jsonPlaceholderApi.middleware,
];

const storeInit = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

type GlobalThis = {
  hostStore?: typeof storeInit;
}

const g = globalThis as GlobalThis;

// создаём один раз
if (!g.hostStore) {
  g.hostStore = storeInit;
}

const store = g.hostStore;

export { store };

sagaMiddleware.run(watchCounterActions);

export type RootState = ReturnType<typeof store.getState>;
