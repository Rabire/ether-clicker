import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useMemo
} from 'react';

type ContextType = {
  coins: number;
  setCoins: Dispatch<SetStateAction<number>>;
  multiplier: number;
  setMultiplier: Dispatch<SetStateAction<number>>;
};

const defaultValue: ContextType = {
  coins: 0,
  setCoins: () => null,
  multiplier: 1,
  setMultiplier: () => null
};

export const GameContext = createContext<ContextType>(defaultValue);

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [coins, setCoins] = useState(defaultValue.coins);
  const [multiplier, setMultiplier] = useState(defaultValue.multiplier);

  const value: ContextType = useMemo(
    () => ({
      coins,
      setCoins,
      multiplier,
      setMultiplier
    }),
    [coins, multiplier]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
