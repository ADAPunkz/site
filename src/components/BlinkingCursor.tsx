import { Text, TextExtendedProps } from 'grommet';
import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const BlinkingText = styled(Text)`
  animation: ${blinkAnimation} 1s infinite;
`;

const BlinkingCursor = (props: TextExtendedProps) => <BlinkingText {...props}>_</BlinkingText>;

export default BlinkingCursor;
