import { Wrapper } from '@/components';
import { ToDoForm } from './ToDoForm';
import { ToDoItem } from './ToDoItem';
import { useItemsContext } from '@/hooks';
import { ToDoComponentProps } from '@/types';

export const ToDoComponent = () => {
  const { items } = useItemsContext() as ToDoComponentProps;
  return (
    <>
      <ToDoForm />
      {items.length ? (
        <Wrapper>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              index={index}
              task={item.task}
              desc={item.description}
            />
          ))}
        </Wrapper>
      ) : (
        ''
      )}
    </>
  );
};
