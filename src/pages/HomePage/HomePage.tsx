import { Typography } from '@mui/material';
import BaseLayout from '../../layout/BaseLayout';
import { useUser } from '../../components/UserContext/UserContext';

const HomePage = () => {
  const { user } = useUser();
  return (
    <BaseLayout>
      <Typography typography="h2" color="white">
        Welcome to home page {user && `, ${user.login}!`}
      </Typography>
    </BaseLayout>
  );
};

export default HomePage;
