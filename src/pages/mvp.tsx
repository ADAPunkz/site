import { navigate } from 'gatsby';
import { Box, Button, Image, Text, TextInput } from 'grommet';
import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import CollageDetailsTicker from '../components/CollageDetailsTicker';
import Layout from '../components/Layout';
import RarityBox from '../components/RarityBox';
import SiteHeading from '../components/SiteHeading';
import { useSiteMetadata } from '../hooks';
import { CollageNft, CollageTraitsResponse, NftApiResponse } from '../utils';

//import Countdown from 'react-countdown';

const StyledBox = styled(Box)`
  & input {
    border-radius: 0px;
    color: black !important;
  }
`;

/* const CountdownRenderer = ({ days, hours, minutes, seconds }) => (
  <Text color="terminal" weight="bold" textAlign="center">
    {days}D, {hours}H, {minutes}M, {seconds}S UNTIL MINT
  </Text>
); */

const MVP = () => {
  const [edition, setEdition] = useState('');

  const siteMetadata = useSiteMetadata();

  const { data: mintData } = useQuery<NftApiResponse<CollageNft>>('/collage?page=1&pageSize=50&sort=mintedAt&direction=desc');
  const { data: traitData, isFetched: traitsAreFetched } = useQuery<CollageTraitsResponse>('/collage/traits');

  const onClick = () => {
    if (edition) {
      navigate(`/collage/${edition}`);
    }
  };

  return (
    <Layout>
      <Box direction="column" align="center" gap="medium">
        <SiteHeading level="3" margin="none">
          METAVERSE PASS
        </SiteHeading>
        <Box direction="column" align="center" width="large" margin="medium">
          <Box direction="row-responsive" background="white" gap="small" fill="horizontal" margin={{ bottom: 'medium' }}>
            <Box fill="horizontal">
              <Image fill src="/images/collage.gif" fit="contain" width={300} alt="ADAPunkz MVP" />
            </Box>
            <Box direction="column" gap="medium" pad="medium">
              <Box gap="small">
                <SiteHeading level="4" margin="none">
                  ADAPunkz MVP
                </SiteHeading>
                <Text size="small">Your passport to the ADAPunkz metaverse</Text>
                <Text size="small" weight="bold">
                  &bull; Limited Edition Framed Charles Hoskinson x ADAPunkz Collage NFT Set
                </Text>
                <Text size="small" weight="bold">
                  &bull; 5 Tiers of Rarity [as voted by the community]
                </Text>
                <Text size="small" weight="bold">
                  &bull; Exclusive Incentives Unlocked within the ADAPunkz Metaverse Estate for each tier
                </Text>
                <Text size="small" weight="bold">
                  &bull; 20 ADA per Mint, 5000 total supply
                </Text>
                <Text size="small" weight="bold">
                  &bull; ONLY open to ADAPunkz hodlers
                </Text>
                <Text size="small" weight="bold">
                  &bull; NOW SOLD OUT
                </Text>
              </Box>
            </Box>
          </Box>
          <CollageDetailsTicker title="Recently minted" nfts={mintData?.results || []} background="white" ignoreConstraint indentTitle fill="horizontal" />
          {traitsAreFetched && (
            <Box direction="column" fill="horizontal">
              <SiteHeading level="3">Rarity</SiteHeading>
              <Box direction="row-responsive" gap="medium" fill="horizontal">
                <RarityBox title="Tiers" attributes={traitData!.tiers} />
                <RarityBox title="Types" attributes={traitData!.types} />
              </Box>
            </Box>
          )}
          <Box direction="column" margin="small">
            <Text textAlign="center" margin={{ vertical: 'small' }}>
              Go direct to a specific MVP
            </Text>
            <StyledBox direction="row" gap="xsmall">
              <TextInput placeholder="Edition" value={edition} onChange={(e) => setEdition(e.target.value)} />
              <Button color="white" label="Go" onClick={onClick} />
            </StyledBox>
          </Box>
          <Box direction="column" pad="medium" fill="horizontal">
            <Text textAlign="center">MVP policy ID:</Text>
            <Text textAlign="center" wordBreak="break-all">
              {siteMetadata!.collagePolicyId}
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default MVP;
