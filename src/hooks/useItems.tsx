import { useEffect, useState } from 'react';

export const useItems = () => {
  const storedItems = JSON.parse(localStorage.getItem('items') ?? '[]');
  const [items, setItems] =
    useState<{ task: string; description?: string }[]>(storedItems);

  const onAdd = (task: string, description?: string) => {
    const newItem = { task, description };
    setItems([newItem, ...items]);
  };

  const onRemove = (index: number) => {
    const itemsCopy = items.slice();
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return { items, onAdd , onRemove  };
};
