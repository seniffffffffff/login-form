import { Box, Button } from '@mui/material';
import { ROUTES } from '../../constants/routes';
import { useUser } from '../../components/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME, { replace: true });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '0',
        width: '100%',
        backgroundColor: '#413f3f',
        padding: '10px 20px',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      {user ? (
        <>
          <Button
            onClick={handleLogout}
            color="success"
            sx={{ border: '1px solid white', backgroundColor: 'white', color: 'black' }}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button variant="contained" href={ROUTES.LOGIN}>
            Login
          </Button>
        </>
      )}
    </Box>
  );
};

export default Header;
