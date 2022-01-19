import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Button, DropButton, Footer, Grommet, Header, Layer, Main, ResponsiveContext, Text } from 'grommet';
import { Filter, Menu, Package } from 'grommet-icons';
import { useContext, useState } from 'react';
import styled from 'styled-components';

import { useLocation } from '@reach/router';

import { dispatch, useSiteMetadata } from '../hooks';
import theme from '../theme';
import { EVENTS } from '../utils';
import ChestOverview from './ChestOverview';
import ConnectButton from './ConnectButton';
import NavBar from './NavBar';
import SEO from './SEO';
import Sidebar from './Sidebar';
import SiteHeading from './SiteHeading';
import SocialsBar from './SocialsBar';

const StickyHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 5;
  /* background-image: linear-gradient(#0185d7, rgba(0, 0, 0, 0)); */
  background-image: linear-gradient(#1b4c8c, rgba(0, 0, 0, 0));
`;

const InnerLayout = ({ children, margin = 'medium', hideFooter = false }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const siteMetadata = useSiteMetadata();
  const size = useContext(ResponsiveContext);
  const location = useLocation();

  const dropAlign: any = {
    top: 'bottom',
  };

  if (size === 'small') {
    dropAlign.right = 'right';
  }

  return (
    <>
      <SEO />
      <Box direction="column" justify="between" fill="vertical" flex="grow" overflow="auto">
        <StickyHeader justify="start" pad="medium" gap="large" fill="horizontal">
          <Box direction="row" align="center" gap="small">
            <Link to="/">
              <Box direction="row" gap="small" align="center">
                <StaticImage src="../images/icon.png" alt={`${siteMetadata.title} Icon`} placeholder="none" layout="fixed" width={48} height={48} loading="eager" />
              </Box>
            </Link>
            {size !== 'small' && <SiteHeading level="4">ADAPunkz</SiteHeading>}
          </Box>
          <Box direction="row" fill="horizontal" align="center" justify="between">
            {size !== 'small' && <NavBar />}
            <Box direction="row" justify="end" fill="horizontal">
              {location.pathname.includes('explore') && (
                <Button
                  label={size === 'small' ? '' : 'Filter'}
                  icon={<Filter size="24px" color="white" />}
                  hoverIndicator
                  plain
                  reverse
                  margin={{ horizontal: 'small' }}
                  style={{ padding: '12px' }}
                  onClick={() => dispatch({ type: EVENTS.OPEN_FILTER_PANEL })}
                />
              )}
              <DropButton icon={<Package />} dropContent={<ChestOverview />} dropAlign={dropAlign} />
              {size !== 'small' && (
                <>
                  <ConnectButton policyId={siteMetadata.policyId} />
                  <SocialsBar size="20px" />
                </>
              )}
              {size === 'small' && <Button icon={<Menu />} hoverIndicator onClick={() => setSidebarOpen(true)} />}
            </Box>
          </Box>
        </StickyHeader>
        <Main margin={margin} align="center" fill={false}>
          {children}
        </Main>
        {!hideFooter && (
          <Footer direction="column" gap="small" align="center" justify="center" margin="medium">
            <SocialsBar />
            <Text textAlign="center" wordBreak="break-all">
              policyID: {siteMetadata.policyId}
            </Text>
            <Text size="small" textAlign="center">
              {siteMetadata.title} CNFTs
            </Text>
          </Footer>
        )}
      </Box>
      {sidebarOpen && (
        <Layer animate modal full="vertical" position="right" onClickOutside={() => setSidebarOpen(false)}>
          <Sidebar fill close={() => setSidebarOpen(false)} justify="between">
            <NavBar direction="column" />
            <Box pad="medium">
              <SocialsBar size="20px" />
            </Box>
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
