import { Box, Text } from 'grommet';
import styled from 'styled-components';

import HoverGlitch from './HoverGlitch';

const ShowGlitchBox = styled(Box)`
  &:hover .glitchLayers {
    display: block;
  }
`;

const ProfileCard = ({ edition, description }: { edition: number; description: string }) => (
  <ShowGlitchBox direction="row-responsive" gap="small" elevation="small" background="punkz-charcoal">
    <Box width="small" height="small">
      <HoverGlitch src={`/images/${edition}.png`} fit="cover" fill />
    </Box>
    <Box direction="column" width="small" pad="small" gap="small">
      <Text color="terminal" weight="bold">
        ADAPunk#{edition}
      </Text>
      <Text size="small">{description}</Text>
    </Box>
  </ShowGlitchBox>
);

export default ProfileCard;
