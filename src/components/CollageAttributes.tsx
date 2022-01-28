import { Box } from 'grommet';
import { Accessibility, Lock, Scorecard, Tag } from 'grommet-icons';
import { FC } from 'react';

import { CollageNft } from '../utils';
import NftAttribute from './NftAttribute';

const CollageAttributes: FC<{ metadata: CollageNft }> = ({ metadata }) => (
  <Box direction="column" gap="small">
    <NftAttribute name="Edition" icon={<Tag color="terminal" />} value={metadata.name} />
    <NftAttribute name="Rank" icon={<Scorecard color="terminal" />} value={`Rank ${metadata.rank.toString()}`} />
    <NftAttribute name="Type" icon={<Accessibility color="terminal" />} value={`${metadata.type.value} (${metadata.type.percent}%)`} />
    <NftAttribute name="Tier" icon={<Lock color="terminal" />} value={`${metadata.tier.value} (${metadata.tier.percent}%)`} />
  </Box>
);

export default CollageAttributes;
