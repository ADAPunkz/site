import { Box, Button, Tag, Text, Tip } from 'grommet';
import { useQuery } from 'react-query';

import Layout from '../components/Layout';
import SiteHeading from '../components/SiteHeading';
import { type PoolInfo } from '../utils';
import { StatusGood } from 'grommet-icons';
import styled from 'styled-components';

const AlignedTag = styled(Tag)`
  text-align: center;
`;

const Pool = () => {
  const { data } = useQuery<PoolInfo>('/pool/info');
  return (
    <Layout>
      <Box direction="column" align="center" width="large">
        <Box direction="column" background="white" pad="medium" gap="small" fill="horizontal">
          <Box direction="row" justify="between" align="center" margin={{ bottom: 'small' }}>
            <Box direction="row" gap="small" align="center">
              <SiteHeading level="2" margin="none">
                PUNKZ POOL
              </SiteHeading>
            </Box>
            <Box>
              <Button
                color="terminal"
                label="Stake"
                size="small"
                href="https://pool.pm/b6446922df11a2249e242b850eea39876494744f7125227515aff625/stake"
                target="_blank"
                rel="noreferer noopener"
              />
            </Box>
          </Box>
          <Text size="small">Punkz love passive income. The PUNKZ Stake Pool is a product of the successful and beloved ADAPunkz CNFT Project.</Text>
          <Text size="small">
            Besides the awesome PUNKZ ticker for your pool.pm, proposed future rewards for delegators include NFT Airdrops, Token ISPOs and Metaverse Incentives.
          </Text>
          <Text size="small">
            The team use their Operator Fees from their Single Pool to fund the internal infrastructure of the &quot;Punkest DAO&quot; on the Cardano Blockchain.
          </Text>
        </Box>
        <Box direction="row-responsive" gap="large" justify="center" background="background-front" pad="large" fill="horizontal">
          <Box direction="column" align="center" gap="small">
            <Text color="terminal" weight="bold">
              Stats
            </Text>
            <AlignedTag name="Live stake" value={`${(data?.liveStake / 1000).toFixed(0)}K`} />
            <AlignedTag name="Active stake" value={`${(data?.activeStake / 1000).toFixed(0)}K`} />
            <AlignedTag name="Delegators" value={data?.liveDelegators} />
            <AlignedTag name="Saturation" value={`${(data?.liveSaturation * 100).toFixed(1)}%`} />
            <AlignedTag name="Margin" value={`${(data?.marginCost * 100).toFixed(0)}%`} />
            <Box direction="row" gap="xsmall" align="center">
              <AlignedTag name="Pledge" value={`${data?.declaredPledge / 1000}K`} />
              {data?.livePledge > data?.declaredPledge && (
                <Tip content="Pledge met">
                  <StatusGood color="status-ok" size="28px" />
                </Tip>
              )}
            </Box>
            <AlignedTag name="Lifetime blocks" value={`${data?.blocksMinted}`} />
            <AlignedTag name="Epoch blocks" value={`${data?.blocksEpoch}`} />
          </Box>
          <Box direction="column" align="center" gap="small">
            <Text color="terminal" weight="bold">
              Specs <Text size="small">(Core + 1 relay)</Text>
            </Text>
            <AlignedTag name="CPU" value="Quad-core 3.20GHz" />
            <AlignedTag name="RAM" value="32GB" />
            <AlignedTag name="HDD" value="4x2TB in RAID10" />
            <AlignedTag name="Network" value="1Gbps up/down" />
            <AlignedTag name="Location" value="Amsterdam" />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Pool;
