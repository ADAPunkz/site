import { useQueries } from 'react-query';

import { assetNamesToEndpoints } from '../utils';
import PunkzDetailsTicker from './PunkzDetailsTicker';

const AssetsLoader = ({ assetNames }: { assetNames: string[] }) => {
  const endpoints = assetNamesToEndpoints('/punkz', 'ADAPunk', assetNames);
  const results = useQueries(
    endpoints.map((endpoint) => ({
      queryKey: endpoint,
    })),
  );

  const nfts = [];

  for (let i = 0; i < results?.length; i++) {
    const result = results[i];

    if (result.isLoading) {
      continue;
    }

    nfts.push(result.data);
  }

  return <PunkzDetailsTicker title="My Collection" nfts={nfts} />;
};

export default AssetsLoader;
