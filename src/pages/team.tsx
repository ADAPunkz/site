import { Box, Paragraph } from 'grommet';

import Layout from '../components/Layout';
import ProfileCard from '../components/ProfileCard';
import SiteHeading from '../components/SiteHeading';

const Team = () => (
  <Layout>
    <Box direction="column" align="center" gap="medium">
      <SiteHeading level="3" margin="none">
        TEAM
      </SiteHeading>
      <Box direction="row-responsive" gap="medium">
        <ProfileCard edition={1832} description="Independent Record Label Manager. DJ, Producer & Live Events Coordinator. Cardano NFT enthusiast." />
        <ProfileCard edition={1578} description="TechDev. Years of academic & professional coding experience. Dabbler in synthesizers & generative art." />
      </Box>
      <Box direction="row-responsive" gap="medium">
        <ProfileCard edition={5993} description="Performing Composer. Pro in Artist Development. Vocaliser. Punk af." />
        <ProfileCard edition={2641} description="Professional Digital Artist. Acclaimed Musician." />
      </Box>
      <Paragraph textAlign="center">
        The ADAPunkz team formed across a course of musical endeavours involving one band, two record labels, a DIY mentality, and years of experimental exploration. In the early
        days of the crypto space, members of our gang participated in a PhD research project which predicted an imminent &quot;Creative Business-Model Revolution via Blockchain
        Technology.&quot; We have launched successful projects on Ethereum before finding our rightful home amongst the vastly superior Cardano Community.
      </Paragraph>
    </Box>
  </Layout>
);

export default Team;
