import { Box, Text } from 'grommet';

import GlitchImage from './GlitchImage';
import HoverGlitchReveal from './HoverGlitchReveal';

const ProfileCard = ({ edition, description }: { edition: number; description: string }) => (
  <HoverGlitchReveal direction="row-responsive" gap="small" background="punkz-charcoal">
    <Box width="small" height="small">
      <GlitchImage src={`/images/punkz/${edition}.png`} fit="cover" fill />
    </Box>
    <Box direction="column" width="small" pad="small" gap="small">
      <Text color="terminal" weight="bold">
        ADAPunk#{edition}
      </Text>
      <Text size="small">{description}</Text>
    </Box>
  </HoverGlitchReveal>
);

export default ProfileCard;
