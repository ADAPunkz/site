import { Box, Button, Spinner, Text } from 'grommet';
import { useQuery } from 'react-query';

import { AddressBalance } from '../utils';
import { ADA } from './icons';

const ChestOverview = () => {
  const { data, isFetching } = useQuery<AddressBalance>('/chest/balance');
  return (
    <Box background="background-front" width="small" height="small" elevation="medium" pad="medium" align="center" justify="center">
      {isFetching ? (
        <Spinner color="terminal" />
      ) : (
        <>
          <Box direction="row" gap="xsmall">
            <ADA />
            <Text>{data.balance}</Text>
          </Box>
          <Text textAlign="center" size="small" margin={{ vertical: 'small' }}>
            Community Chest
          </Text>
          <Button href={`https://pool.pm/$adapunkz`} label="$adapunkz" size="small" color="terminal" target="_blank" rel="noreferrer noopener" style={{ maxWidth: '150px' }} />
        </>
      )}
    </Box>
  );
};

export default ChestOverview;
