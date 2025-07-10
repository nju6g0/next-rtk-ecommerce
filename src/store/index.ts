import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cart/cartSlice";

// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//       cart: cartReducer,
//     },
//   });
// };

// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
