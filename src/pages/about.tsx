import { StaticImage } from 'gatsby-plugin-image';
import { Box, Diagram, Paragraph, Stack, Text } from 'grommet';

import BlinkingCursor from '../components/BlinkingCursor';
import Layout from '../components/Layout';
import ProfileCard from '../components/ProfileCard';
import SiteHeading from '../components/SiteHeading';

const About = () => (
  <Layout>
    <Box direction="column" align="center" gap="medium">
      <SiteHeading level="3" margin="none">
        ROADMAP
      </SiteHeading>
      <Stack guidingChild={1}>
        <Diagram
          connections={[
            {
              fromTarget: '1',
              toTarget: '2',
              thickness: 'xsmall',
              color: 'terminal',
              type: 'rectilinear',
            },
            {
              fromTarget: '2',
              toTarget: '3',
              thickness: 'xsmall',
              color: 'terminal',
              type: 'rectilinear',
            },
            {
              fromTarget: '3',
              toTarget: '4',
              thickness: 'xsmall',
              color: 'terminal',
              type: 'rectilinear',
            },
            {
              fromTarget: '4',
              toTarget: '5',
              thickness: 'xsmall',
              color: 'terminal',
              type: 'rectilinear',
            },
          ]}
        />
        <Box>
          <Box direction="row-responsive" justify="center">
            <Box id="1" direction="row-responsive" margin="medium" pad="medium" elevation="small" justify="between" background="punkz-charcoal">
              <Box direction="column">
                <Text color="terminal" weight="bold">
                  Q1 2022
                </Text>
                <Text>• Charles Hoskinpunkz Collage mint</Text>
                <Text>• ADAPunkz stake pool goes live</Text>
              </Box>
              <Box justify="center" pad="small">
                <StaticImage src="../images/yoroi.png" alt="Yoroi" width={100} placeholder="none" loading="eager" objectFit="contain" />
              </Box>
            </Box>
            <Box id="2" direction="row-responsive" margin="medium" pad="medium" elevation="small" justify="between" background="punkz-charcoal">
              <Box direction="column">
                <Text color="terminal" weight="bold">
                  Q2 2022
                </Text>
                <Text>• Community chest voting mechanics beta</Text>
                <Text>• Expansion into the Virtual Reality Metaverse</Text>
              </Box>
              <Box justify="center" pad="small">
                <StaticImage src="../images/warm-and-sunny.png" alt="Yoroi" width={100} placeholder="none" loading="eager" objectFit="contain" />
              </Box>
            </Box>
          </Box>
          <Box direction="row-responsive" justify="center">
            <Box id="3" direction="row-responsive" margin="medium" pad="medium" elevation="small" justify="between" background="punkz-charcoal">
              <Box direction="column">
                <Text color="terminal" weight="bold">
                  Q3 2022
                </Text>
                <Text>• Community chest allocation proposals go live</Text>
                <Text>• First community chest allocation decision drawn</Text>
              </Box>
              <Box justify="center" pad="small">
                <StaticImage src="../images/deadalus.png" alt="Yoroi" width={100} placeholder="none" loading="eager" objectFit="contain" />
              </Box>
            </Box>
            <Box id="4" direction="row-responsive" margin="medium" pad="medium" elevation="small" justify="between" background="punkz-charcoal">
              <Box direction="column">
                <Text color="terminal" weight="bold">
                  Q4
                </Text>
                <Text>• Creative Community Live Events & Competitions w/ Emphasis on Music</Text>
                <Text>• Real World Collaborations Outside of NFT Space</Text>
              </Box>
              <Box justify="center" pad="small">
                <StaticImage src="../images/lobster.png" alt="Yoroi" width={100} placeholder="none" loading="eager" objectFit="contain" />
              </Box>
            </Box>
          </Box>
          <Box direction="row-responsive" justify="center">
            <Box id="5" direction="row-responsive" margin="medium" pad="medium" elevation="small" justify="between" background="punkz-charcoal">
              <Box direction="column">
                <Text color="terminal" weight="bold">
                  ONGOING
                </Text>
                <Text>• Fortnightly ADAPunkz Community Prize Raffle Draw</Text>
                <Text>• Twitter Live Spaces with Artists and NFT Personalities</Text>
                <Text>• Punkz Radio - Virtual Streams curated and hosted by Punkz Community</Text>
                <BlinkingCursor color="terminal" weight="bold" />
              </Box>
              <Box justify="center" pad="small">
                <StaticImage src="../images/vr-goggles.png" alt="Yoroi" width={100} placeholder="none" loading="eager" objectFit="contain" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
      <SiteHeading level="3" margin="none">
        TEAM
      </SiteHeading>
      <Paragraph textAlign="center">
        The ADAPunkz team formed across a course of musical endeavours involving one band, two record labels, a DIY mentality, and years of experimental exploration. In the early
        days of the crypto space, members of our gang participated in a PhD research project which predicted an imminent &quot;Creative Business-Model Revolution via Blockchain
        Technology.&quot; We have launched successful projects on Ethereum before finding our rightful home amongst the vastly superior Cardano Community.
      </Paragraph>
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
