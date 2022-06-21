import { GameContext } from 'contexts/Game';
import { useContext } from 'react';
import { Asset } from 'utils/dto';

export const useGame = () => {
  const { coins, setCoins, multiplier, setMultiplier } = useContext(GameContext);

  const assets: Asset[] = [
    {
      name: 'Multiplier',
      description: 'Multiply by 2 each coins you get by clicking',
      price: 30 * multiplier,
      onBuy: () => {
        setMultiplier((prev) => prev * 2);
      }
    },
    {
      name: 'Passive Bonus',
      description: 'Get a free coin each seconds',
      price: 100,
      onBuy: () => {
        return null;
      }
    },
    {
      name: 'Gamble',
      description: 'Double all your coins or, loose them all',
      price: 200,
      onBuy: () => {
        const won = Math.random() < 0.5;

        if (won) {
          setCoins((prev) => prev * 2);
        } else {
          setCoins(0);
        }
      }
    }
  ];

  return { coins, setCoins, multiplier, setMultiplier, assets };
};
