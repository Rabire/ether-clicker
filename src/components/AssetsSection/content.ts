import { Asset } from 'utils/dto';

export const assets: Asset[] = [
  {
    name: 'Multiplier',
    image: '',
    description: 'Multiply by 2 each coins you get by clicking',
    price: 30,
    onBuy: () => {
      return null;
    }
  },
  {
    name: 'Passive Bonus',
    image: '',
    description: 'Get a free coin each seconds',
    price: 100,
    onBuy: () => {
      return null;
    }
  },
  {
    name: 'Gamble',
    image: '',
    description: 'Double all your coins or, loose them all',
    price: 200,
    onBuy: () => {
      return null;
    }
  }
];
