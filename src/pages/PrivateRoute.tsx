import { AuthContext } from '@/context';
import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
  const { user } = useContext(AuthContext);
  const isAuthenticated = !!user && !!user.uid;
  return isAuthenticated ? children : <Navigate to="/login" />;
};
