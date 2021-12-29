import { Link } from 'gatsby';
import styled from 'styled-components';

const HoverLink = styled(Link)`
  &:hover {
    text-decoration: underline !important;
  }
`;

const StyledLink = ({ children, to }: { children: any; to: string }) => (
  <HoverLink
    to={to}
    style={{
      color: '#EEEEEE',
      textDecoration: 'none',
      fontWeight: 600,
      fontFamily: 'VCR',
    }}
    activeStyle={{
      textDecoration: 'underline',
    }}
  >
    {children}
  </HoverLink>
);

export default StyledLink;
