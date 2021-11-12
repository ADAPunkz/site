import { Box, Paragraph } from 'grommet';

import Layout from '../components/Layout';
import SiteHeading from '../components/SiteHeading';

const Vote = () => (
  <Layout>
    <Box direction="row-responsive" align="center" justify="center">
      <Box direction="column" align="center">
        <Box width="medium" margin={{ bottom: 'medium' }} pad="small" align="center" justify="center">
          <SiteHeading level="2" margin="none">
            VOTE
          </SiteHeading>
        </Box>
        <Paragraph textAlign="center">Coming soon.</Paragraph>
      </Box>
    </Box>
  </Layout>
);

export default Vote;
