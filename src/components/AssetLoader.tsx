import { useQuery } from 'react-query';

import { Nft } from '../utils';

const AssetLoader = ({ children, endpoint }: { children: (nft: Nft, isFetched: boolean) => JSX.Element; endpoint: string }) => {
  const { data, isFetched } = useQuery<Nft>(endpoint);
  return children(data, isFetched);
};

export default AssetLoader;
