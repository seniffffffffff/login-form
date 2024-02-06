import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useUser } from '../../components/UserContext/UserContext';
import { TProps } from '../../layout/types';

export const PermissionPrivateRoute: React.FC<TProps> = ({ children }) => {
  const { user, getUser } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!getUser().isAuthorized) {
      navigate(ROUTES.HOME, { replace: true });
    }
  }, [user]);

  if (user && children) {
    return <>{children}</>;
  }

  return null;
};
