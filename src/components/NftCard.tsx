import { Box, Card, CardBody, CardFooter, Text, ThemeContext, ThemeType } from 'grommet';
import { useContext } from 'react';
import styled from 'styled-components';

import { withOrdinalSuffix } from '../utils';
import { NftProps } from '../utils/types';
import GlitchImage from './GlitchImage';
import { ADA } from './icons';

const TopBox = styled(Box)`
  position: absolute;
  z-index: 4;
  top: 1rem;
`;

const TopRightBox = styled(TopBox)`
  right: 1.2rem;
`;

const HoverCard = styled(Card)`
  position: relative;
  transition: transform 0.2s;
  &:hover .glitchLayers {
    display: block;
  }
`;

const NftCard = ({ metadata, width = 'small', height = 'small' }: NftProps) => {
  const theme = useContext<ThemeType>(ThemeContext);
  return (
    <Box width={width}>
      <HoverCard elevation="none" background="background-back" round={false}>
        <CardBody height={height} pad={{ horizontal: 'xsmall', top: 'xsmall' }}>
          <GlitchImage src={`/images/${metadata.edition}.png`} height={theme.global.size.small} alt={metadata.name} fit="cover" fill />
          {metadata.onSale && (
            <TopRightBox direction="row" align="center" gap="xsmall">
              <ADA color="white" size="18px" />
              <Text color="white">{metadata.salePrice}</Text>
            </TopRightBox>
          )}
        </CardBody>
        <CardFooter justify="between" pad="small" height="xxsmall">
          <Text weight="bold">{metadata.name}</Text>
          <Text color="background">{withOrdinalSuffix(metadata.rank)}</Text>
        </CardFooter>
      </HoverCard>
    </Box>
  );
};

export default NftCard;
