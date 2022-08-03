import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Address {
  address: string;
}

const initialState: Address = {
  address: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    changeAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    }
  },
});

export type { Address };
export const { changeAddress } = inputSlice.actions;
export { inputSlice };
