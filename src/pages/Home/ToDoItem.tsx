import { Accordion, Button, Input } from '@/components';

type ToDoItemProps = {
  handleRemove: (index: number) => void;
  index: number;
  task: string;
  desc?: string;
};

export const ToDoItem = ({ task, desc, index, handleRemove }: ToDoItemProps) => {
  return (
    <>
      {desc ? (
        <div>
          <div className="flex gap-2 items-start w-full">
            <Accordion task={task} desc={desc} />
            <Button variant="danger" onClick={() => handleRemove(index)}>x</Button>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <Input value={task} variant="listItem" readOnly />
          <Button variant="danger" onClick={() => handleRemove(index)}>x</Button>
        </div>
      )}
    </>
  );
};
