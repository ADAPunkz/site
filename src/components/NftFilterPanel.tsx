import { navigate } from 'gatsby-link';
import { Box, Button, Form, Select, Text, TextInput } from 'grommet';
import { useState } from 'react';
import styled from 'styled-components';

import { attributes } from '../data';
import { NftFilterForm } from '../utils';

const StyledBox = styled(Box)`
  & button, & input {
    border-radius: 0px;
  }
`;

const NftFilterPanel = ({ payload, onChange, background = 'brand' }: { payload: NftFilterForm; onChange: (value: NftFilterForm) => void; background?: string }) => {
  const [edition, setEdition] = useState('');

  const onClick = () => {
    if (!edition) {
      return;
    }

    navigate(`/punk/${edition}`);
  };

  return (
    <StyledBox width="450px" background={background} pad="medium" align="center" overflow="auto">
      <Form value={payload} onChange={onChange}>
        <Box direction="column" gap="small">
          <Text margin={{ vertical: 'small' }}>Go direct to a specific Punk:</Text>
          <Box direction="row">
            <TextInput placeholder="Edition" value={edition} onChange={(e) => setEdition(e.target.value)} />
            <Button primary label="Go" onClick={onClick} />
          </Box>
          <Text margin={{ vertical: 'small' }}>Or filter the grid below:</Text>
          <Box direction="row" gap="xsmall">
            <TextInput placeholder="Min Rank" name="minRank" value={payload?.minRank} />
            <TextInput placeholder="Max Rank" name="maxRank" value={payload?.maxRank} />
          </Box>
          <Box direction="row" gap="xsmall">
            <TextInput placeholder="Min Price" name="minPrice" value={payload?.minPrice} />
            <TextInput placeholder="Max Price" name="maxPrice" value={payload?.maxPrice} />
          </Box>
          <Box direction="row" gap="xsmall">
            <Select placeholder="On Sale" name="onSale" value={payload?.onSale} options={['true', 'false']} clear />
            <Select placeholder="Auction" name="isAuction" value={payload?.isAuction} options={['true', 'false']} clear />
          </Box>
          <Box direction="row" gap="xsmall">
            <Select placeholder="Sort" name="sort" value={payload?.sort} options={['edition', 'rank', 'price', 'listedAt', 'offerCount']} clear />
            <Select placeholder="Direction" name="direction" value={payload?.direction} options={['asc', 'desc']} clear />
          </Box>
          <Select placeholder="Background" name="background" value={payload?.background} options={attributes.background} clear />
          <Select placeholder="Type" name="type" value={payload?.type} options={attributes.type} clear />
          <Select placeholder="Eyes" name="eyes" value={payload?.eyes} options={attributes.eyes} clear />
          <Select placeholder="Mouth" name="mouth" value={payload?.mouth} options={attributes.mouth} clear />
          <Select placeholder="Implant Nodes" name="implant_nodes" value={payload?.implant_nodes} options={attributes.implant_nodes} clear />
          <Select placeholder="Head" name="head" value={payload?.head} options={attributes.head} clear />
          <Select placeholder="Accessories" name="accessories" value={payload?.accessories} options={attributes.accessories} clear />
        </Box>
      </Form>
    </StyledBox>
  );
};

export default NftFilterPanel;
