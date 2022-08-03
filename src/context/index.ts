import { configureStore } from '@reduxjs/toolkit';

import { inputSlice } from './input-slice';

const store = configureStore({
  reducer: { input: inputSlice.reducer },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
