import { Box, Diagram, Stack, Text } from 'grommet';

import BlinkingCursor from '../components/BlinkingCursor';
import Layout from '../components/Layout';
import SiteHeading from '../components/SiteHeading';

const Roadmap = () => {
  return (
    <Layout>
      <Box direction="column" align="center" gap="medium">
        <Box width="medium" margin={{ bottom: 'medium' }} pad="small" align="center" justify="center">
          <SiteHeading level="2" margin="none">
            ROADMAP
          </SiteHeading>
        </Box>
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
            ]}
          />
          <Box>
            <Box direction="row-responsive">
              <Box id="1" direction="column" margin="medium" pad="medium" background="punkz-charcoal">
                <Text color="terminal" weight="bold">
                  Q1 2022
                </Text>
                <Text>• Charles Hoskinpunkz Collage mint</Text>
                <Text>• ADAPunkz stake pool goes live</Text>
              </Box>
              <Box id="2" direction="column" margin="medium" pad="medium" background="punkz-charcoal">
                <Text color="terminal" weight="bold">
                  Q2 2022
                </Text>
                <Text>• Community chest voting mechanics beta</Text>
              </Box>
            </Box>
            <Box direction="row-responsive">
              <Box id="3" direction="column" margin="medium" pad="medium" background="punkz-charcoal">
                <Text color="terminal" weight="bold">
                  Q3 2022
                </Text>
                <Text>• First community chest allocation proposals</Text>
              </Box>
              <Box id="4" direction="column" margin="medium" pad="medium" background="punkz-charcoal">
                <Text color="terminal" weight="bold">
                  Q4 2022
                </Text>
                <BlinkingCursor color="terminal" weight="bold" />
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Roadmap;
