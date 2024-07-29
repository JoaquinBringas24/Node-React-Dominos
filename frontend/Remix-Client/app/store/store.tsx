import {
  configureStore,
  createSlice,
  PayloadAction,
  Store,
} from "@reduxjs/toolkit";
import { useEffect } from "react";
import { loadState, saveState } from "./Localstates";

let initialData: number[] = loadState() || [];

let initialState: { counter: number; items: number[] } = {
  counter: initialData.length || 0,
  items: initialData || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.counter++;
      state.items.push(action.payload);
    },
    decrease(state, action: PayloadAction<number>) {
      state.counter--;
      const idx = state.items.findIndex((item) => item == action.payload);
      state.items.splice(idx, 1);
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

store.subscribe(function () {
  saveState(store.getState());
});

export const cartActions = cartSlice.actions;

export default store;
