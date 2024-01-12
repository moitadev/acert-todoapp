import { ItemsProvider } from '@/context';
import { ToDoComponent } from './ToDoComponent';


export const Home = () => {

  return (
    <>
      <main className="flex justify-center flex-col">
        <h1 className="text-4xl font-bold pt-6 text-center">
          Teste técnico Acert - To-do List
        </h1>
        <ItemsProvider>
          <ToDoComponent />
        </ItemsProvider>
      </main>
    </>
  );
};
