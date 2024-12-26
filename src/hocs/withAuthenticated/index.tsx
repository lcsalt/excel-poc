import { Navigate, Outlet } from 'react-router-dom';
import useAuth, { AuthContextType } from '../../contexts/useAuth';
export const Protected = ({ fallbackElement }: { fallbackElement?: JSX.Element }) => {
  const { user } = useAuth() as AuthContextType;
  if (!user) {
    // user is not authenticated
    if (fallbackElement) {
      return fallbackElement;
    } else {
      return <Navigate to="/auth" />;
    }
  }
  return <Outlet />;
};
export const Public = ({ fallbackElement }: { fallbackElement?: JSX.Element }) => {
  const { user } = useAuth() as AuthContextType;
  if (user) {
    // user is not authenticated
    if (fallbackElement) {
      return fallbackElement;
    } else {
      return <Navigate to="/" />;
    }
  }
  return <Outlet />;
};
