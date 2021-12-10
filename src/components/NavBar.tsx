import { Nav } from 'grommet';
import { DirectionType } from 'grommet/utils';

import StyledLink from './StyledLink';

const NavBar = ({ direction = 'row' }: { direction?: DirectionType }) => (
  <Nav direction={direction} align="center">
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/explore">Explore</StyledLink>
    <StyledLink to="/rarity">Rarity</StyledLink>
    <StyledLink to="/roadmap">Roadmap</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/faq">FAQ</StyledLink>
  </Nav>
);

export default NavBar;
