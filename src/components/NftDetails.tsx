import { Anchor, Box, Button, ResponsiveContext, Text, Tip } from 'grommet';
import { Accessibility, Announce, Cpu, Image, Inspect, Scorecard, Tag, User, View } from 'grommet-icons';
import { DateTime } from 'luxon';
import { useContext } from 'react';
import styled from 'styled-components';

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
      {metadata.onSale && (
        <Box direction="row" pad="small" gap="small" fill="horizontal" justify="between" align="center" background="background-front">
          <Text size="small">
            {DateTime.fromISO(metadata.listedAt, {
              zone: 'UTC',
            }).toRelative()}{' '}
            on <Anchor href={`https://${metadata.marketName}`} label={metadata.marketName} target="_blank" rel="noreferer noopener" color="terminal" />
          </Text>
          <Button icon={<ADA size="20px" />} label={metadata.salePrice} href={metadata.marketUrl} primary color="terminal" target="_blank" rel="noreferrer" />
        </Box>
      )}
    </Box>
  );
};

export default NftDetails;
