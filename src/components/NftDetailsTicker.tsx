import { Box, Button } from 'grommet';
import { Next, Previous } from 'grommet-icons';
import { DirectionType, FillType } from 'grommet/utils';
import { FC } from 'react';

import { useCursor, useInterval } from '../hooks';
import { Nft } from '../utils';
import NftDetails from './NftDetails';
import NftDetailsSkeleton from './NftDetailsSkeleton';
import SiteHeading from './SiteHeading';

const NftDetailsTicker: FC<{
  title: string;
  nfts: Nft[];
  ignoreConstraint?: boolean;
  attributes: FC<any>;
  background?: string;
  direction?: DirectionType;
  fill?: FillType;
  indentTitle?: boolean;
  pathSelector: (nft: Nft) => string;
}> = ({ title, nfts, attributes, background, ignoreConstraint, direction, fill, indentTitle, pathSelector }) => {
  const { index, skipForward, skipBackward } = useCursor(nfts.length);
  const stopInterval = useInterval(() => nfts.length && skipForward(), 10000);
  return (
    <Box direction="column" fill={fill}>
      <Box direction="row" justify="between" align="center" background={background} pad={indentTitle ? { horizontal: 'medium' } : {}}>
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
      {nfts.length ? (
        <NftDetails metadata={nfts[index]} direction={direction} attributes={attributes} path={pathSelector(nfts[index])} ignoreConstraint={ignoreConstraint} />
      ) : (
        <NftDetailsSkeleton />
      )}
    </Box>
  );
};

export default NftDetailsTicker;
