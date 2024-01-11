import { Button } from '@/components';
import { useState } from 'react';

export const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <main className="flex justify-center flex-col">
        <h1 className="text-3xl pt-4 text-center">
          Teste técnico Acert - To-do List
        </h1>
        <div className='flex gap-2 justify-center'>
          <Button variant="primary" onClick={() => setCount(count + 1)}>
            Incrementar
          </Button>
          <Button variant="danger" onClick={() => setCount(count - 1)}>
            Decrementar
          </Button>
        </div>
        <h2 className="text-xl font-bold pt-4 text-center">{count}</h2>
      </main>
    </>
  );
};
