import { Box, Button, ResponsiveContext, Text, Tip } from 'grommet';
import { Accessibility, Announce, Cpu, Image, Inspect, Scorecard, Tag, User, View } from 'grommet-icons';
import { DateTime } from 'luxon';
import { useContext } from 'react';
import styled from 'styled-components';

import { useCursor, useInterval } from '../hooks';
import { withOrdinalSuffix } from '../utils';
import { NftProps } from '../utils/types';
import BlinkingCursor from './BlinkingCursor';
import GlitchImage from './GlitchImage';
import { ADA } from './icons';

const HoverGlitch = styled(Box)`
  &:hover .glitchLayers {
    display: block;
  }
`;

const AttributeItem = ({ name, icon, value }: { name: string; icon: JSX.Element; value: string }) => (
  <Box direction="row" gap="small">
    <Tip content={name}>{icon}</Tip>
    <Text size="small">{value.replace('background', '')}</Text>
  </Box>
);

const NftDetails = ({ metadata }: NftProps) => {
  const size = useContext(ResponsiveContext);
  const { index, skipForward } = useCursor(metadata?.offers?.length);

  useInterval(() => skipForward(), 3000);

  const hasOffers = metadata.offers.length > 0 && metadata.offers[index];
  const detailSize = size === 'small' ? '' : 'medium';

  return (
    <Box direction="column">
      <HoverGlitch direction="row-responsive" background="punkz-charcoal">
        <Box width="medium">
          <GlitchImage fill src={`/images/${metadata.edition}.png`} fit="contain" />
        </Box>
        <Box width={detailSize} height={detailSize} direction="column" gap="small" pad="medium">
          <AttributeItem name="Edition" icon={<Tag color="terminal" />} value={metadata.name} />
          <AttributeItem name="Rank" icon={<Scorecard color="terminal" />} value={withOrdinalSuffix(metadata.rank)} />
          <AttributeItem name="Background" icon={<Image color="terminal" />} value={`${metadata.background.value} (${metadata.background.percent}%)`} />
          <AttributeItem name="Type" icon={<Accessibility color="terminal" />} value={`${metadata.type.value} (${metadata.type.percent}%)`} />
          <AttributeItem name="Head" icon={<User color="terminal" />} value={`${metadata.head.value} (${metadata.head.percent}%)`} />
          <AttributeItem name="Eyes" icon={<View color="terminal" />} value={`${metadata.eyes.value} (${metadata.eyes.percent}%)`} />
          <AttributeItem name="Mouth" icon={<Announce color="terminal" />} value={`${metadata.mouth.value} (${metadata.mouth.percent}%)`} />
          <AttributeItem name="Implant Nodes" icon={<Cpu color="terminal" />} value={`${metadata.implant_nodes.value} (${metadata.implant_nodes.percent}%)`} />
          <AttributeItem name="Accessories" icon={<Inspect color="terminal" />} value={`${metadata.accessories.value} (${metadata.accessories.percent}%)`} />
          <BlinkingCursor color="terminal" />
        </Box>
      </HoverGlitch>
      {(hasOffers || metadata.onSale) && (
        <Box direction="row-responsive" pad="small" gap="medium" background="background-front">
          {hasOffers && (
            <Box direction="row-responsive" gap="medium" fill="horizontal" align="center" justify="between">
              <Text size="small" weight="bold">
                Offer {index + 1} / {metadata.offers.length}
              </Text>
              <Box direction="row" align="center" gap="xsmall">
                <ADA size="18px" />
                <Text size="small" weight="bold">
                  {metadata.offers[index].value}
                </Text>
                <Text size="small">{`expires ${DateTime.fromISO(metadata.offers[index].expires).toRelative()}`}</Text>
              </Box>
            </Box>
          )}
          {metadata.onSale && (
            <Box direction="row" gap="small" fill="horizontal" justify="between" align="center">
              <Text size="small">
                Listed{' '}
                {DateTime.fromISO(metadata.listedAt, {
                  zone: 'UTC',
                }).toRelative()}
              </Text>
              <Button icon={<ADA size="20px" />} label={metadata.salePrice} href={metadata.marketUrl} primary color="terminal" target="_blank" rel="noreferrer" />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default NftDetails;
