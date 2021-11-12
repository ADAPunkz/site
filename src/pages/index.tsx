import { StaticImage } from 'gatsby-plugin-image';
import { Box, Button } from 'grommet';
import { useState } from 'react';
import { useQuery } from 'react-query';

import AssetsLoader from '../components/AssetsLoader';
import Layout from '../components/Layout';
import NftDetailsTicker from '../components/NftDetailsTicker';
import SiteHeading from '../components/SiteHeading';
import { useStore } from '../hooks/store';
import { NftApiResponse } from '../utils';

enum Collections {
  Recent,
  Owned,
}

const Index = () => {
  const [collection, setCollection] = useState(Collections.Recent);

  const { data } = useQuery<NftApiResponse>('/punkz?page=1&pageSize=50&onSale=true&sort=listedAt&direction=desc');
  const assets = useStore((state) => state.assets);

  const onToggle = () => {
    switch (collection) {
      case Collections.Recent:
        setCollection(Collections.Owned);
        break;
      default:
        setCollection(Collections.Recent);
    }
  };

  return (
    <Layout>
      <Box direction="column">
        {collection === Collections.Recent || assets.length < 1 ? (
          <NftDetailsTicker title="Recently Listed" nfts={data?.results || []} />
        ) : (
          <AssetsLoader assetNames={assets} />
        )}
        <Box fill="horizontal" direction="row" justify="end">
          <Box width="small">
            {assets.length > 0 && (
              <Button label={collection === Collections.Owned ? 'Show Recent' : 'Show Mine'} color="white" onClick={onToggle} margin={{ vertical: 'small' }} />
            )}
          </Box>
        </Box>
        <Box direction="column" justify="center" align="center" margin="medium">
          <StaticImage src="../images/home.png" alt="ADAPunkz Home" width={210} placeholder="none" loading="eager" objectFit="contain" />
          <SiteHeading level="4" textAlign="center">
            Anonymity. Unity. Revolution.
          </SiteHeading>
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;
