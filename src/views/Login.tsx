import { Box, Button } from 'grommet';

import { RouteComponentProps } from '@reach/router';

import Layout from '../components/Layout';
import { useWalletLogin } from '../hooks';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Login = (props: RouteComponentProps) => {
  const { login } = useWalletLogin();
  return (
    <Layout>
      <Box direction="column" align="center" gap="medium">
        <Button label="Login" onClick={() => login()} />
      </Box>
    </Layout>
  );
};

export default Login;
