import { useEffect, useState } from 'react';

export const useItems = () => {
  const storedItems = JSON.parse(localStorage.getItem('items') ?? '[]');
  const [items, setItems] =
    useState<{ task: string; checked: boolean; description?: string }[]>(
      storedItems
    );

  const addItem = (task: string, checked: boolean, description?: string) => {
    const newItem = { task, checked, description, };
    setItems([newItem, ...items]);
  };

  const itemsCopy = items.slice();

  const removeItem = (index: number) => {
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  };

  const checkItem = (index: number, isChecked: boolean) => {
    itemsCopy[index].checked = isChecked;
    setItems(itemsCopy);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return { items, addItem, removeItem, checkItem };
};
