import { Box } from 'grommet';

import Layout from '../components/Layout';
import ProfileCard from '../components/ProfileCard';
import SiteHeading from '../components/SiteHeading';

const About = () => (
  <Layout>
    <Box direction="column" align="center" gap="medium">
      <Box width="medium" margin={{ bottom: 'medium' }} pad="small" align="center" justify="center">
        <SiteHeading level="2" margin="none">
          ABOUT US
        </SiteHeading>
      </Box>
      <Box direction="row-responsive" gap="medium">
        <ProfileCard edition={1832} description="Independent Record Label Manager. DJ, Producer & Live Events Coordinator. Cardano NFT enthusiast." />
        <ProfileCard edition={1578} description="TechDev. Years of academic & professional coding experience. Dabbler in synthesizers & generative art." />
      </Box>
      <Box direction="row-responsive" gap="medium">
        <ProfileCard edition={5993} description="Performing Composer. Pro in Artist Development. Vocaliser. Punk af." />
        <ProfileCard edition={2641} description="Professional Digital Artist. Acclaimed Musician." />
      </Box>
    </Box>
  </Layout>
);

export default About;
