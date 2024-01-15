import { Button, Input } from '@/components';
import { useSignIn } from '@/hooks';

export const LoginForm = (): JSX.Element => {
  const { handleSignIn, errorMessage } = useSignIn();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    handleSignIn(email, password);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col px-6">
      <Input name="email" sizeVariant="normal" placeholder="Email" />
      <Input
        name="password"
        sizeVariant="normal"
        placeholder="Senha"
        type="password"
      />
      {errorMessage && (
        <p className="text-rose-900 text-sm mt-1 w-56 text-center">
          {errorMessage}
        </p>
      )}
      <Button className="self-center">Entrar</Button>
    </form>
  );
};
