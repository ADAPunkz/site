import { Box, Image, Text } from 'grommet';
import Countdown from 'react-countdown';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import CollageDetailsTicker from '../components/CollageDetailsTicker';
import Layout from '../components/Layout';
import SiteHeading from '../components/SiteHeading';
import { useSiteMetadata } from '../hooks';
import { CollageNft, MintingAddress, NftApiResponse } from '../utils';

const StyledBox = styled(Box)`
  & input {
    border-radius: 0px;
    color: black !important;
  }
`;

const CountdownRenderer = ({ days, hours, minutes, seconds }) => (
  <Text color="terminal" weight="bold" textAlign="center">
    {days}D, {hours}H, {minutes}M, {seconds}S UNTIL MINT
  </Text>
);

const MVP = () => {
  const siteMetadata = useSiteMetadata();

  const { data } = useQuery<NftApiResponse<CollageNft>>('/collage?page=1&pageSize=50&sort=mintedAt&direction=desc');
  const { data: addressData } = useQuery<MintingAddress>('/collage/mint/address');

  return (
    <Layout>
      <Box direction="column" align="center" gap="medium">
        <SiteHeading level="3" margin="none">
          METAVERSE PASS
        </SiteHeading>
        <Box direction="column" align="center" width="large" margin="medium">
          <Box direction="row-responsive" background="white" gap="small" fill="horizontal">
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
                  &bull; Minting Friday January 28th 7pm UTC, with 30 mins early whitelist access
                </Text>
              </Box>
            </Box>
          </Box>
          <Box direction="column" background="background-front" pad="medium" fill="horizontal">
            <Text textAlign="center">Send 20 ADA to the address below once minting starts</Text>
            <StyledBox fill="horizontal" direction="row-responsive" gap="small" justify="center" align="center" pad="small">
              {addressData?.isActive ? <Text color="terminal">{addressData.address}</Text> : <Countdown date={new Date(Date.UTC(2022, 0, 28, 19))} renderer={CountdownRenderer} />}
            </StyledBox>
            <Text textAlign="center" color="status-warning" size="small" margin={{ top: 'small' }}>
              You must send the{' '}
              <Text size="small" weight="bold">
                exact amount
              </Text>{' '}
              to the address above, and hold an ADAPunk at the time of minting. You can purchase up to 5 per transaction by sending e.g. 40 ADA for two NFTs, 100 ADA for 5, and so
              on
            </Text>
          </Box>
          {addressData?.isActive && <CollageDetailsTicker title="Recently minted" nfts={data?.results || []} background="white" ignoreConstraint indentTitle fill="horizontal" />}
          <Box direction="column" pad="medium" fill="horizontal">
            <Text textAlign="center">Collage policy ID</Text>
            <Text textAlign="center" wordBreak="break-all">
              {siteMetadata.collagePolicyId}
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default MVP;
