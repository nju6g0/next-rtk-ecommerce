type BasicProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
};
type Product = BasicProduct & {
  description: string;
  images: string[];
};

export type { Product, BasicProduct };
