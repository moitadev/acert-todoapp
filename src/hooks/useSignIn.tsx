import { auth } from "@/util";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { errors } from '@/assets/errors';
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
    const history = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
    const handleSignIn = async (email: string, password: string) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        history('/');
      } catch (err: unknown) {
        setErrorMessage(errors[err.code] || err.message);
      }
    };
  
    return { handleSignIn, errorMessage };
  };