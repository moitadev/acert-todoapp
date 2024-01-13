export type ToDoComponentProps = {
  items: { task: string; checked: boolean; description?: string }[];
  addItem: (task: string, checked: boolean, description?: string) => void
  removeItem: (index: number) => void;
  checkItem: (index: number, isChecked: boolean) => void;
};
