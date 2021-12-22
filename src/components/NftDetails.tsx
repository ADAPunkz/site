import { Box, Button, ResponsiveContext, Text, Tip } from 'grommet';
import { Accessibility, Announce, Cpu, Image, Inspect, LineChart, Scorecard, Tag, User, View } from 'grommet-icons';
import { DateTime } from 'luxon';
import { useContext } from 'react';

import { useCursor, useInterval } from '../hooks';
import { NftProps } from '../utils/types';
import NftCard from './NftCard';
import { ADA } from './icons';

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

  return (
    <Box direction="row-responsive" gap="small">
      <NftCard metadata={metadata} width="medium" height="medium" />
      <Box width={size !== 'small' ? 'medium' : ''} elevation="small" direction="column" pad="medium" gap="medium" justify="between" background="punkz-charcoal">
        <Box direction="column" gap="small">
          <AttributeItem name="Edition" icon={<Tag color="terminal" />} value={metadata.name} />
          <AttributeItem name="Score" icon={<LineChart color="terminal" />} value={metadata.score.toString()} />
          <AttributeItem name="Rank" icon={<Scorecard color="terminal" />} value={metadata.rank.toString()} />
          <AttributeItem name="Background" icon={<Image color="terminal" />} value={`${metadata.background.value} (${metadata.background.percent}%)`} />
          <AttributeItem name="Type" icon={<Accessibility color="terminal" />} value={`${metadata.type.value} (${metadata.type.percent}%)`} />
          <AttributeItem name="Head" icon={<User color="terminal" />} value={`${metadata.head.value} (${metadata.head.percent}%)`} />
          <AttributeItem name="Eyes" icon={<View color="terminal" />} value={`${metadata.eyes.value} (${metadata.eyes.percent}%)`} />
          <AttributeItem name="Mouth" icon={<Announce color="terminal" />} value={`${metadata.mouth.value} (${metadata.mouth.percent}%)`} />
          <AttributeItem name="Implant Nodes" icon={<Cpu color="terminal" />} value={`${metadata.implant_nodes.value} (${metadata.implant_nodes.percent}%)`} />
          <AttributeItem name="Accessories" icon={<Inspect color="terminal" />} value={`${metadata.accessories.value} (${metadata.accessories.percent}%)`} />
        </Box>
        {metadata.offers.length > 0 && metadata.offers[index] && (
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
            <Button
              icon={<ADA size="20px" />}
              label={metadata.salePrice}
              href={`https://cnft.io/token/${metadata.marketId}`}
              primary
              color="white"
              target="_blank"
              rel="noreferrer"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NftDetails;
