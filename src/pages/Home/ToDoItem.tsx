import { Accordion, Button, Input } from '@/components';
import { useItemsContext } from '@/context';
import { ToDoComponentProps } from './ToDoComponent';

type ToDoItemProps = {
  index: number;
  task: string;
  desc?: string;
};

export const ToDoItem = ({ task, desc, index }: ToDoItemProps) => {
  const { onRemove } = useItemsContext() as ToDoComponentProps;
  return (
    <>
      {desc ? (
        <div>
          <div className="flex gap-2 items-start w-full">
            <Accordion task={task} desc={desc} />
            <Button variant="danger" onClick={() => onRemove(index)}>x</Button>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <Input value={task} variant="listItem" readOnly />
          <Button variant="danger" onClick={() => onRemove(index)}>x</Button>
        </div>
      )}
    </>
  );
};
