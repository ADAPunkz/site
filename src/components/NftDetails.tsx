import { Anchor, Box, Button, ResponsiveContext, Text } from 'grommet';
import { DateTime } from 'luxon';
import { useContext } from 'react';

import { Nft, NftProps } from '../utils';
import BlinkingCursor from './BlinkingCursor';
import GlitchImage from './GlitchImage';
import HoverGlitchReveal from './HoverGlitchReveal';
import { ADA } from './icons';

const NftDetails = ({ metadata, path, attributes: Attributes }: NftProps<Nft>) => {
  const size = useContext(ResponsiveContext);
  const constrainedSize = size === 'small' ? '' : 'medium';

  return (
    <Box direction="column">
      <HoverGlitchReveal direction="row-responsive" background="punkz-charcoal">
        <Box width={constrainedSize}>
          <GlitchImage fill src={`/images/${path}/${metadata.edition}.png`} fit="contain" />
        </Box>
        <Box width={constrainedSize} height={constrainedSize} direction="column" gap="small" pad="medium">
          <Attributes metadata={metadata} />
          <BlinkingCursor color="terminal" />
        </Box>
      </HoverGlitchReveal>
      {metadata.onSale && (
        <Box direction="row" pad="small" gap="small" fill="horizontal" justify="between" align="center" background="background-front">
          <Text size="small">
            {DateTime.fromISO(metadata.listedAt, {
              zone: 'UTC',
            }).toRelative()}{' '}
            on <Anchor href={`https://${metadata.marketName}`} label={metadata.marketName} target="_blank" rel="noreferer noopener" color="terminal" />
          </Text>
          <Button icon={<ADA size="20px" />} label={metadata.salePrice} href={metadata.marketUrl} primary color="white" target="_blank" rel="noreferrer" />
        </Box>
      )}
    </Box>
  );
};

export default NftDetails;
