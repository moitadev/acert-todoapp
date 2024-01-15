import { AuthContext } from '@/context';
import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';

type GuestRouteProps = {
  children: ReactNode;
};

export const GuestRoute = ({ children }: GuestRouteProps) => {
  const { user } = useContext(AuthContext);

  return !user ? children : <Navigate to="/" />;
};
