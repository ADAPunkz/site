import { Box, Button, Spinner, Text } from 'grommet';
import MiddleEllipsis from 'react-middle-ellipsis';
import styled from 'styled-components';

import { useNami } from '../hooks';

const LimitedText = styled(Text)`
  max-width: 30px;
  text-overflow: ellipsis;
`;

const ConnectButton = ({ policyId }: { policyId?: string }) => {
  const { address, isEnabled, enable, loading } = useNami(policyId);

  return (
    <Box justify="center" width="small">
      <Button
        label={
          address ? (
            <MiddleEllipsis>
              <LimitedText>{address}</LimitedText>
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
        disabled={Boolean(address) || isEnabled || !isEnabled}
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
