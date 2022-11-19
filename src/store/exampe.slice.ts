import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExampleState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: ExampleState = {
  value: 0,
  status: "idle",
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    sum: (state) => {
      state.value -= 1;
    },
  },
});

export const { sum } = exampleSlice.actions;

export const exampleReducer = exampleSlice.reducer;
