import { FC } from 'react';

import { CollageNft, getCollageImageName } from '../utils';
import CollageAttributes from './CollageAttributes';
import NftDetailsTicker from './NftDetailsTicker';

const CollageDetailsTicker: FC<{ title: string; nfts: CollageNft[] }> = ({ title, nfts }) => (
  <NftDetailsTicker title={title} nfts={nfts} attributes={CollageAttributes} pathSelector={(nft) => `collages/${getCollageImageName(nft as CollageNft)}.gif`} />
);

export default CollageDetailsTicker;
