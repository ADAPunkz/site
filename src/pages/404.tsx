import { StaticImage } from 'gatsby-plugin-image';
import { Box } from 'grommet';

import Layout from '../components/Layout';

const NotFound = () => (
  <Layout>
    <Box align="center" justify="center" pad="small">
      <StaticImage src="../images/icon.png" alt="Page not found" width={600} loading="eager" placeholder="none" objectFit="contain" />
    </Box>
  </Layout>
);

export default NotFound;
