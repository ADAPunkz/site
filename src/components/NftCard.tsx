import { Box, Card, CardBody, CardFooter, Image, Text } from 'grommet';
import { Tools } from 'grommet-icons';
import Tilt from 'react-parallax-tilt';
import styled from 'styled-components';

import { withOrdinalSuffix } from '../utils';
import { NftProps } from '../utils/types';
import { ADA } from './icons';

const Preserve3DTilt = styled(Tilt)`
  transform-style: preserve-3d;
`;

const RaisedBox = styled(Box)`
  position: absolute;
  transform: translateZ(32px);
`;

const TopRaisedBox = styled(RaisedBox)`
  top: 1rem;
`;

const TopRightRaisedBox = styled(TopRaisedBox)`
  right: 1.2rem;
`;

const TopLeftRaisedBox = styled(TopRaisedBox)`
  left: 1.2rem;
`;

const NftCard = ({ metadata, width = 'small', height = 'small' }: NftProps) => (
  <Box margin="small">
    <Preserve3DTilt tiltMaxAngleX={2} tiltMaxAngleY={2} perspective={750} glareEnable={true} glareMaxOpacity={0.2}>
      <Card background="white" round={false} elevation="small">
        <CardBody width={width === 'medium' ? width : ''} height={height} background="brand">
          <Image src={`/images/${metadata.edition}.png`} alt={metadata.name} fill />
        </CardBody>
        <CardFooter justify="between" pad="small" height="xxsmall">
          <Text weight="bold">{metadata.name}</Text>
          <Text color="highlight">{withOrdinalSuffix(metadata.rank)}</Text>
        </CardFooter>
      </Card>
      {metadata.isAuction && (
        <TopLeftRaisedBox direction="row" align="center" gap="xsmall">
          <Tools color="white" size="18px" />
        </TopLeftRaisedBox>
      )}
      {metadata.onSale && (
        <TopRightRaisedBox direction="row" align="center" gap="xsmall">
          <ADA color="white" size="18px" />
          <Text color="white">{metadata.salePrice}</Text>
        </TopRightRaisedBox>
      )}
    </Preserve3DTilt>
  </Box>
);

export default NftCard;
