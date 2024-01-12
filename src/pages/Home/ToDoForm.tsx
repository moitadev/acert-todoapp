import { Button, Input, Textarea } from '@/components';
import { useState } from 'react';

type ToDoFormProps = {
  handleAdd: (task: string, description: string) => void;
};

export const ToDoForm = ({ handleAdd }: ToDoFormProps): JSX.Element => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (task !== '') {
      handleAdd(task, description);
      setTask('');
      setDescription('');
    }
  };
  return (
    <form className="flex gap-2 flex-col justify-center max-w-3xl w-full self-center px-4 py-2 pb-5 m-4 shadow-md bg-gray-900 rounded-md">
      <Input
        placeholder="Digite sua tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Textarea
        placeholder="Digite uma descrição para sua tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button className="self-end" onClick={handleSubmit}>
        Adicionar
      </Button>
    </form>
  );
};
