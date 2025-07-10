import { BasicProduct } from "./product";

type CartItem = BasicProduct & {
  quantity: number;
};

export type { CartItem };
