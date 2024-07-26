import { configureStore, Store } from "@reduxjs/toolkit";

function cartItem(state: any = { value: 0, cart: [] }, action: any) {
  switch (action.type) {
    case "add":
      state.value + 1;
      state.cart.push(action.id);

    case "remove":
      state.value - 1;
      state.cart.pop(action.id);
  }
}

const store = configureStore({
  reducer: cartItem,
});

store.subscribe(() => console.log(store.getState()));

export default store;
