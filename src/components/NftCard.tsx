import { Box, Card, CardBody, CardFooter, ResponsiveContext, Text } from 'grommet';
import { Tools } from 'grommet-icons';
import { useContext } from 'react';
import styled from 'styled-components';

import { withOrdinalSuffix } from '../utils';
import { NftProps } from '../utils/types';
import HoverGlitch from './HoverGlitch';
import { ADA } from './icons';

const TopBox = styled(Box)`
  position: absolute;
  z-index: 4;
  top: 1rem;
`;

const TopRightBox = styled(TopBox)`
  right: 1.2rem;
`;

const TopLeftBox = styled(TopBox)`
  left: 1.2rem;
`;

const HoverCard = styled(Card)`
  position: relative;
  transition: transform .2s;
  &:hover .glitchLayers {
    display: block;
  }
`;

const NftCard = ({ metadata, width = 'small', height = 'small' }: NftProps) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box width={size === 'small' ? '' : width}>
      <HoverCard elevation="small" background="background-back" round={false}>
        <CardBody height={size === 'small' ? '' : height} pad={{ horizontal: 'xsmall', top: 'xsmall' }}>
          <HoverGlitch src={`/images/${metadata.edition}.png`} alt={metadata.name} fit="cover" fill />
          {metadata.isAuction && (
            <TopLeftBox direction="row" align="center" gap="xsmall">
              <Tools color="white" size="18px" />
            </TopLeftBox>
          )}
          {metadata.onSale && (
            <TopRightBox direction="row" align="center" gap="xsmall">
              <ADA color="white" size="18px" />
              <Text color="white">{metadata.salePrice}</Text>
            </TopRightBox>
          )}
        </CardBody>
        <CardFooter justify="between" pad="small" height="xxsmall">
          <Text weight="bold">{metadata.name}</Text>
          <Text color="highlight">{withOrdinalSuffix(metadata.rank)}</Text>
        </CardFooter>
      </HoverCard>
    </Box>
  );
};

export default NftCard;
