import { useQuery } from 'react-query';

import { AssetLoaderProps, Nft } from '../utils';

const AssetLoader = ({ children, endpoint }: AssetLoaderProps) => {
  const { data, isFetched } = useQuery<Nft>(endpoint);
  return children(data, isFetched);
};

export default AssetLoader;
