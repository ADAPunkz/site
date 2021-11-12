import { Box, Button, Spinner, Text } from 'grommet';
import MiddleEllipsis from 'react-middle-ellipsis';

import { useNami } from '../hooks';

const ConnectButton = ({ policyId }: { policyId: string }) => {
  const { address, isEnabled, enable, loading } = useNami(policyId);

  return (
    <Box justify="center" width="small">
      <Button
        label={
          address ? (
            <MiddleEllipsis>
              <Text>{address}</Text>
            </MiddleEllipsis>
          ) : loading ? (
            <Box fill="horizontal" align="center">
              <Spinner />
            </Box>
          ) : isEnabled ? (
            <Text>Connected</Text>
          ) : (
            <Text>Connect</Text>
          )
        }
        disabled={!!address || isEnabled}
        size="small"
        color="white"
        primary
        margin={{ horizontal: 'small' }}
        onClick={enable}
      />
    </Box>
  );
};

export default ConnectButton;
