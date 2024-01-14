import { Accordion, Button, Input, Checkbox } from '@/components';
import { useItemsContext } from '@/hooks';
import { ToDoComponentProps } from '@/types';

type ToDoItemProps = {
  task: string;
  checked: boolean;
  desc?: string;
  index: number;
};

export const ToDoItem = ({ task, checked, desc, index }: ToDoItemProps) => {
  const { removeItem, checkItem } = useItemsContext() as ToDoComponentProps;
  return (
    <>
      {desc ? (
        <div>
          <div className="flex gap-2 items-start w-full">
            <Checkbox checked={checked} onChange={(e) => checkItem(index, e.target.checked) } />
            <Accordion task={task} desc={desc} variant={checked ? "checkedItem" : "default"} />
            <Button variant="danger" onClick={() => removeItem(index)}>x</Button>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <Checkbox checked={checked} onChange={(e) => checkItem(index, e.target.checked) } />
          <Input value={task} variant={checked ? "checkedItem" : "listItem"}  readOnly />
          <Button variant="danger" onClick={() => removeItem(index)}>x</Button>
        </div>
      )}
    </>
  );
};
