import { Box, Button, ResponsiveContext, Text } from 'grommet';
import { DateTime } from 'luxon';
import { useContext } from 'react';

import { useCursor, useInterval } from '../hooks';
import { NftProps } from '../utils/types';
import NftCard from './NftCard';
import { ADA } from './icons';

const AttributeItem = ({ name, value }: { name: string; value: string }) => (
  <Box direction="row-responsive" gap="xsmall">
    <Text weight="bold">{name}</Text>
    <Text>{value}</Text>
  </Box>
);

const NftDetails = ({ metadata }: NftProps) => {
  const size = useContext(ResponsiveContext);
  const { index, skipForward } = useCursor(metadata?.offers?.length);

  useInterval(() => skipForward(), 3000);

  return (
    <Box direction="row-responsive" gap="small" pad="small" background="punkz-charcoal">
      <NftCard metadata={metadata} width="medium" height="medium" />
      <Box width={size === 'small' ? '' : '420px'} direction="column" margin="small" gap="medium" justify="between">
        <Box direction="column" gap="xsmall">
          <AttributeItem name="Edition" value={metadata.name} />
          <AttributeItem name="Score" value={metadata.score.toString()} />
          <AttributeItem name="Rank" value={metadata.rank.toString()} />
          <AttributeItem name="Background" value={`${metadata.background.value} (${metadata.background.percent}%)`} />
          <AttributeItem name="Type" value={`${metadata.type.value} (${metadata.type.percent}%)`} />
          <AttributeItem name="Head" value={`${metadata.head.value} (${metadata.head.percent}%)`} />
          <AttributeItem name="Eyes" value={`${metadata.eyes.value} (${metadata.eyes.percent}%)`} />
          <AttributeItem name="Mouth" value={`${metadata.mouth.value} (${metadata.mouth.percent}%)`} />
          <AttributeItem name="Implant Nodes" value={`${metadata.implant_nodes.value} (${metadata.implant_nodes.percent}%)`} />
          <AttributeItem name="Accessories" value={`${metadata.accessories.value} (${metadata.accessories.percent}%)`} />
        </Box>
        {metadata.offers.length > 0 && metadata.offers[index] && (
          <Box direction="row-responsive" gap="small" justify="between">
            <Text weight="bold">
              Offers ( {index + 1} / {metadata.offers.length} )
            </Text>
            <Box direction="row" align="center" gap="xsmall">
              <ADA size="18px" />
              <Text weight="bold">{metadata.offers[index].offer}</Text>
              <Text>{`expires ${DateTime.fromISO(metadata.offers[index].expires).toRelative()}`}</Text>
            </Box>
          </Box>
        )}
        {metadata.onSale && (
          <Box direction="row" gap="small" fill="horizontal" justify="between" align="center">
            <Text>Listed {DateTime.fromISO(metadata.listedAt, { zone: 'UTC' }).toRelative()}</Text>
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
