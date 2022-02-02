import { Box, Button } from 'grommet';
import { Next, Previous } from 'grommet-icons';

import { useCursor, useInterval } from '../hooks';
import { Nft, NftDetailsTickerProps } from '../utils';
import NftDetails from './NftDetails';
import NftDetailsSkeleton from './NftDetailsSkeleton';
import SiteHeading from './SiteHeading';

const NftDetailsTicker = <T extends Nft>(props: NftDetailsTickerProps<T>) => {
  const { index, skipForward, skipBackward } = useCursor(props.nfts.length);
  const stopInterval = useInterval(() => props.nfts.length && skipForward(), 10000);
  return (
    <Box direction="column" fill={props.fill}>
      <Box direction="row" justify="between" align="center" background={props.background} pad={props.indentTitle ? { horizontal: 'medium' } : {}}>
        <SiteHeading level="3">{props.title}</SiteHeading>
        {props.nfts.length > 1 && (
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
      {props.nfts.length ? (
        <NftDetails metadata={props.nfts[index]} attributes={props.attributes} path={props.pathSelector(props.nfts[index])} ignoreConstraint={props.ignoreConstraint} />
      ) : (
        <NftDetailsSkeleton />
      )}
    </Box>
  );
};

export default NftDetailsTicker;
