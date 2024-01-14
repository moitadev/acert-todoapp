import { Wrapper, Button } from '@/components';
import { ToDoForm } from './ToDoForm';
import { ToDoItem } from './ToDoItem';
import { useItemsContext } from '@/hooks';
import { ToDoComponentProps } from '@/types';
import { useState } from 'react';

export const ToDoComponent = () => {
  const { items } = useItemsContext() as ToDoComponentProps;
  const [filter, setFilter] = useState('all');

  const filteredItems = items.filter((item) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'done') {
      return item.checked;
    } else if (filter === 'todo') {
      return !item.checked;
    }
    return false;
  });
  return (
    <>
      <ToDoForm />
      {items.length ? (
        <Wrapper size="full">
          <div className="flex gap-3">
            <Button
              variant={filter === 'all' ? 'secondary' : 'outlineSecondary'}
              onClick={() => setFilter('all')}
            >
              Todos
            </Button>
            <Button
              variant={filter === 'done' ? 'secondary' : 'outlineSecondary'}
              onClick={() => setFilter('done')}
            >
              Concluídas
            </Button>
            <Button
              variant={filter === 'todo' ? 'secondary' : 'outlineSecondary'}
              onClick={() => setFilter('todo')}
            >
              Pendentes
            </Button>
          </div>
          {filteredItems.map((item, index) => (
            <ToDoItem
              key={index}
              index={index}
              task={item.task}
              desc={item.description}
              checked={item.checked}
            />
          ))}
        </Wrapper>
      ) : (
        ''
      )}
    </>
  );
};
