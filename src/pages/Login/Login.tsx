import { Box, Button, Typography } from '@mui/material';
import BaseLayout from '../../layout/BaseLayout';
import TextField from '@mui/material/TextField';
import { useUser } from '../../components/UserContext/UserContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const Login = () => {
  const [loginValue, setLoginValue] = useState('');
  const { login } = useUser();

  const navigate = useNavigate();

  const handleSubmit = () => {
    login({ login: loginValue, isAuthorized: true });
    navigate(ROUTES.USER, { replace: true });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue(e.target.value);
  };

  return (
    <BaseLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          background: '#ffffff',
        }}
      >
        <Typography variant="h5" color="black">
          Register Form
        </Typography>
        <TextField
          label="Login"
          name="login"
          variant="outlined"
          value={loginValue}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Box>
    </BaseLayout>
  );
};

export default Login;
