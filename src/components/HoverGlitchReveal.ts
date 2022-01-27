import { Box } from 'grommet';
import styled from 'styled-components';

const HoverGlitchReveal = styled(Box)`
  &:hover .glitchLayers {
    display: block;
  }
`;

export default HoverGlitchReveal;
