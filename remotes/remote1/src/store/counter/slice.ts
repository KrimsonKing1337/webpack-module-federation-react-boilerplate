import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  count: 0,
};

const slice = createSlice({
  name: '@counter',
  initialState,
  reducers: {
    setCount(state, action: PayloadAction<State['count']>) {
      state.count = action.payload;
    },
    increment() {},
    decrement() {},
  },
});

export const { reducer, actions } = slice;
