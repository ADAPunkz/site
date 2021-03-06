import { Box, Paragraph } from 'grommet';

import Layout from '../components/Layout';
import SiteHeading from '../components/SiteHeading';

const Mint = () => (
  <Layout>
    <Box direction="column" align="center">
      <Box width="medium" margin={{ bottom: 'medium' }} pad="small" align="center" justify="center">
        <SiteHeading level="3" margin="none">
          MINT
        </SiteHeading>
      </Box>
      <Paragraph textAlign="center">Minting has now ended.</Paragraph>
      <Paragraph textAlign="center">Sales are now taking place on secondary markets.</Paragraph>
      <Paragraph textAlign="center">CNFT - Tokhun - ExNFT</Paragraph>
    </Box>
  </Layout>
);

export default Mint;
