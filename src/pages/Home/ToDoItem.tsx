import { Accordion, Button, Input, Checkbox } from '@/components';
import { useItemsContext } from '@/hooks';
import { ToDoComponentProps } from '@/types';

type ToDoItemProps = {
  index: number;
  task: string;
  desc?: string;
};

export const ToDoItem = ({ task, desc, index }: ToDoItemProps) => {
  const { removeItem, checkItem, items } = useItemsContext() as ToDoComponentProps;
  return (
    <>
      {desc ? (
        <div>
          <div className="flex gap-2 items-start w-full">
            <Checkbox checked={items[index].checked} onChange={(e) => checkItem(index, e.target.checked) } />
            <Accordion task={task} desc={desc} variant={items[index].checked ? "checkedItem" : "default"} />
            <Button variant="danger" onClick={() => removeItem(index)}>x</Button>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <Checkbox checked={items[index].checked} onChange={(e) => checkItem(index, e.target.checked) } />
          <Input value={task} variant={items[index].checked ? "checkedItem" : "listItem"}  readOnly />
          <Button variant="danger" onClick={() => removeItem(index)}>x</Button>
        </div>
      )}
    </>
  );
};
