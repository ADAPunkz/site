import { StaticImage } from 'gatsby-plugin-image';
import { Box, Text } from 'grommet';

import Layout from '../components/Layout';
import RarityBox from '../components/RarityBox';
import SiteHeading from '../components/SiteHeading';
import { attributesWithRarity } from '../data';

const Rarity = () => (
  <Layout>
    <Box direction="column" align="center" gap="medium">
      <SiteHeading level="3" margin="none">
        RARITY
      </SiteHeading>
      <Box direction="row-responsive" justify="center" gap="medium">
        <Box direction="column" align="center">
          <RarityBox title="Eyes" attributes={attributesWithRarity.eyes} />
          <RarityBox title="Implant Nodes" attributes={attributesWithRarity.implant_nodes} />
        </Box>
        <Box direction="column" align="center">
          <StaticImage src="../images/home.png" alt="ADAPunkz Home" width={500} placeholder="none" loading="eager" objectFit="contain" />
          <Box direction="row-responsive" justify="center" gap="medium">
            <Box direction="column" align="center">
              <RarityBox title="Type" attributes={attributesWithRarity.type} />
              <RarityBox title="Accessories" attributes={attributesWithRarity.accessories} />
            </Box>
            <Box direction="column" align="center">
              <RarityBox title="Background" attributes={attributesWithRarity.background} />
              <RarityBox title="Mouth" attributes={attributesWithRarity.mouth} />
            </Box>
          </Box>
        </Box>
        <Box direction="column" align="center">
          <RarityBox title="Head" attributes={attributesWithRarity.head} />
        </Box>
      </Box>
      <Box width="medium" margin={{ top: 'medium' }} pad="small" align="center" justify="center">
        <Text textAlign="center">Rarity layout inspired by Craven#0001</Text>
      </Box>
    </Box>
  </Layout>
);

export default Rarity;
