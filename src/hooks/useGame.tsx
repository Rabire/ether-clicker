import { GameContext } from 'contexts/Game';
import { useContext } from 'react';

export const useGame = () => {
  const { coins, setCoins, multiplier, setMultiplier } = useContext(GameContext);

  return { coins, setCoins, multiplier, setMultiplier };
};
