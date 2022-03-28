import { Box, Button } from 'grommet';

import Layout from '../components/Layout';
import { useWalletLogin } from '../hooks';

const Vote = () => {
  const { login } = useWalletLogin();
  return (
    <Layout>
      <Box direction="column" align="center" gap="medium">
        <Button label="Login" onClick={() => login()} />
      </Box>
    </Layout>
  );
};

export default Vote;
