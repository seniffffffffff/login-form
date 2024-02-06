import { TUser } from './../../types/types';

export const authorized = {
  set(user: TUser): void {
    localStorage.setItem('user', JSON.stringify(user));
  },
  get(): TUser {
    return JSON.parse(localStorage.getItem('user') as string);
  },
  remove(): void {
    localStorage.removeItem('user');
  },
};
