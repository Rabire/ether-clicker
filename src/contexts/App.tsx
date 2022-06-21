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
};

const defaultValue: ContextType = {
  coins: 0,
  setCoins: () => null
};

export const AppContext = createContext<ContextType>(defaultValue);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [coins, setCoins] = useState(defaultValue.coins);

  const value: ContextType = useMemo(
    () => ({
      coins,
      setCoins
    }),
    [coins]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
