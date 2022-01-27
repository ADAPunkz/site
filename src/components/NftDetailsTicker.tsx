import { Box, Button } from 'grommet';
import { Next, Previous } from 'grommet-icons';
import { FC } from 'react';

import { useCursor, useInterval } from '../hooks';
import { Nft } from '../utils';
import NftDetails from './NftDetails';
import NftDetailsSkeleton from './NftDetailsSkeleton';
import SiteHeading from './SiteHeading';

const NftDetailsTicker: FC<{ title: string; nfts: Nft[]; attributes: FC<any>; pathSelector: (nft: Nft) => string }> = ({ title, nfts, attributes, pathSelector }) => {
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
      {nfts.length ? <NftDetails metadata={nfts[index]} attributes={attributes} path={pathSelector(nfts[index])} /> : <NftDetailsSkeleton />}
    </Box>
  );
};

export default NftDetailsTicker;
