import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Address {
  input: string;
  address: string;
}

const initialState: Address = {
  input: '',
  address: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    changeAddress(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    handleChoice(state) {
      state.address = state.input;
    }
  },
});

export type { Address };
export const { changeAddress, handleChoice } = inputSlice.actions;
export { inputSlice };
