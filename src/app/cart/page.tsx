"use client";

import { useAppSelector } from "@/store/hooks";
import { getCartItems } from "@/store/slices/cart/cartSelector";

function CartPage() {
  const cartItems = useAppSelector(getCartItems);
  console.log("cart items", cartItems);

  return <div>cart pages</div>;
}

export default CartPage;
