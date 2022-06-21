export type Asset = {
  name: string;
  description: string;
  price: number;
  onBuy: () => void;
};
