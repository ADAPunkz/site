import { Image, ImageExtendedProps } from 'grommet';
import styled, { keyframes } from 'styled-components';

const glitchAnimation1 = keyframes`
	0% {
		clip-path: polygon(0 0%, 100% 0%, 100% 5%, 0 5%);
	}
	10% {
		clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
	}
	20% {
		clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
	}
	30% {
		clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
	}
	40% {
		clip-path: polygon(0 35%, 100% 35%, 100% 35%, 0 35%);
	}
	50% {
		clip-path: polygon(0 45%, 100% 45%, 100% 46%, 0 46%);
	}
	60% {
		clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%);
	}
	70% {
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}
	80% {
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	90% {
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}
	100% {
		clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%);
	}
`;

const glitchAnimation2 = keyframes`
	0% {
		clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%);
	}
	15% {
		clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
	}
	25% {
		clip-path: polygon(0 8%, 100% 8%, 100% 20%, 0 20%);
	}
	30% {
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}
	45% {
		clip-path: polygon(0 45%, 100% 45%, 100% 45%, 0 45%);
	}
	50% {
		clip-path: polygon(0 50%, 100% 50%, 100% 57%, 0 57%);
	}
	65% {
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}
	75% {
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	80% {
		clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%);
	}
	95% {
		clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
	}
	100% {
		clip-path: polygon(0 11%, 100% 11%, 100% 15%, 0 15%);
	}
`;

const glitchAnimationFlash = keyframes`
	0% {
		opacity: .2;
	}
	30%, 100% {
		opacity: 0;
	}
`;

const GlitchLayerContainer = (props: ImageExtendedProps) => <div {...props}></div>;

const GlitchLayer = styled(GlitchLayerContainer)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(to top, ${(props) => props.color}75, ${(props) => props.color}25), url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: 0 0;
  &:nth-child(1) {
    transform: translateX(-5%);
    animation: ${glitchAnimation1} .25s infinite linear alternate;
  }
  &:nth-child(2) {
    transform: translateX(3%) translateY(3%);
    animation: ${glitchAnimation2} .6s -0.2s infinite linear alternate;
  }
  &:nth-child(3) {
    transform: translateX(5%);
    animation: ${glitchAnimationFlash} .5s infinite linear;
  }
`;

const GlitchLayers = styled.div`
  display: none;
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Glitch = styled.div`
  position: relative;
  overflow: hidden;
  & img {
    position: relative;
    z-index: 1;
    display: block;
  }
`;

const HoverGlitch = (props: ImageExtendedProps) => (
  <Glitch>
    <Image {...props} />
    <GlitchLayers className="glitchLayers">
      <GlitchLayer color="#ff0000" src={props.src} />
      <GlitchLayer color="#00ff00"  src={props.src} />
      <GlitchLayer color="#0000ff" src={props.src} />
    </GlitchLayers>
  </Glitch>
);

export default HoverGlitch;
