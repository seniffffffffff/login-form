import { TUser } from '../../types/types';

export type TUserContextType = {
  user: TUser | null;
  login: (user: TUser) => void;
  logout: () => void;
  getUser: () => TUser;
};

export type TProps = {
  children: React.ReactNode;
};
