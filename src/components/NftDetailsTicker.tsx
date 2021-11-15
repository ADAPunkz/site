import { Box, Button, ResponsiveContext, Spinner, ThemeContext, ThemeType } from 'grommet';
import { Next, Previous } from 'grommet-icons';
import { useContext } from 'react';

import { useCursor, useInterval } from '../hooks';
import { NftType } from '../utils';
import NftDetails from './NftDetails';
import SiteHeading from './SiteHeading';

const NftDetailsTicker = ({ title, nfts }: { title: string; nfts: NftType[] }) => {
  const theme: ThemeType = useContext(ThemeContext);
  const size = useContext(ResponsiveContext);

  const { index, skipForward, skipBackward } = useCursor(nfts.length);
  const stopInterval = useInterval(() => nfts.length && skipForward(), 10000);

  return (
    <Box direction="column">
      <Box direction="row" justify="between" align="center">
        <SiteHeading level="3">{title}</SiteHeading>
        {nfts.length > 1 && (
          <Box direction="row">
            <Button
              icon={<Previous size="24px" />}
              hoverIndicator
              onClick={() => {
                stopInterval();
                skipBackward();
              }}
            />
            <Button
              icon={<Next size="24px" />}
              hoverIndicator
              onClick={() => {
                stopInterval();
                skipForward();
              }}
            />
          </Box>
        )}
      </Box>
      <Box direction="row-responsive" align="center" justify="center">
        {nfts.length ? (
          <NftDetails metadata={nfts[index]} />
        ) : (
          <Box direction="row-responsive" gap="small" pad="small" background="punkz-charcoal">
            <Box direction="column" margin="small">
              <Box width={theme.global.size.medium} height={theme.global.size.medium} />
              <Box height="xxsmall" />
            </Box>
            <Box width={size === 'small' ? '' : '420px'} direction="column" margin="small" gap="medium" justify="between">
              <Box direction="row" fill="horizontal" justify="end">
                <Spinner color="white" />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NftDetailsTicker;
