import { Box, Button, Spinner } from 'grommet';
import { Next, Previous } from 'grommet-icons';

import { useCursor, useInterval } from '../hooks';
import { NftType } from '../utils';
import NftDetails from './NftDetails';
import SiteHeading from './SiteHeading';

const NftDetailsTicker = ({ title, nfts }: { title: string; nfts: NftType[] }) => {
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
          <Box background="#333333" width="large" height="medium" align="center" justify="center">
            <Spinner color="text" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NftDetailsTicker;
