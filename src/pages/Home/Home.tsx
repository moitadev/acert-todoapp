import { useEffect, useState } from 'react';
import { ToDoForm } from './ToDoForm';
import { ToDoItem } from './ToDoItem';
import { Wrapper } from '@/components';

export const Home = () => {
  const storedItems = JSON.parse(localStorage.getItem('items') ?? '[]');
  const [items, setItems] = useState<{ task: string; description?: string }[]>(storedItems);

  const onAdd = (task: string, description?: string) => {
    const newItem = { task, description };
    setItems([newItem, ...items]);
  };

  const onRemove = (index: number) => {
    const itemsCopy = items.slice();
    itemsCopy.splice(index, 1);

    setItems(itemsCopy)
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <main className="flex justify-center flex-col">
        <h1 className="text-4xl font-bold pt-6 text-center">
          Teste técnico Acert - To-do List
        </h1>
        <ToDoForm handleAdd={onAdd} />
        {items.length ? (
          <Wrapper>
            {items.map((item, index) => (
              <ToDoItem key={index} index={index} handleRemove={onRemove} task={item.task} desc={item.description} />
            ))}
          </Wrapper>
        ) : (
          ''
        )}
      </main>
    </>
  );
};
