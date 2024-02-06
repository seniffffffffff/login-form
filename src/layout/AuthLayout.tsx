import React from 'react';
import Box from '@mui/material/Box';
import { PermissionPrivateRoute } from '../containers/permissions/PermissionPrivateRoute';
import Header from './Header/Header';

type TProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<TProps> = ({ children }) => {
  return (
    <>
      <PermissionPrivateRoute>
        <Header />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#696969',
            height: '100vh',
          }}
        >
          {children}
        </Box>
      </PermissionPrivateRoute>
    </>
  );
};

export default AuthLayout;
