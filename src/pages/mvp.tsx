import { Anchor, Box, Button, Text, TextInput } from 'grommet';
import { useState } from 'react';

import Layout from '../components/Layout';
import SiteHeading from '../components/SiteHeading';

const MVP = () => {
  const [checkAddress, setCheckAddress] = useState('');

  return (
    <Layout>
      <Box direction="column" align="center" gap="medium">
        <SiteHeading level="3" margin="none">
          METAVERSE PASS
        </SiteHeading>
        <Box direction="column" gap="medium" align="center" width="large" background="punkz-charcoal" elevation="small" margin="medium" pad="medium">
          <Text textAlign="center">Check your address is whitelisted for presale</Text>
          <Box direction="row" gap="small">
            <TextInput placeholder="Wallet address" value={checkAddress} onChange={(event) => setCheckAddress(event.target.value)} />
            <Button label="Check" color="white" />
          </Box>
          <Box>
            <Text color="status-warning" size="small" textAlign="center">
              If you were whitelisted in the top 1k punk snapshot,{' '}
              <Text weight="bold" size="small">
                the whitelisted address is that which held the punk during the snapshot
              </Text>
              , not necessarily any address associated with that wallet. You can find this out by finding your punk on{' '}
              <Anchor href="https://pool.pm" label="pool.pm" target="_blank" rel="noreferer noopener" />.
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default MVP;
