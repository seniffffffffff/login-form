import React from 'react';
import AuthLayout from '../../layout/AuthLayout';
import { Typography } from '@mui/material';
import { useUser } from '../../components/UserContext/UserContext';

const Cabinet = () => {
  const { user } = useUser();
  return (
    <>
      <AuthLayout>
        <Typography variant="h1" color="black">
          {user?.login && `Hello, ${user.login}`}
        </Typography>
      </AuthLayout>
    </>
  );
};

export default Cabinet;
