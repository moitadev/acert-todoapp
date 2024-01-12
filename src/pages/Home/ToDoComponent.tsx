import { Wrapper } from '@/components';
import { ToDoForm } from './ToDoForm';
import { ToDoItem } from './ToDoItem';
import { useItemsContext } from '@/context';

export type ToDoComponentProps = {
  items: { task: string; description?: string }[];
  onAdd: (task: string, description?: string) => void;
  onRemove: (index: number) => void;
};

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
