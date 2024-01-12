import { useItems } from '@/hooks';
import { ReactNode, createContext, useContext } from 'react';

type ItemsProviderProps = {
  children: ReactNode;
};
const ItemsContext = createContext({});

export const ItemsProvider = ({ children }: ItemsProviderProps) => {
  const itemsContextValue = useItems();

  return (
    <ItemsContext.Provider value={itemsContextValue}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItemsContext = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error('useItemsContext must be used within an ItemsProvider');
  }

  return context;
};
