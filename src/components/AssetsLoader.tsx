import { useQueries } from 'react-query';

import { assetNamesToEndpoints } from '../utils';
import NftDetailsTicker from './NftDetailsTicker';

const AssetsLoader = ({ assetNames }: { assetNames: string[] }) => {
  const endpoints = assetNamesToEndpoints('/punkz', 'ADAPunk', assetNames);
  const results = useQueries(
    endpoints.map((endpoint) => {
      return {
        queryKey: endpoint,
      };
    }),
  );

  const nfts = [];

  for (let i = 0; i < results?.length; i++) {
    const result = results[i];

    if (result.isLoading) {
      continue;
    }

    nfts.push(result.data);
  }

  return <NftDetailsTicker title="My Collection" nfts={nfts} />;
};

export default AssetsLoader;
