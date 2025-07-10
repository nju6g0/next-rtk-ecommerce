import { createSlice } from "@reduxjs/toolkit";
import { CartItem as CartItemType } from "@/types/cartItem";

interface CartState {
  items: CartItemType[];
}
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
