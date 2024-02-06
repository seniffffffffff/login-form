import React from 'react';
import Box from '@mui/material/Box';
import { TProps } from './types';
import Header from './Header/Header';

const BaseLayout: React.FC<TProps> = ({ children }) => {
  return (
    <>
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
    </>
  );
};

export default BaseLayout;
