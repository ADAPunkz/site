import { Box, Diagram, Stack, Text } from 'grommet';

import BlinkingCursor from '../components/BlinkingCursor';
import Layout from '../components/Layout';
import RoadmapSection from '../components/RoadmapSection';
import SiteHeading from '../components/SiteHeading';

const Roadmap = () => (
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
            <RoadmapSection id="1" title="Q1 2022" image="../images/yoroi.png">
              <Text>&bull; Charles Hoskinpunkz Collage mint</Text>
              <Text>&bull; ADAPunkz stake pool goes live</Text>
            </RoadmapSection>
            <RoadmapSection id="2" title="Q2 2022" image="../images/warm-and-sunny.png">
              <Text>&bull; Community chest voting mechanics beta</Text>
              <Text>&bull; Expansion into the Virtual Reality Metaverse</Text>
            </RoadmapSection>
          </Box>
          <Box direction="row-responsive" justify="center">
            <RoadmapSection id="3" title="Q3 2022" image="../images/deadalus.png">
              <Text>&bull; Community chest allocation proposals go live</Text>
              <Text>&bull; First community chest allocation decision drawn</Text>
            </RoadmapSection>
            <RoadmapSection id="4" title="Q4 2022" image="../images/lobster.png">
              <Text>&bull; Creative Community Live Events &amp; Competitions w/ Emphasis on Music</Text>
              <Text>&bull; Real World Collaborations Outside of NFT Space</Text>
            </RoadmapSection>
          </Box>
          <Box direction="row-responsive" justify="center">
            <RoadmapSection id="5" title="ONGOING" image="../images/vr-goggles.png">
              <Text>&bull; Fortnightly ADAPunkz Community Prize Raffle Draw</Text>
              <Text>&bull; Twitter Live Spaces with Artists and NFT Personalities</Text>
              <Text>&bull; Punkz Radio - Virtual Streams curated and hosted by Punkz Community</Text>
              <BlinkingCursor color="terminal" weight="bold" />
            </RoadmapSection>
          </Box>
        </Box>
      </Stack>
    </Box>
  </Layout>
);

export default Roadmap;
