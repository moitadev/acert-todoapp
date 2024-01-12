import { useItems } from '@/hooks';
import { ReactNode, createContext } from 'react';

type ItemsProviderProps = {
  children: ReactNode;
};
export const ItemsContext = createContext({});

export const ItemsProvider = ({ children }: ItemsProviderProps) => {
  const itemsContextValue = useItems();

  return (
    <ItemsContext.Provider value={itemsContextValue}>
      {children}
    </ItemsContext.Provider>
  );
};