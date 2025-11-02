import { put, select, takeLatest } from 'redux-saga/effects';

import { State } from './@types';
import { actions } from './slice';
import { selectors } from './selectors';

function* watchIncrement() {
  const count: State['count'] = yield select(selectors.count);

  const newValue = count + 1;

  yield put(actions.setCount(newValue));
}

function* watchDecrement() {
  const count: State['count'] = yield select(selectors.count);

  const newValue = count - 1;

  yield put(actions.setCount(newValue));
}

export function* watchActions() {
  yield takeLatest(actions.increment, watchIncrement);
  yield takeLatest(actions.decrement, watchDecrement);
}
