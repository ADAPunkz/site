import { FC } from 'react';

import { NftDetailsTickerProps, PunkzNft } from '../utils';
import NftDetailsTicker from './NftDetailsTicker';
import PunkzAttributes from './PunkzAttributes';

const CollageDetailsTicker: FC<NftDetailsTickerProps<PunkzNft>> = ({ title, nfts }) => (
  <NftDetailsTicker title={title} nfts={nfts} attributes={PunkzAttributes} pathSelector={(nft) => `punkz/${nft.edition}.png`} />
);

export default CollageDetailsTicker;
