import { Anchor, Box, Button, ResponsiveContext, Text } from 'grommet';
import { DateTime } from 'luxon';
import { useContext } from 'react';

import { Nft, NftDetailsProps } from '../utils';
import BlinkingCursor from './BlinkingCursor';
import GlitchImage from './GlitchImage';
import HoverGlitchReveal from './HoverGlitchReveal';
import { ADA } from './icons';

const NftDetails = <T extends Nft>({ attributes: Attributes, ...props }: NftDetailsProps<T>) => {
  const size = useContext(ResponsiveContext);
  const constrainedSize = size === 'small' ? '' : 'medium';
  return (
    <Box direction="column">
      <HoverGlitchReveal direction="row-responsive" background="punkz-charcoal">
        <Box width={constrainedSize}>
          <GlitchImage fill src={`/images/${props.path}`} fit="contain" />
        </Box>
        <Box
          width={constrainedSize}
          height={constrainedSize}
          fill={size !== 'small' && props.ignoreConstraint ? 'vertical' : null}
          justify="between"
          direction="column"
          gap="small"
          pad="medium"
        >
          <Box>
            <Attributes metadata={props.metadata} />
            <BlinkingCursor color="terminal" />
          </Box>
          {props.metadata.mintedAt && (
            <Box align="end">
              <Text size="small">
                Minted{' '}
                {DateTime.fromISO(props.metadata.mintedAt, {
                  zone: 'UTC',
                }).toRelative()}
              </Text>
            </Box>
          )}
        </Box>
      </HoverGlitchReveal>
      {props.metadata.onSale && (
        <Box direction="row" pad="small" gap="small" fill="horizontal" justify="between" align="center" background="background-front">
          <Text size="small">
            {DateTime.fromISO(props.metadata.listedAt, {
              zone: 'UTC',
            }).toRelative()}{' '}
            on <Anchor href={`https://${props.metadata.marketName}`} label={props.metadata.marketName} target="_blank" rel="noreferer noopener" color="terminal" />
          </Text>
          <Button icon={<ADA size="20px" />} label={props.metadata.salePrice} href={props.metadata.marketUrl} primary color="white" target="_blank" rel="noreferrer" />
        </Box>
      )}
    </Box>
  );
};

export default NftDetails;
