import '@fontsource/titillium-web';

import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Button, Footer, Grommet, Header, Layer, Main, ResponsiveContext, Text } from 'grommet';
import { Filter, Menu } from 'grommet-icons';
import { useContext, useState } from 'react';
import styled from 'styled-components';

import { useLocation } from '@reach/router';

import { SiteQuery } from '../../graphql-types';
import { dispatch } from '../hooks';
import theme from '../theme';
import { EVENTS, cardano } from '../utils';
import ConnectButton from './ConnectButton';
import NavBar from './NavBar';
import SEO from './SEO';
import Sidebar from './Sidebar';
import SiteHeading from './SiteHeading';
import SocialsBar from './SocialsBar';

const StickyHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const InnerLayout = ({ children, margin = 'medium', hideFooter = false }) => {
  const { site } = useStaticQuery<SiteQuery>(graphql`
    query Site {
      site {
        siteMetadata {
          title
          policyId
          twitter
          discord
        }
      }
    }
  `);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const size = useContext(ResponsiveContext);
  const location = useLocation();

  return (
    <>
      <SEO />
      <Box direction="column" justify="between" fill="vertical" flex="grow" overflow="auto">
        <StickyHeader background="background" justify="start" pad="medium" gap="large" fill="horizontal">
          <Box direction="row" align="center" gap="small">
            <Link to="/">
              <Box direction="row" gap="small" align="center">
                <StaticImage
                  src="../images/icon.png"
                  alt={`${site.siteMetadata.title} Icon`}
                  placeholder="none"
                  layout="fixed"
                  width={48}
                  height={48}
                  loading="eager"
                />
              </Box>
            </Link>
            {size !== 'small' && <SiteHeading level="4">ADAPunkz</SiteHeading>}
          </Box>
          <Box direction="row" fill="horizontal" align="center" justify="between">
            {size !== 'small' && <NavBar />}
            {size === 'small' && location.pathname.includes('explore') && (
              <Button icon={<Filter size="24px" color="white" />} hoverIndicator onClick={() => dispatch({ type: EVENTS.OPEN_FILTER_PANEL })} />
            )}
            <Box direction="row" justify="end" fill="horizontal">
              {size !== 'small' && cardano.hasNami && <ConnectButton policyId={site.siteMetadata.policyId} />}
              <SocialsBar size="20px" />
              {size === 'small' && <Button icon={<Menu />} hoverIndicator onClick={() => setSidebarOpen(true)} />}
            </Box>
          </Box>
        </StickyHeader>
        <Main margin={margin} align="center" justify="center" fill={false}>
          {children}
        </Main>
        {!hideFooter && (
          <Footer direction="column" gap="small" align="center" justify="center" margin="medium">
            <SocialsBar />
            <Text textAlign="center" wordBreak="break-all">
              policyID: {site.siteMetadata.policyId}
            </Text>
            <Text size="small" textAlign="center">
              {site.siteMetadata.title} CNFTs
            </Text>
          </Footer>
        )}
      </Box>
      {sidebarOpen && (
        <Layer animate modal full="vertical" position="right" onClickOutside={() => setSidebarOpen(false)}>
          <Sidebar fill close={() => setSidebarOpen(false)}>
            <NavBar direction="column" />
          </Sidebar>
        </Layer>
      )}
    </>
  );
};

const Layout = ({ children, margin = 'medium', background = 'background', hideFooter = false }) => (
  <Grommet theme={theme} background={background} themeMode="light" full>
    <InnerLayout margin={margin} hideFooter={hideFooter}>
      {children}
    </InnerLayout>
  </Grommet>
);

export default Layout;
