import { Box, Button, Image, Notification, Spinner, StatusType, Text, TextInput } from 'grommet';
import { StatusCritical, StatusGood, StatusUnknown } from 'grommet-icons';
import { useState } from 'react';
import Countdown from 'react-countdown';
import { useMutation, useQuery } from 'react-query';
import styled from 'styled-components';

import CollageDetailsTicker from '../components/CollageDetailsTicker';
import Layout from '../components/Layout';
import SiteHeading from '../components/SiteHeading';
import { apiUrl } from '../config';
import { useSiteMetadata } from '../hooks';
import { CollageNft, MintingAddress, NftApiResponse, WhitelistCheck } from '../utils';

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
  const [checkAddress, setCheckAddress] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const siteMetadata = useSiteMetadata();

  const { data } = useQuery<NftApiResponse<CollageNft>>('/collage?page=1&pageSize=50&sort=mintedAt&direction=desc');
  const { data: addressData } = useQuery<MintingAddress>('/collage/mint/address');

  const addressCheck = useMutation<WhitelistCheck, unknown, string>('/collage/mint/whitelist', async (address) => {
    const response = await fetch(`${apiUrl}/collage/mint/whitelist/${address}`);
    return response.json();
  });

  const runCheck = async () => {
    await addressCheck.mutateAsync(checkAddress);
    setToastVisible(true);
  };

  let icon = <StatusUnknown color="status-unknown" size="32px" />;
  let status: StatusType = 'unknown';
  let title = 'Status unknown';
  let message = 'Please check you entered a value in the input';

  if (addressCheck.isSuccess) {
    switch (addressCheck.data.isWhitelisted) {
      case true:
        icon = <StatusGood color="status-ok" size="32px" />;
        status = 'normal';
        title = 'Your address is whitelisted!';
        message = 'Make sure to mint from the wallet that owns this address';
        break;
      default:
        icon = <StatusCritical color="status-critical" size="32px" />;
        status = 'critical';
        title = 'Address not whitelisted';
        message = 'Please check the value is the correct address';
    }
  }

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
          <Box direction="column" background="punkz-charcoal" pad="medium" fill="horizontal">
            <Text textAlign="center">Send 20 ADA to the address below once minting starts</Text>
            <StyledBox fill="horizontal" direction="row-responsive" gap="small" justify="center" align="center" pad="small">
              {addressData?.isActive ? <Text color="terminal">{addressData.address}</Text> : <Countdown date={new Date(Date.UTC(2022, 0, 28, 19))} renderer={CountdownRenderer} />}
            </StyledBox>
            <Text textAlign="center" color="status-warning" size="small" margin={{ top: 'small' }}>
              You must send the{' '}
              <Text size="small" weight="bold">
                exact amount
              </Text>{' '}
              to the address above, hold an ADAPunk at the time of minting, and be whitelisted to mint during presale. Initially minting is limited to 1 transaction per wallet.
            </Text>
            <Text textAlign="center" color="status-warning" size="small" margin={{ top: 'medium' }}>
              If any of these conditions are not met, you will be refunded, minus transaction fees. Keep an eye on Discord announcements for updates on when whitelist will be
              disabled and if transaction limits change.
            </Text>
          </Box>
          <Box direction="column" background="background-front" pad="medium" fill="horizontal">
            <Text textAlign="center">Check your address is whitelisted for presale</Text>
            <StyledBox fill="horizontal" direction="row-responsive" gap="small" align="center" pad="small">
              <TextInput placeholder="Wallet address" value={checkAddress} focusIndicator={false} icon={icon} onChange={(event) => setCheckAddress(event.target.value)} />
              <Box width="small" height="100%" alignSelf="center">
                <Button
                  label={
                    addressCheck.isLoading ? (
                      <Box fill="horizontal" align="center">
                        <Spinner color="white" />
                      </Box>
                    ) : (
                      <Text>Check</Text>
                    )
                  }
                  fill
                  color="terminal"
                  onClick={runCheck}
                />
              </Box>
            </StyledBox>
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
      {toastVisible && <Notification toast title={title} message={message} onClose={() => setToastVisible(false)} status={status} />}
    </Layout>
  );
};

export default MVP;
