import { ItemsProvider } from '@/context';
import { ToDoComponent } from './ToDoComponent';
import { Button } from '@/components';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '@/util';

export const Home = () => {

  const history = useNavigate();
  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      history('/login');
    });
  };
  return (
    <>
      <main className="flex justify-center flex-col">
        <h1 className="text-4xl font-bold pt-6 text-center">
          Teste técnico Acert - To-do List
        </h1>
        <ItemsProvider>
          <ToDoComponent />
        </ItemsProvider>
        <Button
          className="self-center"
          variant="outlineDanger"
          onClick={handleSignOut}
        >
          Sair
        </Button>
      </main>
    </>
  );
};
