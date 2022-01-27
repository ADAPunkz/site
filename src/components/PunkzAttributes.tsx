import { Box } from 'grommet';
import { Accessibility, Announce, Cpu, Image, Inspect, Scorecard, Tag, User, View } from 'grommet-icons';
import { FC } from 'react';

import { PunkzNft, withOrdinalSuffix } from '../utils';
import NftAttribute from './NftAttribute';

const PunkzAttributes: FC<{ metadata: PunkzNft }> = ({ metadata }) => (
  <Box direction="column" gap="small">
    <NftAttribute name="Edition" icon={<Tag color="terminal" />} value={metadata.name} />
    <NftAttribute name="Rank" icon={<Scorecard color="terminal" />} value={withOrdinalSuffix(metadata.rank)} />
    <NftAttribute name="Background" icon={<Image color="terminal" />} value={`${metadata.background.value} (${metadata.background.percent}%)`} />
    <NftAttribute name="Type" icon={<Accessibility color="terminal" />} value={`${metadata.type.value} (${metadata.type.percent}%)`} />
    <NftAttribute name="Head" icon={<User color="terminal" />} value={`${metadata.head.value} (${metadata.head.percent}%)`} />
    <NftAttribute name="Eyes" icon={<View color="terminal" />} value={`${metadata.eyes.value} (${metadata.eyes.percent}%)`} />
    <NftAttribute name="Mouth" icon={<Announce color="terminal" />} value={`${metadata.mouth.value} (${metadata.mouth.percent}%)`} />
    <NftAttribute name="Implant Nodes" icon={<Cpu color="terminal" />} value={`${metadata.implant_nodes.value} (${metadata.implant_nodes.percent}%)`} />
    <NftAttribute name="Accessories" icon={<Inspect color="terminal" />} value={`${metadata.accessories.value} (${metadata.accessories.percent}%)`} />
  </Box>
);

export default PunkzAttributes;
