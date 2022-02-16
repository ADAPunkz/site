import { StaticImage } from 'gatsby-plugin-image';
import { Box, BoxProps, BoxTypes, Button, DropButton, Footer, Grommet, Header, Layer, Main, ResponsiveContext, Text } from 'grommet';
import { Filter, Menu, Package } from 'grommet-icons';
import { useContext, useState } from 'react';
import { FC } from 'react';
import styled from 'styled-components';

import { useLocation } from '@reach/router';

import { dispatch, useSiteMetadata } from '../hooks';
import theme from '../theme';
import { EVENTS, isSSR } from '../utils';
import ChestOverview from './ChestOverview';
import ConnectButton from './ConnectButton';
import NavBar from './NavBar';
import SEO from './SEO';
import Sidebar from './Sidebar';
import SiteHeading from './SiteHeading';
import SocialsBar from './SocialsBar';
import StyledLink from './StyledLink';

type LayoutProps = BoxProps & { hideFooter?: boolean };

const HeaderWrapper: FC<BoxTypes & { fadeColor: string }> = (props) => <Header {...props} />;

const StickyHeader = styled(HeaderWrapper)`
  position: sticky;
  top: 0;
  z-index: 5;
  background-image: linear-gradient(${(props) => props.fadeColor}, rgba(0, 0, 0, 0));
`;

const InnerLayout: FC<LayoutProps> = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const siteMetadata = useSiteMetadata();
  const size = useContext(ResponsiveContext);
  const location = useLocation();

  const dropAlign: any = {
    top: 'bottom',
  };

  const renderLarge = !isSSR && size !== 'small';

  if (!renderLarge) {
    dropAlign.right = 'right';
  }

  return (
    <>
      <SEO />
      <Box direction="column" justify="between" fill="vertical" flex="grow" overflow="auto">
        <StickyHeader justify="start" pad="small" gap="large" fill="horizontal" fadeColor={(theme.global.colors as any).background}>
          <Box direction="row" align="center" gap="small">
            <StyledLink to="/">
              <Box direction="row" gap="small" align="center">
                <StaticImage src="../images/icon.png" alt={`${siteMetadata.title} Icon`} placeholder="none" layout="fixed" width={48} height={48} loading="eager" />
                {renderLarge && <SiteHeading level="4">ADAPunkz</SiteHeading>}
              </Box>
            </StyledLink>
          </Box>
          <Box direction="row" fill="horizontal" align="center" justify="between">
            {renderLarge && <NavBar />}
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
              {renderLarge ? (
                <>
                  <ConnectButton policyId={siteMetadata.policyId} />
                  <SocialsBar size="20px" />
                </>
              ) : (
                <Button icon={<Menu />} hoverIndicator onClick={() => setSidebarOpen(true)} />
              )}
            </Box>
          </Box>
        </StickyHeader>
        <Main margin={props.margin} align="center" justify={props.justify} fill={false}>
          {props.children}
        </Main>
        {!props.hideFooter && (
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

const Layout: FC<LayoutProps> = (props) => (
  <Grommet theme={theme} background={props.background || 'background'} themeMode="light" full>
    <InnerLayout margin={props.margin || 'medium'} hideFooter={props.hideFooter} justify={props.justify}>
      {props.children}
    </InnerLayout>
  </Grommet>
);

export default Layout;
