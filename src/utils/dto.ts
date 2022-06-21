export type Asset = {
  name: string;
  description: string;
  image: string;
  price: number;
  onBuy: () => void;
};
