import { Accordion, AccordionPanel, Anchor, Box, Text } from 'grommet';

import Layout from '../components/Layout';
import SiteHeading from '../components/SiteHeading';
import StyledLink from '../components/StyledLink';

const textMargin = { horizontal: 'small', bottom: 'medium' };

const FAQ = () => (
  <Layout>
    <Box direction="row-responsive" align="center" justify="center">
      <Box direction="column" align="center" width="medium">
        <Box width="medium" margin={{ bottom: 'medium' }} pad="small" align="center" justify="center">
          <SiteHeading level="2" margin="none">
            FAQ
          </SiteHeading>
        </Box>
        <Accordion width="medium">
          <AccordionPanel label={<SiteHeading level="5">What is the Policy ID?</SiteHeading>}>
            <Text margin={textMargin} wordBreak="break-all">
              Policy ID = 76ebe108d0d58ba2ffe6024cf25cf5f6a890f4c61d77ee7911362b14
            </Text>
          </AccordionPanel>
          <AccordionPanel label={<SiteHeading level="5">When is the Mint?</SiteHeading>}>
            <Text margin={textMargin}>
              Minting has ended, sales are now taking place on secondary markets.
            </Text>
          </AccordionPanel>
          <AccordionPanel label={<SiteHeading level="5">Where is secondary?</SiteHeading>}>
            <Text margin={textMargin}>Secondary sales are live on CNFT.io, Tokun and ExNFT. </Text>
          </AccordionPanel>
          <AccordionPanel label={<SiteHeading level="5">Rarity chart?</SiteHeading>}>
            <Text margin={textMargin}>
              You can explore the whole ADAPunkz collection by rarity, attributes and price by visiting the <StyledLink to="/explore">Explorer</StyledLink> at
              the top of this page, or view the overall rarities table at <StyledLink to="/rarity">Rarity</StyledLink>.
            </Text>
          </AccordionPanel>
          <AccordionPanel label={<SiteHeading level="5">What’s in store for the roadmap?</SiteHeading>}>
            <Text margin={textMargin}>
              We plan to build, develop and expand our community tools, create a stake pool and further the Cardano initiative of decentralisation.
            </Text>
          </AccordionPanel>
          <AccordionPanel label={<SiteHeading level="5">Where can I view my NFT?</SiteHeading>}>
            <Text margin={textMargin}>
              You can view your NFT on <Anchor href="https://pool.pm" color="text" label="pool.pm" /> with the ADA address you purchased the NFT from.
            </Text>
          </AccordionPanel>
          <AccordionPanel label={<SiteHeading level="5">ADAPUNK?</SiteHeading>}>
            <Text margin={textMargin}>Yes, anonymity - unity - revolution - decentralisation.</Text>
          </AccordionPanel>
          <AccordionPanel label={<SiteHeading level="5">Disclaimer</SiteHeading>}>
            <Text margin={textMargin}>
              We are not affiliated with Larva Labs, we just love and respect the ideas and philosophy behind the movement they created, with intention to
              further cement and clarify their validity and pioneering ideas in a creative and community driven, decentralised way. ADAPunkz parodies and
              explores art subculture in a respectful and honorific manner.
            </Text>
          </AccordionPanel>
        </Accordion>
      </Box>
    </Box>
  </Layout>
);

export default FAQ;
